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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0753e353f0daa722296ae746073d8db4"
  },
  {
    "url": "assets/css/0.styles.f9dd61fc.css",
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
    "url": "assets/js/1.855d8239.js",
    "revision": "5fce714686d74a77f8656d77b1b48e0f"
  },
  {
    "url": "assets/js/10.b3fa2547.js",
    "revision": "41acfa1c3471f2b421790929e262c60e"
  },
  {
    "url": "assets/js/11.020d4180.js",
    "revision": "c72d6c48fca0850428e744a4dd33b357"
  },
  {
    "url": "assets/js/12.81e57d10.js",
    "revision": "e2ff61ad73ed6f41ce23cdd26593eeb7"
  },
  {
    "url": "assets/js/13.a91c7770.js",
    "revision": "5656885383c1647f10194b4f3d6f183f"
  },
  {
    "url": "assets/js/14.bdd5443b.js",
    "revision": "5da15b50820f783cc9a80b1226d40a5e"
  },
  {
    "url": "assets/js/15.fbb2fa90.js",
    "revision": "c59e120732a444a7b24b6f2c6de03ff4"
  },
  {
    "url": "assets/js/16.61294f1c.js",
    "revision": "83effae7c5a180eec7ce0ea09a261783"
  },
  {
    "url": "assets/js/17.7a3e2a6c.js",
    "revision": "ac301ebad5d1321fd82b2c45b39642ee"
  },
  {
    "url": "assets/js/18.ec673388.js",
    "revision": "09dff5344ee9bc8ca35a78551c3acd11"
  },
  {
    "url": "assets/js/19.8e13b46b.js",
    "revision": "5a38d0bc292acdf83e635251a7cdca34"
  },
  {
    "url": "assets/js/2.8e4169f3.js",
    "revision": "3cff175bbd310f56496b49ed5ce47285"
  },
  {
    "url": "assets/js/20.93806e95.js",
    "revision": "04bc63375ac243b2915f749aa628bec9"
  },
  {
    "url": "assets/js/21.b6639c73.js",
    "revision": "b641a2863332df054c02379fdfd99fcc"
  },
  {
    "url": "assets/js/22.7bc7c73c.js",
    "revision": "7bf9c4da8908da36815f0d58c84e24dc"
  },
  {
    "url": "assets/js/23.43972876.js",
    "revision": "df1503ec884f8c9adb41caedb167db26"
  },
  {
    "url": "assets/js/24.b0672c1e.js",
    "revision": "1eea551808054e9c6390131e579e16ea"
  },
  {
    "url": "assets/js/25.403b95e6.js",
    "revision": "dcb14ce8caf86691908f50195df59e86"
  },
  {
    "url": "assets/js/26.b5c707cc.js",
    "revision": "e768e4d0ee0656f1141c1c49b45abc19"
  },
  {
    "url": "assets/js/27.fff58f74.js",
    "revision": "eb64b22a419406fb93910798a8644faf"
  },
  {
    "url": "assets/js/28.71a09c13.js",
    "revision": "4141c5c5f12646cf5a262e2870857e8b"
  },
  {
    "url": "assets/js/29.e1eab0f9.js",
    "revision": "2ebcc126b38c2eb9ed1bc1b87bae0cc5"
  },
  {
    "url": "assets/js/30.ffbafd36.js",
    "revision": "338c089190faf4d28c0f9668954aa5a5"
  },
  {
    "url": "assets/js/31.13ec2681.js",
    "revision": "1622b3197982295f690451cd8ba4b1a3"
  },
  {
    "url": "assets/js/32.2b2d209a.js",
    "revision": "23dc21034b24ae1b3efec9e5a982b106"
  },
  {
    "url": "assets/js/33.d071f93c.js",
    "revision": "04f734daa323decad9fc603658e1194a"
  },
  {
    "url": "assets/js/34.111878cc.js",
    "revision": "d0349d8805d18afb3448d434908ef593"
  },
  {
    "url": "assets/js/35.da9861b8.js",
    "revision": "f59c7e4ea7942f5c37d68b824132ea76"
  },
  {
    "url": "assets/js/36.58e749aa.js",
    "revision": "b97f46b81a621761e6c9b5f8762d0e4d"
  },
  {
    "url": "assets/js/37.98117ec9.js",
    "revision": "1a1ee4e335cf4b55b5757127136bf1f9"
  },
  {
    "url": "assets/js/38.e92c1adb.js",
    "revision": "85573bce7f2ac8f5ca4b6b09ab9615de"
  },
  {
    "url": "assets/js/39.2234c930.js",
    "revision": "13b0cbe3fc57e78486a138a77f7bf537"
  },
  {
    "url": "assets/js/4.e4541630.js",
    "revision": "4f2ff411097f4d528f1f2aeafffb6faa"
  },
  {
    "url": "assets/js/40.b9138f68.js",
    "revision": "c32d3042e6b4f056f1a7216a5b5b0b24"
  },
  {
    "url": "assets/js/41.5b38a586.js",
    "revision": "05f3b1c4af3a0e2133d332a9c8843b1b"
  },
  {
    "url": "assets/js/42.3d9fb625.js",
    "revision": "5594e537a24033f6de6a315af35f4b17"
  },
  {
    "url": "assets/js/43.2808b284.js",
    "revision": "3b2315c0e6fa5b418e75bf8210c5236f"
  },
  {
    "url": "assets/js/44.9e299c72.js",
    "revision": "ff5919c8cc0bf5ee9b6fd98647abcea3"
  },
  {
    "url": "assets/js/5.6741c86a.js",
    "revision": "19a73ae248fe3df0206fa4fe57a2ab0b"
  },
  {
    "url": "assets/js/6.99c60e29.js",
    "revision": "49373d4116f0ae2463c147d22e15a6d5"
  },
  {
    "url": "assets/js/7.e1c9d40b.js",
    "revision": "3a79b3edba194f7aad3e48b9a1bb433b"
  },
  {
    "url": "assets/js/8.6be782de.js",
    "revision": "3c95f73836e206d78c9329dba1860559"
  },
  {
    "url": "assets/js/9.67194094.js",
    "revision": "578e8ff49e14d91b7da98ebccd10a9a7"
  },
  {
    "url": "assets/js/app.70eb0800.js",
    "revision": "7b45aa1778be60b50c74daa365871572"
  },
  {
    "url": "course/description.html",
    "revision": "3e56a79ff30fef38d5712355289c0666"
  },
  {
    "url": "course/schedule.html",
    "revision": "c3ea5d654de47b03e56c1614fee9fef0"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "d960cc7d71d351a67d1654bc4ef79bd3"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "96942e07164182ca47653597256ea2de"
  },
  {
    "url": "guide/css/index.html",
    "revision": "964e86b0c5c111fc64dbe53f46473db8"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "be78c5a88863f0d8a2a25274a5f01190"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "a56b90d39b620fbf5963270e1861f6da"
  },
  {
    "url": "guide/html/index.html",
    "revision": "6ca0bdfc9f566d49ad3948b3a1693b91"
  },
  {
    "url": "guide/index.html",
    "revision": "1b230459d8c51f2ae9d96ff41f25d2d1"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "93933a952d6bfa5e76583156c50efebe"
  },
  {
    "url": "guide/node/index.html",
    "revision": "dcd891d5e81a1d1e877270f90b56cfc8"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "28a9ef651a589695071b3505c57cdc1a"
  },
  {
    "url": "index.html",
    "revision": "705371222e25bc4acdd3ed509194c116"
  },
  {
    "url": "projects/index.html",
    "revision": "04a9596459269ab6825f34bc6c702691"
  },
  {
    "url": "projects/project-01.html",
    "revision": "4f8a1f58efb9c49188385efa49837856"
  },
  {
    "url": "projects/project-02.html",
    "revision": "0ab4974d233cbc6da50db384e7f9f0a9"
  },
  {
    "url": "references/book-02.html",
    "revision": "155b79de3a29bde6a55e4e6f2c93fe82"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "19c1eb5c65981993b7d347e6bc3a9e05"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "a446b29606ec66ed2f7e3e8cee47dc74"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "d1addaaeb1a995edc80219af9bcf73cb"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "2b73f9d3bd737ee501a21ed0973204bf"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "b5a56fd5bb283192d26f1f3fa7bd0f45"
  },
  {
    "url": "references/index.html",
    "revision": "9c3a9c6aebbb5cdfd3eab53144c5eb77"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "52272574cd1fb74cb882b2f322e7fb9e"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "4b604a01c6afcf52562b941e48f871da"
  },
  {
    "url": "slides/lecture-05.html",
    "revision": "2232b2d5a052d025176eccb8b18e0def"
  },
  {
    "url": "tasks/task1.html",
    "revision": "9ec5dc46144f15d332ff8d3a209676b8"
  },
  {
    "url": "tasks/task2.html",
    "revision": "95d4fce2bc33758edbea1ec22c67ac50"
  },
  {
    "url": "tasks/task3.html",
    "revision": "1d1067b71294a1dd7ed60b2735393fde"
  },
  {
    "url": "tasks/task4.html",
    "revision": "6afddeaf3a1f5447521495cd07329643"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
