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
    "revision": "91e18aeee2ae442aa4eebd29880a89a2"
  },
  {
    "url": "assets/css/0.styles.eac4f185.css",
    "revision": "59608b26f5e9569b50762a873eefa63f"
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
    "revision": "69ccf1ceadb439b80aeded0f8c447ca1"
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
    "url": "assets/js/11.3415a99e.js",
    "revision": "dfdd0bb0497ea5327ff893dfb88a3eb5"
  },
  {
    "url": "assets/js/12.833b9ad4.js",
    "revision": "b02f49a7938f20249936fbfa1790b7a8"
  },
  {
    "url": "assets/js/13.d8facc37.js",
    "revision": "eb5ee714a37001087c265eeef1541619"
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
    "url": "assets/js/16.727a4ca5.js",
    "revision": "646c756343fafeb6b07ef0375d3dad07"
  },
  {
    "url": "assets/js/17.392e3e25.js",
    "revision": "fc791adae754d465a0631c09491fae0d"
  },
  {
    "url": "assets/js/18.9948b084.js",
    "revision": "339ff21345ec0083ad6b967631c935df"
  },
  {
    "url": "assets/js/19.808f117a.js",
    "revision": "210039899ddb7d19d77e33fb22e09894"
  },
  {
    "url": "assets/js/2.8e4169f3.js",
    "revision": "3cff175bbd310f56496b49ed5ce47285"
  },
  {
    "url": "assets/js/20.2fd6ec23.js",
    "revision": "3f9ed26e5b3c433197f96c7aed2bc35c"
  },
  {
    "url": "assets/js/21.80509141.js",
    "revision": "1723bbe92aaa7f64b0ae1191f7f4e733"
  },
  {
    "url": "assets/js/22.5f1186e5.js",
    "revision": "6d7199547a9662872bda15d93804b374"
  },
  {
    "url": "assets/js/23.4565a736.js",
    "revision": "7b2cdff793798ae5f20bd44cd3c500c0"
  },
  {
    "url": "assets/js/24.5b43e821.js",
    "revision": "d49f252f4111a8370d463d18a86b5185"
  },
  {
    "url": "assets/js/25.95b09dcf.js",
    "revision": "37c46193d741610d2429fd6ff062fba6"
  },
  {
    "url": "assets/js/26.a6ea5b4f.js",
    "revision": "8994234adf7b668d524c803e530f462a"
  },
  {
    "url": "assets/js/27.639994fd.js",
    "revision": "f47163513cf0f26fe5aff872033a2c04"
  },
  {
    "url": "assets/js/28.32473590.js",
    "revision": "bf0db53eaccc36a73cee3685580ed17f"
  },
  {
    "url": "assets/js/29.ce124e6c.js",
    "revision": "d92d3d889e76ffd22fe24cef21391ee5"
  },
  {
    "url": "assets/js/30.5783de48.js",
    "revision": "d58d3c21cbab7125ffa1a1f473f6b06d"
  },
  {
    "url": "assets/js/31.68f99f03.js",
    "revision": "b69ba2713f03187e04de47a3125511c5"
  },
  {
    "url": "assets/js/32.1c95324b.js",
    "revision": "e5e082ed92793f5e7c827b9c246b0f63"
  },
  {
    "url": "assets/js/33.c2cabc9d.js",
    "revision": "fe634d84c79a313c032450a1273cfca5"
  },
  {
    "url": "assets/js/34.3e7a4e32.js",
    "revision": "2ca2d060fb8674c8ca9b7cba72a64f52"
  },
  {
    "url": "assets/js/35.1c0c988f.js",
    "revision": "60349ce2d111833a7e213558309b3a26"
  },
  {
    "url": "assets/js/36.24f084b5.js",
    "revision": "4c26b9f61941610aa444fa2f1880af3e"
  },
  {
    "url": "assets/js/37.8d7029a5.js",
    "revision": "02977c87dc6030f12a37babfd9b33901"
  },
  {
    "url": "assets/js/38.83432d53.js",
    "revision": "c1592cbee731676c637bbcbfaa46084e"
  },
  {
    "url": "assets/js/39.0f6730e6.js",
    "revision": "b9dd814a239789512ace9cebe4e064ea"
  },
  {
    "url": "assets/js/4.fc21ab1c.js",
    "revision": "2f1676d6612f81ccffd1aadac22569de"
  },
  {
    "url": "assets/js/40.881b5d50.js",
    "revision": "ba4a60b91b1763727de56ce53a87229a"
  },
  {
    "url": "assets/js/41.ba54a516.js",
    "revision": "9fa9daa0f1c515d803a7c087f17aa37b"
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
    "url": "assets/js/7.1454af2b.js",
    "revision": "482cc33dba7be0cb23e56c20f4034ee6"
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
    "url": "assets/js/app.60af60f5.js",
    "revision": "e9fa526191d78b65eca166696153c677"
  },
  {
    "url": "course/description.html",
    "revision": "d99507c683d865874602e230710e9167"
  },
  {
    "url": "course/schedule.html",
    "revision": "d3de0e2268d554b4481a78d3d766138e"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "ab32378c9e81e3e143c8293330b3f61c"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "8100bc42a4afd576085c239f90f33d2a"
  },
  {
    "url": "guide/css/index.html",
    "revision": "a7d94708ae75193b4215b022f4ac473b"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "0f1b18706055c2c733561371291d143e"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "3752eee83e63b78146f1a74cbffdabc1"
  },
  {
    "url": "guide/html/index.html",
    "revision": "d0e2d91dacce7325c363869f84c5465d"
  },
  {
    "url": "guide/index.html",
    "revision": "e1a259466f0304ff3f85f0ad93813786"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "0ee9fcd6f9503cb8b0aedf2b7de55e30"
  },
  {
    "url": "guide/node/index.html",
    "revision": "0c605b011efe2abcba86f9382207e9d2"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "44fd8907c8a7cb46c8457db52903d075"
  },
  {
    "url": "index.html",
    "revision": "96765a200fc9095fa3b54d109c58b305"
  },
  {
    "url": "projects/index.html",
    "revision": "887567939095bfad5d894c1ecd23e723"
  },
  {
    "url": "projects/project-01.html",
    "revision": "cac50173eb8b5ed31d69b850dfbd836a"
  },
  {
    "url": "projects/project-02.html",
    "revision": "d6439faf020ef48ac4e2183d45ef5101"
  },
  {
    "url": "references/book-02.html",
    "revision": "04cf5d0ca14dde304f9c7dfbeb8f1e28"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "f253690b62d0d52b30283b74d1588a6c"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "8143b3df1bbcfde5e2bc7eeffa0a876b"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "6f49fa0a12fe38c5e877b5e63eac6c44"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "f454c0db6553a3c3e13b9abb5006e2ae"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "4fca6a93ab1fb8d649e7f107396246c6"
  },
  {
    "url": "references/index.html",
    "revision": "efaa793ba0a596d048e75f97a1555ae4"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "e4ca01c021e6f762d91a9af72e0a2ec8"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "9b259fb69e36fd8e1bb40f45ba12f395"
  },
  {
    "url": "tasks/task1.html",
    "revision": "da6441405c6ff6158ab61b7ca94fa475"
  },
  {
    "url": "tasks/task2.html",
    "revision": "cd93e6251b337b78d0336023fc7e15e6"
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
