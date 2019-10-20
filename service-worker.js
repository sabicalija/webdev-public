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
    "revision": "ce132bdc83f74e1328c21bf24b2d52ca"
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
    "url": "assets/js/18.3c708005.js",
    "revision": "fefc46a4273c02dc40ba15f20d793e41"
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
    "url": "assets/js/21.b6898cf3.js",
    "revision": "a971925f1fb3094ad0b0542e8a0ea19b"
  },
  {
    "url": "assets/js/22.da1e0a4b.js",
    "revision": "5646d0865550fb2fbdd2a4ae59170c8d"
  },
  {
    "url": "assets/js/23.7968ba7b.js",
    "revision": "ca258246207517916f24fdf4dd17cebb"
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
    "url": "assets/js/30.c5047177.js",
    "revision": "06cc0a502a09c411e9b8e1608e7928c2"
  },
  {
    "url": "assets/js/31.c466152f.js",
    "revision": "a7133a3609c5a6adce6139214443950e"
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
    "url": "assets/js/34.beedaba2.js",
    "revision": "9adf47c0493b83453893d5922d97f5c8"
  },
  {
    "url": "assets/js/35.f30a83e3.js",
    "revision": "65669faeb4f25eec05295279358887c6"
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
    "url": "assets/js/app.b7929381.js",
    "revision": "e0bb750047f2ce0fa0fd105de8ad120a"
  },
  {
    "url": "course/description.html",
    "revision": "de3b1f352e69cbd337e2e4e712d1198e"
  },
  {
    "url": "course/schedule.html",
    "revision": "39fb24214d8a8927733ba5759bc286e4"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "fb128ae1940df4ebf7fc67707e3ed55b"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "b2822a50ce681e50319a6fb897a4bc66"
  },
  {
    "url": "guide/css/index.html",
    "revision": "1ccc1e6a49b96304ec12c5c1cf14d2b6"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "9502d452b80bcece17e2732ddba18c3d"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "b51ea97f1a07df21c8a5278c0ac1602d"
  },
  {
    "url": "guide/html/index.html",
    "revision": "5f87d06220ecf35e221f079d8ce8e49f"
  },
  {
    "url": "guide/index.html",
    "revision": "cc36be43fbceda9eccaa7cbc5cfb9659"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "347b1e94a46f6c544518f623d0aa9a8c"
  },
  {
    "url": "guide/node/index.html",
    "revision": "3dbf42d7d7f421e3b9372a2b44c9eea3"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "703827d672973e15ba0219b26f054185"
  },
  {
    "url": "index.html",
    "revision": "5b73afd51ad4b19f842a75c12d611638"
  },
  {
    "url": "projects/index.html",
    "revision": "f62627665e9b01e2fc7ee951ac23250b"
  },
  {
    "url": "projects/project-01.html",
    "revision": "57cc3e7f404da1a9cbf8ba11a4844b11"
  },
  {
    "url": "projects/project-02.html",
    "revision": "f02c25541f0dd5a69a6b8fe47e106eb9"
  },
  {
    "url": "references/book-02.html",
    "revision": "6f0395fdf5e3867c968251a4f0b780d9"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "eeb0ac0a5844b247154c0d47fac60fb2"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "34a85b2a59ad5eef6b45c9bc883272ae"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "1366318d0f08be02a28d2aaefc29a5c8"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "2686d5017e693c857b2d6a9de85947f0"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "aa6280dadb509ac558757f95c326afb4"
  },
  {
    "url": "references/index.html",
    "revision": "b20f6429b2d9fc711c15fd1b21f2b04f"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "4fcd88daa4ed2723c44e42504c5a89ff"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "1770b400ab19458934f23da76742c051"
  },
  {
    "url": "slides/lecture-05.html",
    "revision": "2a3b397b60599155a520c15988dd8bae"
  },
  {
    "url": "tasks/task1.html",
    "revision": "fa591e81b9aff69fab8c772fd864edd8"
  },
  {
    "url": "tasks/task2.html",
    "revision": "b0f54ee9d38cdf136e22eb3c2cecd7c4"
  },
  {
    "url": "tasks/task3.html",
    "revision": "98675654d70fbb1cc3d7d4a91dc1eec4"
  },
  {
    "url": "tasks/task4.html",
    "revision": "b4e9323d0ff2d39e215a8a30468e24dc"
  },
  {
    "url": "tasks/task5.html",
    "revision": "b22093c9dc31e2b7f8997fa7b470e2d5"
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
