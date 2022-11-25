                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2022/09/27/wechaty-university-admission-helper/","revision":"48fa7e1c824700ae93c12c4acb0cbca9"},{"url":"/2022/07/26/free-uos-ui/","revision":"88bace6e2e9af2609546430a69d29d6f"},{"url":"/2022/07/22/wechaty-office-hour/","revision":"ce103c8721908cd1fb001f18e8542ee5"},{"url":"/2022/07/21/three-steps-to-develop-a-chatbot-to-generate-cartoon-avatars-in-one-second/","revision":"577908b0a3dcc18f128db2937b33eec5"},{"url":"/2022/06/23/wechaty-gateway-use/","revision":"cb5893c1817588e1007cbeec0222fc9d"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
