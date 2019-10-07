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
    "revision": "f8cf83662d48e3a308c6d5c017fa63e1"
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
    "url": "assets/js/11.924380cb.js",
    "revision": "9563cc303928baaa1bc3ebea59de9f0a"
  },
  {
    "url": "assets/js/12.b8c87deb.js",
    "revision": "ee63e8b0c83826ee04bc488cf009c3bc"
  },
  {
    "url": "assets/js/13.f476e231.js",
    "revision": "1b8a2dcbf416d05c448946cab749754e"
  },
  {
    "url": "assets/js/14.bdd5443b.js",
    "revision": "5da15b50820f783cc9a80b1226d40a5e"
  },
  {
    "url": "assets/js/15.0076923d.js",
    "revision": "c07401d7f3e86fbb01ed8ea4b59e9d39"
  },
  {
    "url": "assets/js/16.94734976.js",
    "revision": "356f28b369c75cff25d51db74a140ed8"
  },
  {
    "url": "assets/js/17.ee2998cb.js",
    "revision": "90944fb783cd08688495d4c219229558"
  },
  {
    "url": "assets/js/18.427d50d3.js",
    "revision": "07a43d97c9443ddc2d0b85739b9cef42"
  },
  {
    "url": "assets/js/19.9e799a20.js",
    "revision": "95b4f02bfbf07560e2d8dd22088785c0"
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
    "url": "assets/js/21.80509141.js",
    "revision": "1723bbe92aaa7f64b0ae1191f7f4e733"
  },
  {
    "url": "assets/js/22.80b5ba4c.js",
    "revision": "49eb3e8b63af1ad1b8d48fd0112e37e8"
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
    "url": "assets/js/25.c66d95ed.js",
    "revision": "1f413129d27b077d5185526bb7f0b271"
  },
  {
    "url": "assets/js/26.021cfde0.js",
    "revision": "caee7c06abf9ad2521504cd460dd0c35"
  },
  {
    "url": "assets/js/27.7db5f7fb.js",
    "revision": "d3a22d77ee7a5c5f65c873256e424d0e"
  },
  {
    "url": "assets/js/28.6103fc69.js",
    "revision": "955f8e139dbf4b95fa69204750f5a94b"
  },
  {
    "url": "assets/js/29.23e8c761.js",
    "revision": "6401e07ba97b5fe8068b1106807a4cca"
  },
  {
    "url": "assets/js/30.5783de48.js",
    "revision": "d58d3c21cbab7125ffa1a1f473f6b06d"
  },
  {
    "url": "assets/js/31.131db8a5.js",
    "revision": "046088a8c2ec4626ba14c1f1a8187060"
  },
  {
    "url": "assets/js/32.b38d377e.js",
    "revision": "8d318460fa3ead3fcfa254654095f7d1"
  },
  {
    "url": "assets/js/33.5c8d39ee.js",
    "revision": "8a0f7bd712d122da354b84139f721d69"
  },
  {
    "url": "assets/js/34.06659365.js",
    "revision": "a07daefa4430a416f53e596aed5b40a7"
  },
  {
    "url": "assets/js/35.f7249d9b.js",
    "revision": "07a9beb3f8ea9b010cbffc4d00396990"
  },
  {
    "url": "assets/js/36.a8573fa0.js",
    "revision": "e8c3bab5d8c6693f0d4b3c0ea0a37a09"
  },
  {
    "url": "assets/js/37.32347d60.js",
    "revision": "82403a58199d8a26a5cdd842b16c5be1"
  },
  {
    "url": "assets/js/38.83432d53.js",
    "revision": "c1592cbee731676c637bbcbfaa46084e"
  },
  {
    "url": "assets/js/39.5d63f4f3.js",
    "revision": "0265cb2abbbc4d46f214d71ad9b13a65"
  },
  {
    "url": "assets/js/4.06029280.js",
    "revision": "b1368e724d30fdcfccfc5ad6a346b68a"
  },
  {
    "url": "assets/js/40.22ef7397.js",
    "revision": "84a9281573d04413a6c8a34071440036"
  },
  {
    "url": "assets/js/41.a6695717.js",
    "revision": "2c78de66dd9c763f7c4125d5c7f08b0d"
  },
  {
    "url": "assets/js/42.02e11ebc.js",
    "revision": "94ea8f317c429d0ed0e96f8073bb5c75"
  },
  {
    "url": "assets/js/43.adb5f40d.js",
    "revision": "429b368f35ab05c277a77cc3f57012af"
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
    "url": "assets/js/7.46030e7e.js",
    "revision": "aad9c8b304213ce57e47e37c2cf5d5b5"
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
    "url": "assets/js/app.42482322.js",
    "revision": "6a124366050ad4e21c1269fe828893ea"
  },
  {
    "url": "course/description.html",
    "revision": "44b3a0e20120087912fe995299b31446"
  },
  {
    "url": "course/schedule.html",
    "revision": "f0255175a4393530593823732bd75c9a"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "26b8a05c5e866a8ce23580ff27444588"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "988f13fcdac3564b6d9ae523f071272b"
  },
  {
    "url": "guide/css/index.html",
    "revision": "74b9f9ac6f89a79c834cd76be34b7792"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "46e9ace56ddcef1143ae6d8628b1272c"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "b3af2e62da8bbb1253b9af21e60193a0"
  },
  {
    "url": "guide/html/index.html",
    "revision": "db6039bd058433caa3393c043f927450"
  },
  {
    "url": "guide/index.html",
    "revision": "d271b6706c6492c69ed1ae297fe477da"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "4ae4e241e3631aa7b6f357e1c8cc8afe"
  },
  {
    "url": "guide/node/index.html",
    "revision": "e59e352c19808dda39f115c45eae394e"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "dc27a715e019006ac9970262c630cfb1"
  },
  {
    "url": "index.html",
    "revision": "2bac92f8f7b5afea9a326739fa62193b"
  },
  {
    "url": "projects/index.html",
    "revision": "56943a946c939ae10ccc19b092892c13"
  },
  {
    "url": "projects/project-01.html",
    "revision": "07ae13f7974d650be4b3d731e1d0fa57"
  },
  {
    "url": "projects/project-02.html",
    "revision": "d1e1e4137a40f7d9afce54b31e73a146"
  },
  {
    "url": "references/book-02.html",
    "revision": "de16e971b47625eda7f761149a0912c2"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "447828fb97e3e0aeadf2bb04aaa7d531"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "58abb9dc2ceb6e09248400bdda9ca440"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "61d41a911754524ce89cbee49c10f7f6"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "44429032aa8567f09ef2f342c71d8932"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "6d9cdf044f822326ab98dcb71f6e2fec"
  },
  {
    "url": "references/index.html",
    "revision": "f58dc59a0208ac20498c5b69fd332817"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "b48d7937222d2c8abb76509cb3a15906"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "f5f87bdb13848893e0daffaacb711c56"
  },
  {
    "url": "tasks/task1.html",
    "revision": "fdf4d18143027bb98794e1ca39cfc013"
  },
  {
    "url": "tasks/task2.html",
    "revision": "66b3c5ee14262cc682d93da98b26a189"
  },
  {
    "url": "tasks/task3.html",
    "revision": "1e38f65fe2b2ac020eae0169168d40b3"
  },
  {
    "url": "tasks/task4.html",
    "revision": "3d8989fa93f1a6ea62ada67b113d9067"
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
