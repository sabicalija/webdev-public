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
    "revision": "4b386c862f4991e76581e786cb79b9ff"
  },
  {
    "url": "assets/css/0.styles.e5ffaacd.css",
    "revision": "06ac72a6bf2cef83f96d5ed86b3b8dd5"
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
    "url": "assets/js/11.b17e9e07.js",
    "revision": "844c77da782b5e5ea6220b4aceb7a4dd"
  },
  {
    "url": "assets/js/12.81e57d10.js",
    "revision": "e2ff61ad73ed6f41ce23cdd26593eeb7"
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
    "url": "assets/js/15.c0c3daac.js",
    "revision": "283576af65c6682cb161bda767986d73"
  },
  {
    "url": "assets/js/16.39907dc1.js",
    "revision": "13525fc9e75fd794c0b2434b6587f02f"
  },
  {
    "url": "assets/js/17.ee2998cb.js",
    "revision": "90944fb783cd08688495d4c219229558"
  },
  {
    "url": "assets/js/18.148b4550.js",
    "revision": "2393a45219eef66010216e6224f9abdf"
  },
  {
    "url": "assets/js/19.778e4ea4.js",
    "revision": "fa338d71cefdd3b33aa485a5f31ef5cc"
  },
  {
    "url": "assets/js/2.8e4169f3.js",
    "revision": "3cff175bbd310f56496b49ed5ce47285"
  },
  {
    "url": "assets/js/20.39d3d5a8.js",
    "revision": "4a5681ccf33fa5b170145d6f0b105a62"
  },
  {
    "url": "assets/js/21.405ea187.js",
    "revision": "7411c962214691d299062718701c487b"
  },
  {
    "url": "assets/js/22.5552eb90.js",
    "revision": "f201044d6413a9e9a5b9c6ece95dabb0"
  },
  {
    "url": "assets/js/23.700cfa13.js",
    "revision": "bfdc2ff581b816a7a92005047024993e"
  },
  {
    "url": "assets/js/24.c0d7810e.js",
    "revision": "d44d14672d5550aed75403f21724f3e2"
  },
  {
    "url": "assets/js/25.671dc290.js",
    "revision": "6d7be158bfd7c2e08fd59eefb1f498fb"
  },
  {
    "url": "assets/js/26.37a9ad14.js",
    "revision": "439d62b895ad7ba4eceff8c9a6768622"
  },
  {
    "url": "assets/js/27.10a8534a.js",
    "revision": "8d24c34e6f1e745e681f81331a17c102"
  },
  {
    "url": "assets/js/28.6103fc69.js",
    "revision": "955f8e139dbf4b95fa69204750f5a94b"
  },
  {
    "url": "assets/js/29.6650f11d.js",
    "revision": "eecab0d957568add6fb3b53e902e788e"
  },
  {
    "url": "assets/js/30.eae5f5ae.js",
    "revision": "0f264ccee14e9247e9f9ea14aa397fc3"
  },
  {
    "url": "assets/js/31.c75c7ab0.js",
    "revision": "269ecc96672d16caaac5373bb18d63cb"
  },
  {
    "url": "assets/js/32.de3ce84a.js",
    "revision": "514e8c1709ca87d9c71fa0ba477753b6"
  },
  {
    "url": "assets/js/33.3d838494.js",
    "revision": "04f0d797114d8df9af1f88fca10089b6"
  },
  {
    "url": "assets/js/34.111878cc.js",
    "revision": "d0349d8805d18afb3448d434908ef593"
  },
  {
    "url": "assets/js/35.98cd1d40.js",
    "revision": "81cd37f0655192ef017123d2541a63b5"
  },
  {
    "url": "assets/js/36.56528cf5.js",
    "revision": "14d42a13d79ee0dc10fc923ae57de118"
  },
  {
    "url": "assets/js/37.79c18b20.js",
    "revision": "dd8a95abcde7a4e8b73dab17f05b4c48"
  },
  {
    "url": "assets/js/38.89e088b3.js",
    "revision": "997ed4ea211eb3986187748a90983c5c"
  },
  {
    "url": "assets/js/39.41b4f1d6.js",
    "revision": "fbd61446355e974edecc2d2dc4ca9aac"
  },
  {
    "url": "assets/js/4.322820a0.js",
    "revision": "7fa945a4099c3471dc90f52e691b515d"
  },
  {
    "url": "assets/js/40.cf834ca7.js",
    "revision": "89a35b038204bd807e9d7a2e0df0d715"
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
    "url": "assets/js/app.ca80d01b.js",
    "revision": "07fd99077faf36167166ba97839c5010"
  },
  {
    "url": "course/description.html",
    "revision": "6691a0177794f06cf9f7848d6394b7e6"
  },
  {
    "url": "course/schedule.html",
    "revision": "b0f2a56f1c67e646692aa2a89935697a"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "64ceb52c2dfe59f1247882af80b215a1"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "7cecf700d2af95e9b608af2d6989265f"
  },
  {
    "url": "guide/css/index.html",
    "revision": "011514fa1956f422e547717ed736ef90"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "1eeb1dacf226d8912604609264a3b356"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "c2bbab635b41c4ad45fb0ed0ac72ef9d"
  },
  {
    "url": "guide/html/index.html",
    "revision": "5c5688608a81c5dca601a8b713b7f684"
  },
  {
    "url": "guide/index.html",
    "revision": "ca434f67a5243c4828035a7709f963aa"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "e6215aec894aa6840a8a8f0d75c0cb17"
  },
  {
    "url": "guide/node/index.html",
    "revision": "0ff39e8e77d9d7e65999f0979b27cd87"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "36428d5b80560f40669270e1889bdfc7"
  },
  {
    "url": "index.html",
    "revision": "e0686a0ff8be98d39c1cc8435edba905"
  },
  {
    "url": "projects/index.html",
    "revision": "3a93f8c90e2591ffc51e3760b59e56ec"
  },
  {
    "url": "projects/project-01.html",
    "revision": "d15a931aeb13106a19a10bd2836457e2"
  },
  {
    "url": "projects/project-02.html",
    "revision": "cf3d3138afa0299931f771c787efd57d"
  },
  {
    "url": "references/book-02.html",
    "revision": "ff4f6beb2d9361bf95c907e56201cfa5"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "d8557c3ada657fd5c53875ac95e712ff"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "50a94231519f70d64bbb8dc4dd9aa4d6"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "8411e874823276a3646284463f8f5bd0"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "4cfc1616258fbb038ed320715bb16701"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "4a142066d53b3b20f49731ccabd2b6e4"
  },
  {
    "url": "references/index.html",
    "revision": "f2d420528ee0dab96225d1758c38805a"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "ecac42d89abfc38005f54fe6d09746ed"
  },
  {
    "url": "tasks/task1.html",
    "revision": "493bd6c400c415836123c9da9b3cc9f2"
  },
  {
    "url": "tasks/task2.html",
    "revision": "34433e96460d6a0592e6d78527445eab"
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
