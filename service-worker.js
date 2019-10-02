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
    "revision": "4587e73c73a47687c7105f7526907201"
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
    "url": "assets/js/11.3415a99e.js",
    "revision": "dfdd0bb0497ea5327ff893dfb88a3eb5"
  },
  {
    "url": "assets/js/12.81e57d10.js",
    "revision": "e2ff61ad73ed6f41ce23cdd26593eeb7"
  },
  {
    "url": "assets/js/13.ea68fd0b.js",
    "revision": "957e2caaf74131c744ebab6fbf3340e4"
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
    "url": "assets/js/34.3dededb3.js",
    "revision": "931502f7a186d36c17eb3364c8c3d80e"
  },
  {
    "url": "assets/js/35.981ef3e5.js",
    "revision": "ed1c95452b73f7203d511d8fac41776f"
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
    "url": "assets/js/app.6f4a0c35.js",
    "revision": "a8e84c126c6af3329416ce1ec813cff0"
  },
  {
    "url": "course/description.html",
    "revision": "c7178bcab56d3a4a9185c0c123122256"
  },
  {
    "url": "course/schedule.html",
    "revision": "ce558fea30f4aeb9a3e8e9e08934300a"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "b1b56bde8b7f6a2ee8ac1c0cf1076f20"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "8daae022dd6f291ccc2d6cd3277ceb12"
  },
  {
    "url": "guide/css/index.html",
    "revision": "e91496d47b90d5cf34967c329ff7773a"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "e82e9738a4e2d2903d0fc0ccd24c985c"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "f7ec09311409c25066e05c603b67638c"
  },
  {
    "url": "guide/html/index.html",
    "revision": "582bb30307f8011e293bab07d5d1575b"
  },
  {
    "url": "guide/index.html",
    "revision": "da1a197d29cf7303b3b8bb96a38c5f1f"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "b70b6ef0fe6e5a848b8c6531234f63b3"
  },
  {
    "url": "guide/node/index.html",
    "revision": "d4a60c8b2f5ee64ab797df53354b311a"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "58339420aa76527ee0f42796b253b903"
  },
  {
    "url": "index.html",
    "revision": "4b97d96f75927a1694ca4c800da78979"
  },
  {
    "url": "projects/index.html",
    "revision": "66c752f43913cae7649cf0cf1bddc870"
  },
  {
    "url": "projects/project-01.html",
    "revision": "878fd77f9ae546aa99aad065e7cfb95b"
  },
  {
    "url": "projects/project-02.html",
    "revision": "b3f7f982e17a5dbcbf7fb4b793e2df3b"
  },
  {
    "url": "references/book-02.html",
    "revision": "2d83248cd49f6fad1a6e74bfb0c2380e"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "f370b385f7c2a879be94eaa31789163c"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "3cdff195b59dd1785974860a09ce930e"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "68600e67ee0aca2421ed5412f055cf23"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "6da9e6e41006d3ba0c6152f08062b860"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "49216b94d8e0a66724c37f1ae3ca382a"
  },
  {
    "url": "references/index.html",
    "revision": "7db06515355313de1a4a963a254c0c21"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "dddde154d2b97ccec4ec61c9584334ab"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "8aaa9d0cb6728fd2fd8ff52df37d2436"
  },
  {
    "url": "tasks/task1.html",
    "revision": "3ad836c3d13c5c792f908fef8f5fc710"
  },
  {
    "url": "tasks/task2.html",
    "revision": "ba0f401203f537cb17277da211316a7b"
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
