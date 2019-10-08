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
    "revision": "ac8e4f2ab6cb48a5a6255b3708d1232b"
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
    "url": "assets/js/18.4f4ff091.js",
    "revision": "c01567af85978cfeefd6e61467375bf9"
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
    "url": "assets/js/34.b4a70cf9.js",
    "revision": "c51e434ab1e76fd0253d48da09a4bf3f"
  },
  {
    "url": "assets/js/35.5af24273.js",
    "revision": "c65a9ef58a56cf47ad82cc1b9f7b7979"
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
    "url": "assets/js/39.9943250c.js",
    "revision": "f436dabbab13457f6c22273ff17c3a12"
  },
  {
    "url": "assets/js/4.06029280.js",
    "revision": "b1368e724d30fdcfccfc5ad6a346b68a"
  },
  {
    "url": "assets/js/40.5d2007e4.js",
    "revision": "b1740698dada32cc268d3045781db4c7"
  },
  {
    "url": "assets/js/41.e2676290.js",
    "revision": "cdfce873e8978e885fb9aaf21445e03d"
  },
  {
    "url": "assets/js/42.c7a6ea92.js",
    "revision": "798d2dce2ddd05c8e894b6ae5f5afec4"
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
    "url": "assets/js/app.91bc2331.js",
    "revision": "44b616ee04e5db83d749ed18621e74f3"
  },
  {
    "url": "course/description.html",
    "revision": "7f1eb07da0822c0ab5a59bc99d5591ed"
  },
  {
    "url": "course/schedule.html",
    "revision": "1407ce6f3ae8b4fce35cf6b18d1405ab"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "6c0ffd91d5f9598f54f1afef567a9df1"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "57f6764064bc507f643d661734d9b396"
  },
  {
    "url": "guide/css/index.html",
    "revision": "b4c853547646aad93291186cd6322996"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "8a043ca07be1b4769228d1d74194d095"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "579f92554301db612d80aa3e4c6eadbb"
  },
  {
    "url": "guide/html/index.html",
    "revision": "8555433098bc56de2cfa53db9c824636"
  },
  {
    "url": "guide/index.html",
    "revision": "9d426130d2ffb1cef51f995d90ba6e0c"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "75f73eeb10a1ba90a0f17683870bd73e"
  },
  {
    "url": "guide/node/index.html",
    "revision": "7fdc92e922734dc6352489bede161849"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "269b0e99d85b5075f8a6c803ef483d66"
  },
  {
    "url": "index.html",
    "revision": "353be2775fdfd023785c96a711f5e63e"
  },
  {
    "url": "projects/index.html",
    "revision": "dcbab91e201c453eedc2582b70db1764"
  },
  {
    "url": "projects/project-01.html",
    "revision": "432403f931c9aa2d5c32c8c11cf36b63"
  },
  {
    "url": "projects/project-02.html",
    "revision": "050710e5ff7c5c6865a0b9d0613a0a9f"
  },
  {
    "url": "references/book-02.html",
    "revision": "ec87e28dcc76d0f810bceff99bf673f2"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "111dfaf97adf53ef5ec91475341deee7"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "419902522c6346f2cb9852e494edafa8"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "0efce189c37ee47a8ce035007d83ab31"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "d1214bcc5e06f7f65b5756349d3c0706"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "9177197de4af16c6ab1c7b9908c3b002"
  },
  {
    "url": "references/index.html",
    "revision": "60267bdafc231599c4cd26a2e30c7bc9"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "a0ededfd422e11aa30f368543919cdd7"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "df84212b5066424ef1ddbde770cddfdf"
  },
  {
    "url": "tasks/task1.html",
    "revision": "7b87f1e27521cd750e4fff970ac7b5fc"
  },
  {
    "url": "tasks/task2.html",
    "revision": "f7b89435532309af1ac5855607360f65"
  },
  {
    "url": "tasks/task3.html",
    "revision": "223f449f61021369b503dda9b32df3fd"
  },
  {
    "url": "tasks/task4.html",
    "revision": "019c14c2796d1b9e54be040769b64539"
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
