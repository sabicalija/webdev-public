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
    "revision": "456f794a649329c34cc7087b118e1f26"
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
    "url": "assets/js/12.d1d9f893.js",
    "revision": "339e9dffbab248253390ee1d76dd35b7"
  },
  {
    "url": "assets/js/13.14788fa4.js",
    "revision": "957e2caaf74131c744ebab6fbf3340e4"
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
    "url": "assets/js/16.dbfbe75d.js",
    "revision": "83effae7c5a180eec7ce0ea09a261783"
  },
  {
    "url": "assets/js/17.939d7ea4.js",
    "revision": "ac301ebad5d1321fd82b2c45b39642ee"
  },
  {
    "url": "assets/js/18.acf595b5.js",
    "revision": "979f7ed0aec5f80ddb031b2bb39bcc55"
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
    "url": "assets/js/20.91b40143.js",
    "revision": "a989bfebeb116a98fc83262ea3e81b7d"
  },
  {
    "url": "assets/js/21.b6898cf3.js",
    "revision": "a971925f1fb3094ad0b0542e8a0ea19b"
  },
  {
    "url": "assets/js/22.e3d0b860.js",
    "revision": "7bf9c4da8908da36815f0d58c84e24dc"
  },
  {
    "url": "assets/js/23.bb99a509.js",
    "revision": "601f9d398407c20a15c8521921889936"
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
    "url": "assets/js/28.c17d0959.js",
    "revision": "b9be7d3960daa5368266f9dd1b821c2c"
  },
  {
    "url": "assets/js/29.6a8cff61.js",
    "revision": "92ba07a27b907d64f36228d24922e063"
  },
  {
    "url": "assets/js/30.f510ac71.js",
    "revision": "96572bbe2dd16aad61ad85c7634a17c6"
  },
  {
    "url": "assets/js/31.c466152f.js",
    "revision": "a7133a3609c5a6adce6139214443950e"
  },
  {
    "url": "assets/js/32.7017706a.js",
    "revision": "7527e96d12a1a1e3b0d0c62228109424"
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
    "url": "assets/js/app.34604975.js",
    "revision": "86764d40ee33d9a7a3688c3101b74b5e"
  },
  {
    "url": "course/description.html",
    "revision": "6a8a6cabdcb8b0bff07cb026aac55db9"
  },
  {
    "url": "course/schedule.html",
    "revision": "b9e8d6148bc77c5fe37fd341dca32f71"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "37dc8cb6cc6ada21826e32291ffc74ed"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "85107ac8a6871c1340b48abd505759ea"
  },
  {
    "url": "guide/css/index.html",
    "revision": "74a7093b2a0b746ee604cfdf6cb35a9a"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "020813406c68f806bbddcdc256d02d9e"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "5fe84dbb53f35e5e80b0ec960893f172"
  },
  {
    "url": "guide/html/index.html",
    "revision": "5077d7a213ca6b486e23ea38fcec8401"
  },
  {
    "url": "guide/index.html",
    "revision": "fe7d2a61b7c7636f6afdd9ccf8ec26b7"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "dd5701a0cc249e0476b15c4b4878274a"
  },
  {
    "url": "guide/node/index.html",
    "revision": "fc7281abe494cfe8d85b7b62bbadf8c8"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "91b1c8e9e21c2a734cb4c3fc12915317"
  },
  {
    "url": "index.html",
    "revision": "d1dc4c931882a5aac8476d904eaa18e6"
  },
  {
    "url": "projects/index.html",
    "revision": "f65a97b273ad5cfc67645fae3f8a9d19"
  },
  {
    "url": "projects/project-01.html",
    "revision": "c23e302d6ca5cfa685dc1ef90c89ca74"
  },
  {
    "url": "projects/project-02.html",
    "revision": "1bf16a405e9471c7574633408af40640"
  },
  {
    "url": "references/book-02.html",
    "revision": "43b26e0c5a037eb79d762c5e3c587265"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "722b24e447b51dd043733237d6f8e145"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "1aa050f0bdfc6345945d008bf5807bce"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "8d3e1ca759cf8cf4cc735a6d1c4956b2"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "fedb862a60c708422239360f228c2cf6"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "8456801d51bf2d87f20e57c8ca6dce7a"
  },
  {
    "url": "references/index.html",
    "revision": "c6386ea58911239a2fb6d5b03404bf5f"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "a41dbb7b73659da305be3764cd2e0684"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "6fef71800d2303910526a97cb4364800"
  },
  {
    "url": "slides/lecture-05.html",
    "revision": "9393cad02f0a1198b5365ea9bfa23420"
  },
  {
    "url": "tasks/task1.html",
    "revision": "8bacfda5eb80e204876c141fdcc73740"
  },
  {
    "url": "tasks/task2.html",
    "revision": "62428e5e5be5fde5c53b750fb0db3e48"
  },
  {
    "url": "tasks/task3.html",
    "revision": "324cadb0634d0f0f927b1dacc80364e2"
  },
  {
    "url": "tasks/task4.html",
    "revision": "5536b7aae0e5ace05378a70709e5b5c9"
  },
  {
    "url": "tasks/task5.html",
    "revision": "1da3358f784bc1d5cd34af28e5dce7d7"
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
