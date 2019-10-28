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
    "revision": "a0ccd97a6bd38a9c4fb0586af0f4f776"
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
    "url": "assets/js/19.167d6f25.js",
    "revision": "3877835f506d3409ddd3e63ede99d983"
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
    "url": "assets/js/22.2acde220.js",
    "revision": "145415e54928062555ef663b3d03b9b3"
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
    "url": "assets/js/26.847b3893.js",
    "revision": "44aaead18d9e97e889105aa2178d9129"
  },
  {
    "url": "assets/js/27.1d1c872e.js",
    "revision": "d34432d5361c675420f9abfd56afd884"
  },
  {
    "url": "assets/js/28.c17d0959.js",
    "revision": "b9be7d3960daa5368266f9dd1b821c2c"
  },
  {
    "url": "assets/js/29.40f8ba35.js",
    "revision": "5c4e94e4fd5d8fdc6106b8a5c010ee5e"
  },
  {
    "url": "assets/js/30.d02eca3b.js",
    "revision": "aa4e2c01ad866fb0a6c0612bd9463dd6"
  },
  {
    "url": "assets/js/31.c466152f.js",
    "revision": "a7133a3609c5a6adce6139214443950e"
  },
  {
    "url": "assets/js/32.0021929e.js",
    "revision": "a0fbedecaa6665dc26d7bda1573c7705"
  },
  {
    "url": "assets/js/33.1e633051.js",
    "revision": "493deb87bf1227a1ddbb50d7631cbe86"
  },
  {
    "url": "assets/js/34.beedaba2.js",
    "revision": "9adf47c0493b83453893d5922d97f5c8"
  },
  {
    "url": "assets/js/35.5f81dab6.js",
    "revision": "7dc23ea4560d176c7fc7cb32a8e0e0e4"
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
    "url": "assets/js/38.b1a3d662.js",
    "revision": "1df9aa45c9af936475bc2cb42477114f"
  },
  {
    "url": "assets/js/39.c65f29e4.js",
    "revision": "538eee037f634d52db146d1e56eae4c3"
  },
  {
    "url": "assets/js/4.b32d020e.js",
    "revision": "aa08b7201f609d3c30d411a8ad1b1410"
  },
  {
    "url": "assets/js/40.579bc170.js",
    "revision": "c4b62b8e0fd05e849b220be180df1b7e"
  },
  {
    "url": "assets/js/41.14ec256c.js",
    "revision": "7a107dc59df24ce2c20183db56cf0ab3"
  },
  {
    "url": "assets/js/42.42ebb1de.js",
    "revision": "5de304aa2e9ce06cf7e039521ed6f106"
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
    "url": "assets/js/app.2743741e.js",
    "revision": "5222d5ef8c16cf575a53957ea5736851"
  },
  {
    "url": "course/description.html",
    "revision": "762316807e19fc3c20f3392271839a36"
  },
  {
    "url": "course/schedule.html",
    "revision": "30108cc5ffce657d27f07bd62e156ee9"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "071cffef71c66bfece54a259495835c2"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "df9de05f575046369bc909f6a677904b"
  },
  {
    "url": "guide/css/index.html",
    "revision": "524d433f20e5d0044386dc8d0918bdb5"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "5ee0075a737c14d157fd30bc4df4bce8"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "d513508166fd79b411745265627dc466"
  },
  {
    "url": "guide/html/index.html",
    "revision": "5c99a69d0abc75a4fb42a385c95378b9"
  },
  {
    "url": "guide/index.html",
    "revision": "4affbb1038e2ae9e3ecea52b665f18a1"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "c9f2b9196b24941cc0a6b9c5baac2870"
  },
  {
    "url": "guide/node/index.html",
    "revision": "62378d8fb74ef52be26bfb21bca428ff"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "cd1f95eef65a33862fe25d691842ad18"
  },
  {
    "url": "index.html",
    "revision": "e7fe27504de61df5798e2831ef7bb24c"
  },
  {
    "url": "projects/index.html",
    "revision": "3fa9af459c050acfdf8f2218a4b01cec"
  },
  {
    "url": "projects/project-01.html",
    "revision": "777b2da8b8cf9efd956f896a84ccf9a6"
  },
  {
    "url": "projects/project-02.html",
    "revision": "3b06d26109cf011a7d05b51b19b050bb"
  },
  {
    "url": "references/book-02.html",
    "revision": "8627f4d203f1e09ef575b35357580b61"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "11240f1f0b554c8e29bbba877601e23d"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "af00e9471d9aa917be5320186c1cd125"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "4bd9db2af1ba052c5f1a6325d6029d6f"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "e8093e49c0809d62e2ba2f9ab6f5035d"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "3d99287092ea7ffa6974af5974fb08a1"
  },
  {
    "url": "references/index.html",
    "revision": "8f85520e485d6203fb71f0d4604b6834"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "bcb2577e88244654d54d2b2e67557699"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "13bbf6319f51314ce3a4ea139802f192"
  },
  {
    "url": "slides/lecture-05.html",
    "revision": "0c16335e3c380538dd50d431d4c79c2d"
  },
  {
    "url": "tasks/task1.html",
    "revision": "4f446fc0519ebc30783075c11df202e7"
  },
  {
    "url": "tasks/task2.html",
    "revision": "0ad8e8aff0a7c3051c8637eb484320e8"
  },
  {
    "url": "tasks/task3.html",
    "revision": "97986fb2f61294caf7bf394ef0070704"
  },
  {
    "url": "tasks/task4.html",
    "revision": "0197b622ec176755d30a7dab6c4b8b76"
  },
  {
    "url": "tasks/task5.html",
    "revision": "be05702c78fcfd61b8bb32ab2e72566a"
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
