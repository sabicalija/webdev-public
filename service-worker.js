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
    "revision": "79bd3beb92d07fe96cb20faa3ed7ef3d"
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
    "url": "assets/js/16.dbfbe75d.js",
    "revision": "83effae7c5a180eec7ce0ea09a261783"
  },
  {
    "url": "assets/js/17.939d7ea4.js",
    "revision": "ac301ebad5d1321fd82b2c45b39642ee"
  },
  {
    "url": "assets/js/18.acf595b5.js",
    "revision": "979f7ed0aec5f80ddb031b2bb39bcc55"
  },
  {
    "url": "assets/js/19.3d30a31f.js",
    "revision": "3086856225d3f61d4481f5dc1f0598a6"
  },
  {
    "url": "assets/js/2.816abf3c.js",
    "revision": "20f35aef384f17b1aefb211a0dd78090"
  },
  {
    "url": "assets/js/20.4e55af40.js",
    "revision": "0e08f2f19a710174f097541f190e849c"
  },
  {
    "url": "assets/js/21.cadfcda6.js",
    "revision": "1723bbe92aaa7f64b0ae1191f7f4e733"
  },
  {
    "url": "assets/js/22.da1e0a4b.js",
    "revision": "5646d0865550fb2fbdd2a4ae59170c8d"
  },
  {
    "url": "assets/js/23.f523f7cb.js",
    "revision": "7c2a0a2cdf18b2a7c09038edd0d70623"
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
    "url": "assets/js/26.cc00f2b7.js",
    "revision": "db13452e6d9818675dea22a8fd69f6cb"
  },
  {
    "url": "assets/js/27.1d1c872e.js",
    "revision": "d34432d5361c675420f9abfd56afd884"
  },
  {
    "url": "assets/js/28.c17d0959.js",
    "revision": "b9be7d3960daa5368266f9dd1b821c2c"
  },
  {
    "url": "assets/js/29.6a8cff61.js",
    "revision": "92ba07a27b907d64f36228d24922e063"
  },
  {
    "url": "assets/js/30.c5047177.js",
    "revision": "06cc0a502a09c411e9b8e1608e7928c2"
  },
  {
    "url": "assets/js/31.40fbbaf6.js",
    "revision": "e99237641ef1b17b61d593daeb3fa96b"
  },
  {
    "url": "assets/js/32.8a447399.js",
    "revision": "f3767c8f1f1968c53599fe39e6e236d2"
  },
  {
    "url": "assets/js/33.7c9ef622.js",
    "revision": "9f17ba1ab024f783b52c1c41b2542f48"
  },
  {
    "url": "assets/js/34.beedaba2.js",
    "revision": "9adf47c0493b83453893d5922d97f5c8"
  },
  {
    "url": "assets/js/35.7aec66f1.js",
    "revision": "89fe9fbad91b0e373db5940706151c94"
  },
  {
    "url": "assets/js/36.aa182611.js",
    "revision": "284a940dcf940d5084134af01bae49db"
  },
  {
    "url": "assets/js/37.5109dfb9.js",
    "revision": "2caa6949667bd0e7a7aecd98ecc5e98f"
  },
  {
    "url": "assets/js/38.b1a3d662.js",
    "revision": "1df9aa45c9af936475bc2cb42477114f"
  },
  {
    "url": "assets/js/39.86a060f5.js",
    "revision": "1e85f778109b97966c24b48e088f39e3"
  },
  {
    "url": "assets/js/4.b32d020e.js",
    "revision": "aa08b7201f609d3c30d411a8ad1b1410"
  },
  {
    "url": "assets/js/40.5f68c5de.js",
    "revision": "ce491aea1adbe58c5889ba627439574c"
  },
  {
    "url": "assets/js/41.8cb44b27.js",
    "revision": "ebbcc306e865baeeb794f68a429c575c"
  },
  {
    "url": "assets/js/42.e887d02a.js",
    "revision": "4f50f8b2de1e0fc0a818e9ae20dd35a2"
  },
  {
    "url": "assets/js/43.10bce181.js",
    "revision": "fb3d1fd997f6d334ccdc106a0986ae2c"
  },
  {
    "url": "assets/js/44.eb5f6b69.js",
    "revision": "f58be9414615efdca41df3a54e6d2325"
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
    "url": "assets/js/app.4f69b8d6.js",
    "revision": "ce7606e93f98dbecadc1f0029d1c1f82"
  },
  {
    "url": "course/description.html",
    "revision": "5a41feb0050aadee52a167d16860f450"
  },
  {
    "url": "course/schedule.html",
    "revision": "f3dd717351016e3f1fc511c08712ec9d"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "ffdffe9128dabddf8a1d79f1e9bb56c8"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "1e2d3f9989941c6f687598d02c3e0c52"
  },
  {
    "url": "guide/css/index.html",
    "revision": "e389f9e14affae69cf256320d476e0bf"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "88d9e22eccbd54bb930c8c46f4e49904"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "85b602de9be9e21b1028bf04560c1d3e"
  },
  {
    "url": "guide/html/index.html",
    "revision": "77fc64f024af7e27740baa10ffe83947"
  },
  {
    "url": "guide/index.html",
    "revision": "083bb431520d50fbe14e9c71f3dc0154"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "43cd3ef792506525789f5bd20e12a5f5"
  },
  {
    "url": "guide/node/index.html",
    "revision": "c8567cbfb3c51035cc02015e27bfba86"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "187b20d29564e39b4375ca48442c5ab3"
  },
  {
    "url": "index.html",
    "revision": "8a3f65b1bc54402f1557acc31e86cc1c"
  },
  {
    "url": "projects/index.html",
    "revision": "527e4853ad316fca9a3c3086e8214a3b"
  },
  {
    "url": "projects/project-01.html",
    "revision": "a79453a18a5304b799888ee8f22a52c7"
  },
  {
    "url": "projects/project-02.html",
    "revision": "c8cbfe7c2d030deab566bcf119ba65c5"
  },
  {
    "url": "references/book-02.html",
    "revision": "5f14d97c389b99999a404a5ad556d4d5"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "cb73e6476340a5c5381d0c1476575d36"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "c5ffe8cd591fcc0922418157757a82b6"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "8133ad4ff25f6c7cf7c7acba7db68e2a"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "326a21af3ce0166ad404c0ea3cf71d6f"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "bd47bd28201170d571879dc487fb27dd"
  },
  {
    "url": "references/index.html",
    "revision": "33bdbab5bee44c6a69a03a128cadbf1f"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "1868bab6c925ab802f9d75224e1f4752"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "163632801d3f57b47b326c3cbce759fb"
  },
  {
    "url": "slides/lecture-05.html",
    "revision": "e03330331544c99220127a30e7080028"
  },
  {
    "url": "tasks/task1.html",
    "revision": "ddb71118c5ccdaaa4f400ba84c62165e"
  },
  {
    "url": "tasks/task2.html",
    "revision": "661b0f6c14fd9ae9ac95c67079134b09"
  },
  {
    "url": "tasks/task3.html",
    "revision": "70012ddb881fbed3840d782ed1474b58"
  },
  {
    "url": "tasks/task4.html",
    "revision": "e95dc1d370b703123696cc789109a989"
  },
  {
    "url": "tasks/task5.html",
    "revision": "77c2522f4159339fd36d07c03a924048"
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
