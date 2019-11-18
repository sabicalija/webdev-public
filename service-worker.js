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
    "revision": "3d3aaa409fe41123985fc6eaeace76b4"
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
    "url": "assets/js/19.f4abbb34.js",
    "revision": "c7f9c189f36f10397d815767d1c4cf52"
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
    "url": "assets/js/22.e3d0b860.js",
    "revision": "7bf9c4da8908da36815f0d58c84e24dc"
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
    "url": "assets/js/25.681cc938.js",
    "revision": "fce563bfb956eee392b48f0ac97f382c"
  },
  {
    "url": "assets/js/26.cc00f2b7.js",
    "revision": "db13452e6d9818675dea22a8fd69f6cb"
  },
  {
    "url": "assets/js/27.95e4fd0c.js",
    "revision": "cd7d92c00f84f0465bebdf284234f852"
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
    "url": "assets/js/30.ae98f0c5.js",
    "revision": "3b122d3f4f3fff4e477a603982434f86"
  },
  {
    "url": "assets/js/31.dfcdd30b.js",
    "revision": "1622b3197982295f690451cd8ba4b1a3"
  },
  {
    "url": "assets/js/32.8a447399.js",
    "revision": "f3767c8f1f1968c53599fe39e6e236d2"
  },
  {
    "url": "assets/js/33.3f58fea9.js",
    "revision": "f71aadd0d04bb0368333290d26ab1769"
  },
  {
    "url": "assets/js/34.bd36b095.js",
    "revision": "84411947c89a2c95d3129ee913890fd3"
  },
  {
    "url": "assets/js/35.00d7eb58.js",
    "revision": "ed1c95452b73f7203d511d8fac41776f"
  },
  {
    "url": "assets/js/36.375f043d.js",
    "revision": "c3b8f230f84b81237f290b4adc6443d2"
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
    "url": "assets/js/39.14698078.js",
    "revision": "13b0cbe3fc57e78486a138a77f7bf537"
  },
  {
    "url": "assets/js/4.b32d020e.js",
    "revision": "aa08b7201f609d3c30d411a8ad1b1410"
  },
  {
    "url": "assets/js/40.f408f672.js",
    "revision": "61752c59f085008cf4756fcaf4d0257e"
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
    "url": "assets/js/app.2aa19042.js",
    "revision": "9c6acf1efb355593ed00ce6d681d002b"
  },
  {
    "url": "course/description.html",
    "revision": "ac3a29201c71010e68ef6fc1e33d1f6f"
  },
  {
    "url": "course/schedule.html",
    "revision": "b68d407c291c29641ce5b3b628fdb82b"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "bf29b213e8e9ba00a78086a4cf786157"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "65848c4525b6edc497c6be26ca8d04cd"
  },
  {
    "url": "guide/css/index.html",
    "revision": "fe082ba9cbea32c33401e4afb75901b7"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "231e0da3692bd6c48bc6fb0f100cc80c"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "1e85bc6146c629864a11c0c805872e52"
  },
  {
    "url": "guide/html/index.html",
    "revision": "c6f0b7bf047e83791b269d716c7d38b5"
  },
  {
    "url": "guide/index.html",
    "revision": "d687b3f574d5b070ffd32fac18034b53"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "38e64b046957a66ac0b7969a94ac68a0"
  },
  {
    "url": "guide/node/index.html",
    "revision": "11314cca6394eadd77e1cbca85980adf"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "1f37ba4c6f3c96d047be0a6686f107d3"
  },
  {
    "url": "index.html",
    "revision": "a50b05845d79cf8fee48c496474ed3f7"
  },
  {
    "url": "projects/index.html",
    "revision": "314197f948a4fc9f175d570fbef9bd53"
  },
  {
    "url": "projects/project-01.html",
    "revision": "098eaf64fb83d0c9e719ba4f20536994"
  },
  {
    "url": "projects/project-02.html",
    "revision": "ab847a44db04aa005e82f2432ea9c008"
  },
  {
    "url": "references/book-02.html",
    "revision": "b6666cf6b66a580aadbc5b8e1fa16798"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "2a0abb0d1eeba749f001192dc0f0666a"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "f26478d581e86e21d226582c0d9e49cf"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "7bdb16e8b1c0160e15a2e809a37207be"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "e5c725a8822d48bfc110866dc1a34730"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "7735dda7a584f19c267579204af60d14"
  },
  {
    "url": "references/index.html",
    "revision": "4f9c99ffe9b32edee4aeae2f2e526560"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "a9198de57c8d5692049ab70e17a73cb9"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "49a88acc79c4ff21d5ccd7ddec0ced6f"
  },
  {
    "url": "slides/lecture-05.html",
    "revision": "8fa5f52240896099358d11182d142625"
  },
  {
    "url": "tasks/task1.html",
    "revision": "45dd1fae6e8c71198d89b3290d1947c1"
  },
  {
    "url": "tasks/task2.html",
    "revision": "be975b09db82a41517007c74e3127063"
  },
  {
    "url": "tasks/task3.html",
    "revision": "f57f407da3045fccf8abd487557d2f4f"
  },
  {
    "url": "tasks/task4.html",
    "revision": "67cfeb205ecced18ae7fd109cfd3d946"
  },
  {
    "url": "tasks/task5.html",
    "revision": "40b0a28ea1c9665156d808b911b65944"
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
