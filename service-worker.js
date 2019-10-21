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
    "revision": "1f97d191d56345382301f703841afc0b"
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
    "url": "assets/js/12.05969d39.js",
    "revision": "b02f49a7938f20249936fbfa1790b7a8"
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
    "url": "assets/js/18.1f187bdf.js",
    "revision": "39a4a8ea7a5816d705f1e27d4c750aa2"
  },
  {
    "url": "assets/js/19.b3717133.js",
    "revision": "ab15037369775fe20553c8b44637db5a"
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
    "url": "assets/js/22.c17b7db3.js",
    "revision": "688fe06541bad88918bae41d7d3fd38d"
  },
  {
    "url": "assets/js/23.7968ba7b.js",
    "revision": "ca258246207517916f24fdf4dd17cebb"
  },
  {
    "url": "assets/js/24.236cbb1f.js",
    "revision": "d49f252f4111a8370d463d18a86b5185"
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
    "url": "assets/js/33.822e4a20.js",
    "revision": "fc8565a4c8a16fb3959cc6da4743cc31"
  },
  {
    "url": "assets/js/34.bd36b095.js",
    "revision": "84411947c89a2c95d3129ee913890fd3"
  },
  {
    "url": "assets/js/35.46ef6863.js",
    "revision": "e226d58558b8de70e19fd5389475c78a"
  },
  {
    "url": "assets/js/36.aa182611.js",
    "revision": "284a940dcf940d5084134af01bae49db"
  },
  {
    "url": "assets/js/37.daaa2f33.js",
    "revision": "d37822cc35ce9123045498c4c4219a1c"
  },
  {
    "url": "assets/js/38.452cc5ac.js",
    "revision": "c1351bc5e836cd29107c0b1186990a28"
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
    "url": "assets/js/42.68f3f9ce.js",
    "revision": "c88fa1ae529597e73a4ce4c349672a99"
  },
  {
    "url": "assets/js/43.349a19a7.js",
    "revision": "d1d270615ebebf6bef06c858e0774df2"
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
    "url": "assets/js/7.843ee77f.js",
    "revision": "b6a86f31a744faef2453a8b24c52a916"
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
    "url": "assets/js/app.e9f42cfd.js",
    "revision": "7ceead937d25d40c9895fa35ba3b2c20"
  },
  {
    "url": "course/description.html",
    "revision": "0a3805155c7305ba6afb95ca69a14fab"
  },
  {
    "url": "course/schedule.html",
    "revision": "c06cbd1b02466b0ea8e2487416cd273d"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "ba3e2cd586a97b4f48a9481daee16150"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "d28b432ecf060e14bb087f7bb2c54fa7"
  },
  {
    "url": "guide/css/index.html",
    "revision": "d0e274a8347be47d170c2926bfd1fabb"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "db963f903278eb9f57c732016e47175b"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "860db732d8532d036de938ae04f8061c"
  },
  {
    "url": "guide/html/index.html",
    "revision": "3715bcd70be4e7bb53c891792d8b03fa"
  },
  {
    "url": "guide/index.html",
    "revision": "9d21a0b936ba8c48a9955c6a2d1c75ab"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "f9ce8e81ad8cbeaaf6a69558461b0586"
  },
  {
    "url": "guide/node/index.html",
    "revision": "e65edfa1766e47a7433de8f4c1de892f"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "4dfa9da217085ca1c5566056c6a98ebd"
  },
  {
    "url": "index.html",
    "revision": "7f4faab01d8d3af60f91fc046b1b3daf"
  },
  {
    "url": "projects/index.html",
    "revision": "2d5add5746c0d07ff3e5d5385c533c71"
  },
  {
    "url": "projects/project-01.html",
    "revision": "55e174f113cf0034bd15d1d7dc2dec29"
  },
  {
    "url": "projects/project-02.html",
    "revision": "8943401b9679f9cece76c819526b37ec"
  },
  {
    "url": "references/book-02.html",
    "revision": "3f82598d327a91a8051035fc757972af"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "fdb5a26910be09061777f07cf410156b"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "e09e967dafe7f388dd03189208b7bbdd"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "02939525ca1861901b0460ed34aca755"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "ee3e6a48c146f54a1675f11499b6d3c2"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "8c9b6d73a54c3ef397423c9421f92120"
  },
  {
    "url": "references/index.html",
    "revision": "6c73c1ad2952a1daf2b9a055ecd2e29d"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "6ca6fc96b8ad6c782afdea467f27080f"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "cb888c919326ea0256e9f18183b7f5ac"
  },
  {
    "url": "slides/lecture-05.html",
    "revision": "3a9c9615f0be306aa199d26db3f2913c"
  },
  {
    "url": "tasks/task1.html",
    "revision": "23e3495a13e0ec5ce7579ea538e60f53"
  },
  {
    "url": "tasks/task2.html",
    "revision": "913daa97b014001becb5b4cc210ce6e4"
  },
  {
    "url": "tasks/task3.html",
    "revision": "7c374444d2578c4b906b16a881e65d6a"
  },
  {
    "url": "tasks/task4.html",
    "revision": "9f59b4ef675507e83b532e5b79b86f93"
  },
  {
    "url": "tasks/task5.html",
    "revision": "ca576beef9a9465966f50873bf3e6d44"
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
