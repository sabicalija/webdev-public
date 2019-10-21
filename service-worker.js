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
    "revision": "d5bb6647ad4a3f5250fa73b388fb46ea"
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
    "url": "assets/js/12.2b272f91.js",
    "revision": "ee63e8b0c83826ee04bc488cf009c3bc"
  },
  {
    "url": "assets/js/13.bf3a4536.js",
    "revision": "b4e8bf3ac713421d98385a90553068f8"
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
    "url": "assets/js/18.c662a512.js",
    "revision": "5dba86aecd8ed612c24894cb3aff02a8"
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
    "url": "assets/js/4.954f67b1.js",
    "revision": "70ec216ad3fae04e268a81dee85338bb"
  },
  {
    "url": "assets/js/40.b024f16f.js",
    "revision": "56fa269b532f097dc8bc9bd1b862b419"
  },
  {
    "url": "assets/js/41.b2bce256.js",
    "revision": "05f3b1c4af3a0e2133d332a9c8843b1b"
  },
  {
    "url": "assets/js/42.3eb1a796.js",
    "revision": "1c01d8d4d24681167736e71fc6a78416"
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
    "url": "assets/js/7.43f728f5.js",
    "revision": "413c9754d55326f08e2a328c5dcaeba7"
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
    "url": "assets/js/app.fdf5d43f.js",
    "revision": "478f8837db60186f58bf4441b424767f"
  },
  {
    "url": "course/description.html",
    "revision": "9e79a825d137295125dc8e232f42a660"
  },
  {
    "url": "course/schedule.html",
    "revision": "d0f366a6d297a351f587d1ac50691fb1"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "2d10387c27de2283260f0810dbd44910"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "681793149feb603ed867e906d58a6e36"
  },
  {
    "url": "guide/css/index.html",
    "revision": "8703b9c11f7e5c54d41e64a7b140dc36"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "5eb1a423a065a822fcea131b143314ae"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "8dac5986d7f37b85d35507e5f5776230"
  },
  {
    "url": "guide/html/index.html",
    "revision": "324079525b093e270f10c17fe0fac7b4"
  },
  {
    "url": "guide/index.html",
    "revision": "ab4f8ba7c307ebf2ab2d3dbac4f86e18"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "6be6a69815777f5883cc8620cd7e8698"
  },
  {
    "url": "guide/node/index.html",
    "revision": "50b9fc50daa169b6ec75e48bcb187e03"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "4d8ae3fb98f10120a61da6c5d1b033dd"
  },
  {
    "url": "index.html",
    "revision": "e37930a2ff7a59241bd8b31bbfff386a"
  },
  {
    "url": "projects/index.html",
    "revision": "b22e197352f5d5082d3b27858dd988be"
  },
  {
    "url": "projects/project-01.html",
    "revision": "632317585c7a6c64d86cb34d597320a7"
  },
  {
    "url": "projects/project-02.html",
    "revision": "a3a8ee8ab709730a5e255b4abe34934e"
  },
  {
    "url": "references/book-02.html",
    "revision": "43447673424edeae94382e8ea228d7f3"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "1d6650a7f5fab10f108d849896834fed"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "b81f2682b29d5c308a52f087f8c8ce1f"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "4348fe453775eb7dab5bff0bef6a0d9f"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "58afff4ed95122af6c257cc62619c0ca"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "8f3e4c91a10a82269c81d01764f0590e"
  },
  {
    "url": "references/index.html",
    "revision": "f88118ea7d2c9c16477d96b405dd287d"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "f751d60d4c8955ae1be6ac671c39d32a"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "2aecafe0c4f1ded35c65e3aa966a9fec"
  },
  {
    "url": "slides/lecture-05.html",
    "revision": "8058696475c67138ade93c9839c6f8d9"
  },
  {
    "url": "tasks/task1.html",
    "revision": "9c1f11f650a4f8f87cdd04c10a8d3f59"
  },
  {
    "url": "tasks/task2.html",
    "revision": "04a4f2f3f875fd9b2338102d9d2979fa"
  },
  {
    "url": "tasks/task3.html",
    "revision": "a0159b3aabc43859989a56b34d35d2da"
  },
  {
    "url": "tasks/task4.html",
    "revision": "e3465ad37bedfc6a12214a2e655b6e88"
  },
  {
    "url": "tasks/task5.html",
    "revision": "4e0c7230fc476f87debd27001ee1b56c"
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
