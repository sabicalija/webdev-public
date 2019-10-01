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
    "revision": "7154edf0d12291e88fbda04dc253e2b6"
  },
  {
    "url": "assets/css/0.styles.1642439a.css",
    "revision": "53ba9a8a10443f6b28a745dc78c5ed07"
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
    "url": "assets/js/16.727a4ca5.js",
    "revision": "646c756343fafeb6b07ef0375d3dad07"
  },
  {
    "url": "assets/js/17.e2850685.js",
    "revision": "81126858e28ac1160d16fd93dcd3d306"
  },
  {
    "url": "assets/js/18.15d9440f.js",
    "revision": "3c56633745a65867e7af66d1d21dd46d"
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
    "url": "assets/js/20.fc6944d8.js",
    "revision": "5ba0785ac3a2a03365e2b5416e0c1c2b"
  },
  {
    "url": "assets/js/21.1416fe58.js",
    "revision": "0d1e6a31dac3e6b7d054473106d351d4"
  },
  {
    "url": "assets/js/22.9684b89d.js",
    "revision": "5646d0865550fb2fbdd2a4ae59170c8d"
  },
  {
    "url": "assets/js/23.4565a736.js",
    "revision": "7b2cdff793798ae5f20bd44cd3c500c0"
  },
  {
    "url": "assets/js/24.448a2508.js",
    "revision": "368d6556dfe9a22d93cb082b69433e3c"
  },
  {
    "url": "assets/js/25.544f1bf2.js",
    "revision": "bbf4f8cceb58ba288227cd237c8e7175"
  },
  {
    "url": "assets/js/26.5042afbe.js",
    "revision": "71ffd93bfac8480c50575d8cb6036ee2"
  },
  {
    "url": "assets/js/27.7db5f7fb.js",
    "revision": "d3a22d77ee7a5c5f65c873256e424d0e"
  },
  {
    "url": "assets/js/28.9710e33d.js",
    "revision": "0c4458a5c94595c0d623d16ce02b8eba"
  },
  {
    "url": "assets/js/29.42b93b0b.js",
    "revision": "0509d7a8a7d43fb89545f46c1601f9b3"
  },
  {
    "url": "assets/js/30.03765261.js",
    "revision": "06cc0a502a09c411e9b8e1608e7928c2"
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
    "url": "assets/js/37.b1824e40.js",
    "revision": "e4f31e80dfaa85bbab1991e8917d133a"
  },
  {
    "url": "assets/js/38.4465093d.js",
    "revision": "a7b93fb14583371a6a8ff2db0acab8da"
  },
  {
    "url": "assets/js/39.0f6730e6.js",
    "revision": "b9dd814a239789512ace9cebe4e064ea"
  },
  {
    "url": "assets/js/4.33d8a66d.js",
    "revision": "1d982d8dcee6fc7285299caa1fbd61cd"
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
    "url": "assets/js/7.9f879321.js",
    "revision": "a28e1902273b5f2557552d3c4b5cc756"
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
    "url": "assets/js/app.ad575c9a.js",
    "revision": "26e15225095926dc840fea76e5f9df64"
  },
  {
    "url": "course/description.html",
    "revision": "8ee895012f94538f98c273a70e572c1b"
  },
  {
    "url": "course/schedule.html",
    "revision": "641c89ece0b70cd3b139d6cb4c88f861"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "95dd871736c4fb1daf044a956f850bdf"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "f7648960519ea4c02c5ce3b1a550ff4a"
  },
  {
    "url": "guide/css/index.html",
    "revision": "dea7af273712ab211611c7f767da53cb"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "a4261d0f91b74a54c855cf83e048de0c"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "e530c9366a513758dc519e9d72e30d99"
  },
  {
    "url": "guide/html/index.html",
    "revision": "8b85eca070b47b7f7f9c8bef8e91b17b"
  },
  {
    "url": "guide/index.html",
    "revision": "73ede6db2600e287797064a9c596ac64"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "00978a2b02e603c8b149f9c0dc14a12d"
  },
  {
    "url": "guide/node/index.html",
    "revision": "4c1e883bcb42ad2991d4181d3375280b"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "aea722951810fd25c2fe37bd75294de5"
  },
  {
    "url": "index.html",
    "revision": "36d8f6a7bd8f654d6b37ef8302cf7d9f"
  },
  {
    "url": "projects/index.html",
    "revision": "7e064f6bea55661f66ae2b79bbd0a7d1"
  },
  {
    "url": "projects/project-01.html",
    "revision": "b224823038cbcf45eff24c675af413ea"
  },
  {
    "url": "projects/project-02.html",
    "revision": "e5dba8ed4ae988058a1ea6fb72dd3c86"
  },
  {
    "url": "references/book-02.html",
    "revision": "f246e190be404333813ca73aae906a72"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "ce2a3fd7f1145e226d466dff00bf2f57"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "f1ea0bee75ec7fb1e442b3dc0ae35bc5"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "e78bd52085d2e2f672d64796812d8154"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "8c0c099de186c861d2c44a89836e2d42"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "6dae4c8785ead6634e271cb8d1b0096f"
  },
  {
    "url": "references/index.html",
    "revision": "7bef16134c8681cc34e90225390e0039"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "7e8e1f9fc65ec04a6aaa8620d8e68f17"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "ee3c25452000bb1c5a4227c49d68dec8"
  },
  {
    "url": "tasks/task1.html",
    "revision": "a99bcc23eb0531eeb1be1038def1775e"
  },
  {
    "url": "tasks/task2.html",
    "revision": "2ffcb9ed2049ea7a8c36b1254bea3cdc"
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
