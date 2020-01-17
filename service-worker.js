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
    "revision": "73f2173d7f79d246321f10b64b089db6"
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
    "url": "assets/js/10.501b42bd.js",
    "revision": "17159a2b84ad4388b725c9ba8f4dec37"
  },
  {
    "url": "assets/js/11.1557a416.js",
    "revision": "fd2e3679e0a72d4a8b91ab7dbecb54a6"
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
    "url": "assets/js/16.685a4b6c.js",
    "revision": "a6703627c72ab4368ab6b49ab019e0fd"
  },
  {
    "url": "assets/js/17.5d03ba46.js",
    "revision": "5ce22f8a6bec78031d3253e6d898f024"
  },
  {
    "url": "assets/js/18.12701799.js",
    "revision": "c1589a99427232de14cd8752e13bd029"
  },
  {
    "url": "assets/js/19.0be24124.js",
    "revision": "5a38d0bc292acdf83e635251a7cdca34"
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
    "url": "assets/js/22.4895a9c8.js",
    "revision": "b17eabec7ecf1ef396c160ab200107ec"
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
    "url": "assets/js/25.3c9ab1d8.js",
    "revision": "79d3fa41220076eb211d0b26e2b4da5c"
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
    "url": "assets/js/30.db898e85.js",
    "revision": "5f925daf9318d4256c1c347d9420da5c"
  },
  {
    "url": "assets/js/31.dfcdd30b.js",
    "revision": "1622b3197982295f690451cd8ba4b1a3"
  },
  {
    "url": "assets/js/32.2ea1c9a3.js",
    "revision": "23dc21034b24ae1b3efec9e5a982b106"
  },
  {
    "url": "assets/js/33.e650de51.js",
    "revision": "04f734daa323decad9fc603658e1194a"
  },
  {
    "url": "assets/js/34.726d4bb4.js",
    "revision": "d0349d8805d18afb3448d434908ef593"
  },
  {
    "url": "assets/js/35.08430833.js",
    "revision": "81cd37f0655192ef017123d2541a63b5"
  },
  {
    "url": "assets/js/36.c17f61e9.js",
    "revision": "14d42a13d79ee0dc10fc923ae57de118"
  },
  {
    "url": "assets/js/37.5c2e3c75.js",
    "revision": "6ef8614b61ae0a95d6f785088d6a8f70"
  },
  {
    "url": "assets/js/38.a42fa569.js",
    "revision": "3038b0f2b92697641f34c5df2650852f"
  },
  {
    "url": "assets/js/39.4516609d.js",
    "revision": "79fbf28fc90f42c8dc6d91f3705e3a98"
  },
  {
    "url": "assets/js/4.b32d020e.js",
    "revision": "aa08b7201f609d3c30d411a8ad1b1410"
  },
  {
    "url": "assets/js/40.579bc170.js",
    "revision": "c4b62b8e0fd05e849b220be180df1b7e"
  },
  {
    "url": "assets/js/41.1c5ad8dc.js",
    "revision": "abc75c325aa0acbdc93b4a7004c48192"
  },
  {
    "url": "assets/js/42.3eb1a796.js",
    "revision": "1c01d8d4d24681167736e71fc6a78416"
  },
  {
    "url": "assets/js/43.349a19a7.js",
    "revision": "d1d270615ebebf6bef06c858e0774df2"
  },
  {
    "url": "assets/js/44.1223feba.js",
    "revision": "f160b9afeaae815e1e537ed167c06afb"
  },
  {
    "url": "assets/js/45.c59bc6d7.js",
    "revision": "1688306916bc9395e24034a6f5d24820"
  },
  {
    "url": "assets/js/46.f754706e.js",
    "revision": "23c3768addc6408d861a675512fb7651"
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
    "url": "assets/js/app.4f61409e.js",
    "revision": "11ddacc0f2060357d1f75b383dbebff7"
  },
  {
    "url": "course/description.html",
    "revision": "31a9c2ff29196da66d57182f4734a98f"
  },
  {
    "url": "course/schedule.html",
    "revision": "23935073c92f89cee71ee44af612cf31"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "956dca3dd0a3ad598b06e4181cd0d5cf"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "eb277fbb3dc9ab662e420ed84bcb59b9"
  },
  {
    "url": "guide/css/index.html",
    "revision": "b19faf31eea8c5970d1d574f2e2d09f2"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "ffbedc23ae2e17720a5e63c2a777b506"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "69512cc3c137097ca07b0da6741cbc37"
  },
  {
    "url": "guide/html/index.html",
    "revision": "edef050470d22a0dec17748702fa224a"
  },
  {
    "url": "guide/index.html",
    "revision": "4fd4d55372c8a4c9541953ddf59b15c5"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "f61c368f9673c04880efac92929624c1"
  },
  {
    "url": "guide/node/index.html",
    "revision": "671b98043689a3a7f5697a9bc9e9ede3"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "38327e88553cb3afc0cd1c7fc35f3bc7"
  },
  {
    "url": "index.html",
    "revision": "7e2367d5ab058b79459c90711bbcd5b5"
  },
  {
    "url": "projects/index.html",
    "revision": "b692d4b0131e73d1578a5e6c78a14a40"
  },
  {
    "url": "projects/project-01.html",
    "revision": "a7d33806e1b43fb94e3c18d735b7c035"
  },
  {
    "url": "projects/project-02.html",
    "revision": "b5999723d74ca333879bb9d7a997592a"
  },
  {
    "url": "references/book-02.html",
    "revision": "292b79cb1b4c1ad5776e2d10874346b7"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "5ba3d679b1f2d8c7c1f3ee8515b429e1"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "fef83b25c1a8c2ae093af76e6d5d8e5d"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "f9729ea2f546e00867e5d23dc309c24c"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "c1fb5f6c8c6aeaa47ceb18452f7f2224"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "82d0615c5606a09b6a93c0d3a0e3d5f8"
  },
  {
    "url": "references/index.html",
    "revision": "557438796ab9114d0894ebd9a14ef4e5"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "23de92f373414c2b85d5862a8673e335"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "7c096182d3f3d8587912e3cb4582c709"
  },
  {
    "url": "slides/lecture-05.html",
    "revision": "4f4c904241f9636fa1a9cb8bf9cbb62d"
  },
  {
    "url": "tasks/task1.html",
    "revision": "c85fff84d4dfe404fde133337bf75e8a"
  },
  {
    "url": "tasks/task2.html",
    "revision": "095ba571c07991cc89ec6fc97837085d"
  },
  {
    "url": "tasks/task3.html",
    "revision": "df35a9cb0eb83b35795b4e0a70af5b5e"
  },
  {
    "url": "tasks/task4.html",
    "revision": "9f47f061cc81c0832af86658063ba612"
  },
  {
    "url": "tasks/task5.html",
    "revision": "dd8f7186784e8a48ba152c0c3aab6b9e"
  },
  {
    "url": "tasks/task6.html",
    "revision": "e29abae99af4576dd47241ef4c2abf39"
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
