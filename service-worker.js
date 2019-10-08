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
    "revision": "fbda1b580d8188de76f54cc0fb88d145"
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
    "url": "assets/js/11.924380cb.js",
    "revision": "9563cc303928baaa1bc3ebea59de9f0a"
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
    "url": "assets/js/16.94734976.js",
    "revision": "356f28b369c75cff25d51db74a140ed8"
  },
  {
    "url": "assets/js/17.87745a06.js",
    "revision": "95ea77c1d704fca2504e1f0905bac68e"
  },
  {
    "url": "assets/js/18.da75558d.js",
    "revision": "a8ff6bc261e66ce21fa7a33090274178"
  },
  {
    "url": "assets/js/19.65acfe4b.js",
    "revision": "37b987ac1b9c31c82c75ecb1f8bcddf1"
  },
  {
    "url": "assets/js/2.8e4169f3.js",
    "revision": "3cff175bbd310f56496b49ed5ce47285"
  },
  {
    "url": "assets/js/20.b8367f5e.js",
    "revision": "1168af823c03eba49e9c03d0e456cd7e"
  },
  {
    "url": "assets/js/21.de475833.js",
    "revision": "691f6a806cef4a5f3f3c1c11dfa1a7b5"
  },
  {
    "url": "assets/js/22.96319b54.js",
    "revision": "688fe06541bad88918bae41d7d3fd38d"
  },
  {
    "url": "assets/js/23.1e46efba.js",
    "revision": "ca258246207517916f24fdf4dd17cebb"
  },
  {
    "url": "assets/js/24.316aef92.js",
    "revision": "baa8654c88a7b4ecdad388e052a1902e"
  },
  {
    "url": "assets/js/25.07debedb.js",
    "revision": "98975ee250ce2bda4f7045a941dd2287"
  },
  {
    "url": "assets/js/26.159e5028.js",
    "revision": "309ec9f59f744b128836cf3bba9f5dbc"
  },
  {
    "url": "assets/js/27.b333df57.js",
    "revision": "8156e22760fffbd358f9c282001afeb1"
  },
  {
    "url": "assets/js/28.9ddc3fa2.js",
    "revision": "6d844cc154e136c8dae037cf4389d1fe"
  },
  {
    "url": "assets/js/29.42b93b0b.js",
    "revision": "0509d7a8a7d43fb89545f46c1601f9b3"
  },
  {
    "url": "assets/js/30.2dc6c8aa.js",
    "revision": "c6ab5c7ac56788aaf97b26bfb121c34d"
  },
  {
    "url": "assets/js/31.ecf2e972.js",
    "revision": "e3659e715f5b72a7e248869030fb4e67"
  },
  {
    "url": "assets/js/32.a949ef78.js",
    "revision": "54ce98cc524ea847eabfc0454caa6b93"
  },
  {
    "url": "assets/js/33.2a23f393.js",
    "revision": "55243302bf1f016ec7024fddeae38170"
  },
  {
    "url": "assets/js/34.111878cc.js",
    "revision": "d0349d8805d18afb3448d434908ef593"
  },
  {
    "url": "assets/js/35.f7249d9b.js",
    "revision": "07a9beb3f8ea9b010cbffc4d00396990"
  },
  {
    "url": "assets/js/36.a8573fa0.js",
    "revision": "e8c3bab5d8c6693f0d4b3c0ea0a37a09"
  },
  {
    "url": "assets/js/37.32347d60.js",
    "revision": "82403a58199d8a26a5cdd842b16c5be1"
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
    "url": "assets/js/4.06029280.js",
    "revision": "b1368e724d30fdcfccfc5ad6a346b68a"
  },
  {
    "url": "assets/js/40.daca472d.js",
    "revision": "821a803f8e4f4dddc11ea1a3ddb39236"
  },
  {
    "url": "assets/js/41.ebc371cb.js",
    "revision": "082e70b73f922422f1c25b08bb2fa994"
  },
  {
    "url": "assets/js/42.15da5fa4.js",
    "revision": "cb5f1c91895bf8c9af089604fdddd8db"
  },
  {
    "url": "assets/js/43.adb5f40d.js",
    "revision": "429b368f35ab05c277a77cc3f57012af"
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
    "url": "assets/js/7.46030e7e.js",
    "revision": "aad9c8b304213ce57e47e37c2cf5d5b5"
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
    "url": "assets/js/app.bfff2d31.js",
    "revision": "521d0dbd378fe1d78baf7f61ab25d4dd"
  },
  {
    "url": "course/description.html",
    "revision": "e1025ecdca43cecd61528c1b018f823e"
  },
  {
    "url": "course/schedule.html",
    "revision": "bae8f4064efabd21fbdd76a5bd18eb48"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "a6bf533ec76bcce5acd96f47d46e6f88"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "7a931e03e7b743875c3d5e31e6e4d7d6"
  },
  {
    "url": "guide/css/index.html",
    "revision": "eb87e45c5488d56aaddfe77a4315b116"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "2b7e87983b7af4236d4086660a3feab8"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "d6f6fbf282b16505e63b81c166370f47"
  },
  {
    "url": "guide/html/index.html",
    "revision": "2c40907d4734f39531996ada516598d7"
  },
  {
    "url": "guide/index.html",
    "revision": "d19eeb69103c4b5c7fefc7e1f1216448"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "98d1f283c152d92efb25f711c2e303eb"
  },
  {
    "url": "guide/node/index.html",
    "revision": "0ce496de57ef2db5ded994d16aef96f8"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "3de7f9696c692ce7168115799d6f0bf4"
  },
  {
    "url": "index.html",
    "revision": "9fe8172d50500dd1ddb39cdf435c341a"
  },
  {
    "url": "projects/index.html",
    "revision": "0a515912b765dac46e08659523033d71"
  },
  {
    "url": "projects/project-01.html",
    "revision": "b94b93aaa6f6b7a196b41cca33fb8eb5"
  },
  {
    "url": "projects/project-02.html",
    "revision": "eaec2ef99342b2061774e12dccea623c"
  },
  {
    "url": "references/book-02.html",
    "revision": "bf0e512496b0b28542511accd987b96b"
  },
  {
    "url": "references/css/css-definitive-guide.html",
    "revision": "e99856eb088bf706ce2c84e2c4e5eeca"
  },
  {
    "url": "references/general/high-performance-browser-networking.html",
    "revision": "6b46ef01ccc54ecee88ea0a4ad0f59cf"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "d86d0b50aae47f5fdbb27ba8bcef9de5"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "815b80a676d3ae0e3dd8ae37ff490590"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "e19e4b23f89163a13da5f0e73e0404d0"
  },
  {
    "url": "references/index.html",
    "revision": "b223142d5cca3c890a2652ee3c0c4c59"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "f97cc1231883f2b66bbd466b813af488"
  },
  {
    "url": "slides/lecture-03.html",
    "revision": "a103c9b6bc6ae440b0f66784d09492da"
  },
  {
    "url": "tasks/task1.html",
    "revision": "1c4058fd0064675bd64e0221f3b579dd"
  },
  {
    "url": "tasks/task2.html",
    "revision": "3639aa9f5bbbe6e1b8c48d6eb4af92d4"
  },
  {
    "url": "tasks/task3.html",
    "revision": "6e521c800b341733aecffdc83774f699"
  },
  {
    "url": "tasks/task4.html",
    "revision": "8a8d21189bba151e917004decaa2cd43"
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
