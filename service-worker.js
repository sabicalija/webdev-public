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
    "revision": "dffde4c99ecbe2761c7e84f4d35ca91f"
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
    "url": "assets/js/18.252f2361.js",
    "revision": "925a5d5ad1b8a72010a434bab2f5fc99"
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
    "url": "assets/js/24.b4abca5a.js",
    "revision": "f90e196c4f2adedf93c3c0330dadca6c"
  },
  {
    "url": "assets/js/25.11262e1e.js",
    "revision": "d716576d4e87c9803ccf48b6ce93510c"
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
    "url": "assets/js/28.6103fc69.js",
    "revision": "955f8e139dbf4b95fa69204750f5a94b"
  },
  {
    "url": "assets/js/29.3c655286.js",
    "revision": "b1a1111cfff175d15077e06ddf243bd9"
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
    "url": "assets/js/36.1d332400.js",
    "revision": "54971b54cd4e094d022455c43221170f"
  },
  {
    "url": "assets/js/37.59221665.js",
    "revision": "1ab8b714727f2525a1c6eab9d1db0bde"
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
    "url": "assets/js/app.92363cd4.js",
    "revision": "b81907f7df68cf9c2f8a354a3c9ae4e3"
  },
  {
    "url": "course/description.html",
    "revision": "1078b24d6756b91a3fb87d0885bd7ca8"
  },
  {
    "url": "course/schedule.html",
    "revision": "e05001a8e9e22a81430ac25de0b64f67"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "5e0cc82810eb685f84ecccc8d7b98ab7"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "9f01a59a524d6fc983b171bee73b9f53"
  },
  {
    "url": "guide/css/index.html",
    "revision": "98ece911cd964d5f384c3b51554ea494"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "7b04d2b3c26aa642f477f49629996544"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "ece8c901e8e63e33c0d6e5423d15aa08"
  },
  {
    "url": "guide/html/index.html",
    "revision": "6ec246e9863cf95a3510f1ef3012f85b"
  },
  {
    "url": "guide/index.html",
    "revision": "5743416797e11b24a718ad34a5267271"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "f003b011f776f297a20337f0e9ddf72d"
  },
  {
    "url": "guide/node/index.html",
    "revision": "2d97ea4a1387b2f7e0675a103bbf38ed"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "82a7fa4e762a2290bb8962b67539bc21"
  },
  {
    "url": "index.html",
    "revision": "2b7ce21dc3187b1bccb9900ff5d4427a"
  },
  {
    "url": "projects/index.html",
    "revision": "1bce4cc7172ceee443b901dd478e6fb1"
  },
  {
    "url": "projects/project-01.html",
    "revision": "2e0fad307190f9def18b126362c14812"
  },
  {
    "url": "projects/project-02.html",
    "revision": "8c0270ae8f59f4e100b002b83f54d29c"
  },
  {
    "url": "references/book-02.html",
    "revision": "541c1aa8c5a64773e77f6b4f88355038"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "cca21f0110c248c4ff868920035f810d"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "a9e34b0d387a9ddb05d54788652be307"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "436cb7149bb31a822b3763fe61dffcef"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "777c042a31d7acda3561cf2b2b4424a9"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "57b13aa2a8c51f3910965c6b1fed53aa"
  },
  {
    "url": "references/index.html",
    "revision": "040bbd082e8d1d3521a015546de13516"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "7520380db6fb1fc1c67f9e9b32fc7b6e"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "cbde808588fd7f25dd62237d5ed7f02f"
  },
  {
    "url": "tasks/task1.html",
    "revision": "42f74323f60af16d9ddcfe947f3f60fe"
  },
  {
    "url": "tasks/task2.html",
    "revision": "f80c96009602233d8e175523a6c8d4c0"
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
