function FindProxyForURL(url, host) {
    if (shExpMatch(url, "http:\/\/*")) {
        return "DIRECT";
    }

    if (host === "junie.jetbrains.com") {
        return "PROXY socat.wpad.kube:3128";
    }

    if (dnsDomainIs(host, ".changelly.com") || host === "changelly.com") {
        return "PROXY socat.wpad.kube:3128";
    }


    if (dnsDomainIs(host, ".jetbrains.ai")) {
        return "PROXY socat.wpad.kube:3128";
    }


    // Claude
    if (dnsDomainIs(host, ".claude.com") || host === "claude.com") {
        return "PROXY socat.wpad.kube:3128";
    }
    if (dnsDomainIs(host, ".claude.ai") || host === "claude.ai") {
        return "PROXY socat.wpad.kube:3128";
    }
    if (dnsDomainIs(host, ".anthropic.com") || host === "anthropic.com") {
        return "PROXY socat.wpad.kube:3128";
    }


    //BBC
    if (dnsDomainIs(host, ".bbc.com") || host === "bbc.com") {
        return "PROXY socat.wpad.kube:3128";
    }
    if (host === "vod-dash-uk-live.akamaized.net" || host == "vod-thumb-uk-live.akamaized.net") {
        return "PROXY socat.wpad.kube:3128";
    }
    if (dnsDomainIs(host, ".devices.a2z.com")) {
        return "PROXY socat.wpad.kube:3128";
    }
    if (dnsDomainIs(host, ".uk")) {
        return "PROXY socat.wpad.kube:3128";
    }
    if (host === "vs-hls-push-uk-live.akamaized.net" || host === "vs-hls-pushb-uk-live.akamaized.net") {
        return "PROXY socat.wpad.kube:3128";
    }
    if (host === "vs-hls-push-uk-live.akamaized.net" || host === "vs-hls-pushb-uk-live.akamaized.net") {
        return "PROXY socat.wpad.kube:3128";
    }
    if (host === "vs-cmaf-push-uk-live.akamaized.net") {
        return "PROXY socat.wpad.kube:3128";
    }
    if (host === "bbcandroid.2cnt.net" ) {
        return "PROXY socat.wpad.kube:3128";
    }


    if (dnsDomainIs(host, ".skycdp.com")) {
        return "PROXY socat.wpad.kube:3128";
    }
    //ITV
    if (dnsDomainIs(host, ".itv.com") || host === "itv.com") {
        return "PROXY socat.wpad.kube:3128";
    }
    if (dnsDomainIs(host, ".itvx.com") || host === "itvx.com") {
        return "PROXY socat.wpad.kube:3128";
    }
    if (dnsDomainIs(host, ".conviva.com") || host === "conviva.com") {
        return "PROXY socat.wpad.kube:3128";
    }
    if (dnsDomainIs(host, ".launchdarkly.com") || host === "launchdarkly.com") {
        return "PROXY socat.wpad.kube:3128";
    }
    if (shExpMatch(host, "itvpnp.*")) {
        return "PROXY socat.wpad.kube:3128";
    }

    //Cruncy Roll
    if (dnsDomainIs(host, ".crunchyroll.com") || host === "crunchyroll.com") {
        return "PROXY socat.wpad.kube:3128";
    }
    if (dnsDomainIs(host, ".ketchcdn.com") || host === "ketchcdn.com") {
        return "PROXY socat.wpad.kube:3128";
    }
    if (host === "geolocation.onetrust.com") {
        return "PROXY socat.wpad.kube:3128";
    }

    //ChatGPT
    if (dnsDomainIs(host, ".chatgpt.com") || host === "chatgpt.com") {
        return "PROXY socat.wpad.kube:3128";
    }
    if (dnsDomainIs(host, ".openai.com") || host === "openai.com") {
        return "PROXY socat.wpad.kube:3128";
    }


    return "DIRECT";
}
