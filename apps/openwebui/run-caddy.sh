#!/bin/sh
set -eu

token_file=/var/run/azure-openai/access-token
caddy_pid=
sleep_pid=
stop() {
    if [ -n "$sleep_pid" ]; then
        kill "$sleep_pid" 2>/dev/null || true
        wait "$sleep_pid" || true
    fi
    if [ -n "$caddy_pid" ]; then
        kill -TERM "$caddy_pid" 2>/dev/null || true
        wait "$caddy_pid" || true
    fi
    exit 0
}
trap stop TERM INT

while [ ! -s "$token_file" ]; do
    sleep 2 &
    sleep_pid=$!
    wait "$sleep_pid"
    sleep_pid=
done

export AZURE_OPENAI_TOKEN="$(cat "$token_file")"
caddy run --config /etc/azure-openai/Caddyfile --adapter caddyfile &
caddy_pid=$!
loaded_token=$AZURE_OPENAI_TOKEN

while kill -0 "$caddy_pid" 2>/dev/null; do
    sleep 5 &
    sleep_pid=$!
    wait "$sleep_pid"
    sleep_pid=
    export AZURE_OPENAI_TOKEN="$(cat "$token_file")"
    if [ "$AZURE_OPENAI_TOKEN" != "$loaded_token" ]; then
        if caddy reload --config /etc/azure-openai/Caddyfile --adapter caddyfile; then
            loaded_token=$AZURE_OPENAI_TOKEN
        else
            echo 'Caddy token reload failed; retrying in 5 seconds' >&2
        fi
    fi
done

wait "$caddy_pid"
