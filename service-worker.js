/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2ac5ad1d4cb3c1b8585a74b30e05cc0d"
  },
  {
    "url": "assets/css/0.styles.c5682153.css",
    "revision": "0f42bf75d8a685d1da3d41656ef532dc"
  },
  {
    "url": "assets/favicon/android-chrome-192x192.png",
    "revision": "d2ad87d0dc3537c2f445489ab9aab462"
  },
  {
    "url": "assets/favicon/android-chrome-512x512.png",
    "revision": "06c2f5bab5f6e4bc26d802c045586e73"
  },
  {
    "url": "assets/favicon/apple-touch-icon.png",
    "revision": "887bb9f019ab4582da5211c4e91dac95"
  },
  {
    "url": "assets/favicon/favicon-16x16.png",
    "revision": "2d27462da8826390451ef45b4153e575"
  },
  {
    "url": "assets/favicon/favicon-32x32.png",
    "revision": "bd38772defdc893db0f2855b00c50448"
  },
  {
    "url": "assets/favicon/mstile-150x150.png",
    "revision": "fec673d895f920a46598a9ca9e3d9cc3"
  },
  {
    "url": "assets/favicon/mstile-310x310.png",
    "revision": "cc782f860bd0f524f3bc2ac4e7faf59e"
  },
  {
    "url": "assets/favicon/safari-pinned-tab.svg",
    "revision": "e1248a3ed1352a8d0ae3439d0724ca11"
  },
  {
    "url": "assets/fonts/ubuntu/stylesheet.css",
    "revision": "9e130232c3eed4ffb05004b8ac07f454"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-bold-webfont.woff",
    "revision": "f58d27507335211a06b8aff41c6784d6"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-bold-webfont.woff2",
    "revision": "71cd5f4011632f570eafeb7ddf14fef8"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-bolditalic-webfont.woff",
    "revision": "ad880aa732bfdb09972da531bb2f3e89"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-bolditalic-webfont.woff2",
    "revision": "ea3c1842c6f8f3559a482ef48b10438d"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-italic-webfont.woff",
    "revision": "8bc01e6423fedd5b6a779fc974ef27d7"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-italic-webfont.woff2",
    "revision": "3610ec965e7134441d29b5be269eaf52"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-light-webfont.woff",
    "revision": "ea1f05b5ac614c8a0e33f91e4fecd77d"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-light-webfont.woff2",
    "revision": "2050f2a86d1b8c69c2fe73ca6f994352"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-lightitalic-webfont.ttf",
    "revision": "d9970d03b181274ccb736ac9e3b7b2ae"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-lightitalic-webfont.woff",
    "revision": "98c016df8679dd36ea96dc3876a22a7c"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-lightitalic-webfont.woff2",
    "revision": "028b80e7431adf86450ca1e3203e3f88"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-medium-webfont.woff",
    "revision": "b62d641e13f2e11e0177ab1de2a9ed6f"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-medium-webfont.woff2",
    "revision": "ce7734ac839e15ff04b274c9270b33d2"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-mediumitalic-webfont.ttf",
    "revision": "d2c6ca5e421f2c85be6db292fe608779"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-mediumitalic-webfont.woff",
    "revision": "3284976e395348776f6fe3f85d1d0565"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-mediumitalic-webfont.woff2",
    "revision": "c3899d3e548327e186a05698f69f65f9"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-regular-webfont.ttf",
    "revision": "ac59aeedd21ef0a2cafbe27a659755d0"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-regular-webfont.woff",
    "revision": "bc8de4e13923745ca2b2bca40c259673"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-regular-webfont.woff2",
    "revision": "91eeaad994ca44a5561bbe48bcb1034e"
  },
  {
    "url": "assets/img/icons/169-light-custom.svg",
    "revision": "47dff43af9003c7292c208bd8cd7b525"
  },
  {
    "url": "assets/img/icons/169-light.svg",
    "revision": "b6a8b10847ea1cd72a50506d58fc0583"
  },
  {
    "url": "assets/img/icons/169.svg",
    "revision": "f1e1ef8432de7c96128c5311c3a37500"
  },
  {
    "url": "assets/img/icons/43-light-custom.svg",
    "revision": "dbafa4ad62c55d11c5cfca38fdd522f3"
  },
  {
    "url": "assets/img/icons/43-light.svg",
    "revision": "c9ed50096de6e7956547d73e38ea9302"
  },
  {
    "url": "assets/img/icons/43.svg",
    "revision": "ffac02a32ecccc69cf48fdc8d8b0279b"
  },
  {
    "url": "assets/img/logos/css.svg",
    "revision": "2671e7b6ffd3f97a1778b33956ade792"
  },
  {
    "url": "assets/img/logos/fhtw.svg",
    "revision": "df12fe4e70e7e86bdd139d5ab6aeee6a"
  },
  {
    "url": "assets/img/logos/fhtw/css.svg",
    "revision": "ccc17a5252a407ddd89e81e64fa114a4"
  },
  {
    "url": "assets/img/logos/fhtw/html-js-css-icon.svg",
    "revision": "7f1bedf36ec4f4270e2092b31ac4a401"
  },
  {
    "url": "assets/img/logos/fhtw/html-js-css.svg",
    "revision": "47c87aba727588f07b8132df876238a3"
  },
  {
    "url": "assets/img/logos/fhtw/html.svg",
    "revision": "d389f0c4239aac40f23b216777f2313d"
  },
  {
    "url": "assets/img/logos/fhtw/javascript.svg",
    "revision": "091e6ae83b7e3c8cf9a806b57475a2a8"
  },
  {
    "url": "assets/img/logos/html-js-css.svg",
    "revision": "0b18d9c66db9e1650cab3cd517e84b71"
  },
  {
    "url": "assets/img/logos/html.svg",
    "revision": "b3d94c28bb04c827b5597c2ef6d0ce4d"
  },
  {
    "url": "assets/img/logos/javascript.svg",
    "revision": "1ac897424bdff171dca5107f60c1fef6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.6aec7f14.js",
    "revision": "2b3305403c5c8f95d4320b0c59b413c8"
  },
  {
    "url": "assets/js/10.e4c6ba9f.js",
    "revision": "41acfa1c3471f2b421790929e262c60e"
  },
  {
    "url": "assets/js/11.96cd00e3.js",
    "revision": "c72d6c48fca0850428e744a4dd33b357"
  },
  {
    "url": "assets/js/12.4685f8d6.js",
    "revision": "e2ff61ad73ed6f41ce23cdd26593eeb7"
  },
  {
    "url": "assets/js/13.8e2ce17e.js",
    "revision": "5656885383c1647f10194b4f3d6f183f"
  },
  {
    "url": "assets/js/14.c5a0bc1a.js",
    "revision": "5da15b50820f783cc9a80b1226d40a5e"
  },
  {
    "url": "assets/js/15.f946f02c.js",
    "revision": "c59e120732a444a7b24b6f2c6de03ff4"
  },
  {
    "url": "assets/js/16.736513be.js",
    "revision": "78edeffb4941beaa8ed5e468c3c73646"
  },
  {
    "url": "assets/js/17.1f8a71bc.js",
    "revision": "49cb01338712af7aafd83734c9ac6344"
  },
  {
    "url": "assets/js/18.c662a512.js",
    "revision": "5dba86aecd8ed612c24894cb3aff02a8"
  },
  {
    "url": "assets/js/19.f4abbb34.js",
    "revision": "c7f9c189f36f10397d815767d1c4cf52"
  },
  {
    "url": "assets/js/2.816abf3c.js",
    "revision": "20f35aef384f17b1aefb211a0dd78090"
  },
  {
    "url": "assets/js/20.30d50bca.js",
    "revision": "81aabda02fd609b67b7f451700e24b71"
  },
  {
    "url": "assets/js/21.b6898cf3.js",
    "revision": "a971925f1fb3094ad0b0542e8a0ea19b"
  },
  {
    "url": "assets/js/22.e3d0b860.js",
    "revision": "7bf9c4da8908da36815f0d58c84e24dc"
  },
  {
    "url": "assets/js/23.8e420f1c.js",
    "revision": "df1503ec884f8c9adb41caedb167db26"
  },
  {
    "url": "assets/js/24.add192f5.js",
    "revision": "1eea551808054e9c6390131e579e16ea"
  },
  {
    "url": "assets/js/25.4627c550.js",
    "revision": "905d53798a369d8251d1cfea6b516883"
  },
  {
    "url": "assets/js/26.3b0e881a.js",
    "revision": "e768e4d0ee0656f1141c1c49b45abc19"
  },
  {
    "url": "assets/js/27.0588c346.js",
    "revision": "eb64b22a419406fb93910798a8644faf"
  },
  {
    "url": "assets/js/28.5ced392c.js",
    "revision": "4141c5c5f12646cf5a262e2870857e8b"
  },
  {
    "url": "assets/js/29.5439e933.js",
    "revision": "2ebcc126b38c2eb9ed1bc1b87bae0cc5"
  },
  {
    "url": "assets/js/30.e64067c2.js",
    "revision": "8210c1d0543c20fc32240c4d6c02f8df"
  },
  {
    "url": "assets/js/31.6eee3586.js",
    "revision": "b69ba2713f03187e04de47a3125511c5"
  },
  {
    "url": "assets/js/32.e5fd59c4.js",
    "revision": "934aa282f3991086a2bc0e12e26bb2f7"
  },
  {
    "url": "assets/js/33.658861e7.js",
    "revision": "2d9f4862bfc700e0b145fc7e8cfb01a4"
  },
  {
    "url": "assets/js/34.726d4bb4.js",
    "revision": "d0349d8805d18afb3448d434908ef593"
  },
  {
    "url": "assets/js/35.46ef6863.js",
    "revision": "e226d58558b8de70e19fd5389475c78a"
  },
  {
    "url": "assets/js/36.10ab66cb.js",
    "revision": "3f3e3dda22f938befe9c307b2f559109"
  },
  {
    "url": "assets/js/37.daaa2f33.js",
    "revision": "d37822cc35ce9123045498c4c4219a1c"
  },
  {
    "url": "assets/js/38.64e2f4ff.js",
    "revision": "8c3d5ecb465dcc30b921e794e3e44cec"
  },
  {
    "url": "assets/js/39.61e17241.js",
    "revision": "5333c88971fca33d51e12cc87b1bf6d6"
  },
  {
    "url": "assets/js/4.b32d020e.js",
    "revision": "aa08b7201f609d3c30d411a8ad1b1410"
  },
  {
    "url": "assets/js/40.b024f16f.js",
    "revision": "56fa269b532f097dc8bc9bd1b862b419"
  },
  {
    "url": "assets/js/41.448de3df.js",
    "revision": "66b4790e8752bdd0961e65bf77ace3d9"
  },
  {
    "url": "assets/js/42.8c58a08b.js",
    "revision": "ba1d8230d637cebdadb808c27bc332ce"
  },
  {
    "url": "assets/js/43.5d882edf.js",
    "revision": "b88a6fa3ff1a2567c5b7edbc1332a8bd"
  },
  {
    "url": "assets/js/44.1223feba.js",
    "revision": "f160b9afeaae815e1e537ed167c06afb"
  },
  {
    "url": "assets/js/45.4cbb59df.js",
    "revision": "d4a0013f134e1a8494afa12ccf113880"
  },
  {
    "url": "assets/js/5.ceccbc58.js",
    "revision": "19a73ae248fe3df0206fa4fe57a2ab0b"
  },
  {
    "url": "assets/js/6.fd8c104c.js",
    "revision": "49373d4116f0ae2463c147d22e15a6d5"
  },
  {
    "url": "assets/js/7.9e820a09.js",
    "revision": "3a79b3edba194f7aad3e48b9a1bb433b"
  },
  {
    "url": "assets/js/8.562f957b.js",
    "revision": "3c95f73836e206d78c9329dba1860559"
  },
  {
    "url": "assets/js/9.2251e0cb.js",
    "revision": "578e8ff49e14d91b7da98ebccd10a9a7"
  },
  {
    "url": "assets/js/app.4229f53e.js",
    "revision": "f4342255e7b3fc6e313cd88ca5572551"
  },
  {
    "url": "course/description.html",
    "revision": "8c04a8bf45d0640278b5f8be81077aa1"
  },
  {
    "url": "course/schedule.html",
    "revision": "0c0f6c798dc1761da732c911c293da8b"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "a01e2e76da6e28a053deb00979116e90"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "c62eb16336292ac65a126f54faa50410"
  },
  {
    "url": "guide/css/index.html",
    "revision": "617412b088ca149d7e0df1a3ed701ed0"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "944ced64f9738391e38d32278614c6dc"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "840a2f625ad2acaea9b0f193220a81d3"
  },
  {
    "url": "guide/html/index.html",
    "revision": "abeac80adc74cf3deffc4f4b5b294877"
  },
  {
    "url": "guide/index.html",
    "revision": "c0b305ce874b2e7f7a241591c7e4c299"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "6fee67726ee4a60cf36f53316ec42c28"
  },
  {
    "url": "guide/node/index.html",
    "revision": "d455ac4254765a68f0eda3a8b2638f63"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "b803a725015f85273ef6eead0150d922"
  },
  {
    "url": "index.html",
    "revision": "dc2d01aad5984fbeaecbbc11647e48f4"
  },
  {
    "url": "projects/index.html",
    "revision": "68b44b5f12777476674baf44b72bf551"
  },
  {
    "url": "projects/project-01.html",
    "revision": "9f9c2870011b048738afc2d08dd67b09"
  },
  {
    "url": "projects/project-02.html",
    "revision": "4250f76691df9aecfbc9611dc391157e"
  },
  {
    "url": "references/book-02.html",
    "revision": "539c8b60e8adbc4e43c0847fb86a182a"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "c59679b192fae398ef8e98f41865877b"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "eb34c8e050138a4bf810bdcc0a91a504"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "d2dee34681f90986c6e3427b6a57841c"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "12a98adc0cdc6a8a7e3f714089d9b818"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "9153c5ac48b1a2c6493d7b25fed3d3a6"
  },
  {
    "url": "references/index.html",
    "revision": "adbae55450f5a97a43049fab3fd3a5c3"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "6dc691584df727e4d9fa2c7d81037b6d"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "8e42eab87cea5d147a9396a8d517590b"
  },
  {
    "url": "slides/lecture-05.html",
    "revision": "b76fa249671da4bd2478448a2d86953c"
  },
  {
    "url": "tasks/task1.html",
    "revision": "e62a7ececfe6d22e7fd7bec4eb85f841"
  },
  {
    "url": "tasks/task2.html",
    "revision": "76c0a4cf0a67884f508b81c38f973383"
  },
  {
    "url": "tasks/task3.html",
    "revision": "3dbb6614ce729bca25413d65d3f6b3fa"
  },
  {
    "url": "tasks/task4.html",
    "revision": "02f1c6faacae7a02da95b7862a25dd2b"
  },
  {
    "url": "tasks/task5.html",
    "revision": "9dfd21f34a3364be006e06d70b3d9d0d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
