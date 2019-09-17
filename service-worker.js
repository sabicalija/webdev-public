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
    "revision": "fa2b16363595189999bb72e07e14a175"
  },
  {
    "url": "assets/css/0.styles.e8b354bc.css",
    "revision": "af768a7c9affc95a6956e3511b53fae4"
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
    "url": "assets/js/11.e721ac1e.js",
    "revision": "550fe2012f0bd3b1edcc1ed73596c3e1"
  },
  {
    "url": "assets/js/12.2fc21793.js",
    "revision": "339e9dffbab248253390ee1d76dd35b7"
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
    "url": "assets/js/15.7b250a35.js",
    "revision": "e9eb996e7c367710df6fe875eecd2351"
  },
  {
    "url": "assets/js/16.83ab59d9.js",
    "revision": "c02654da13e228bdaa3be922174f79fb"
  },
  {
    "url": "assets/js/17.9abb0ba8.js",
    "revision": "cbbc982a656f87b90c66ce6eba6623c4"
  },
  {
    "url": "assets/js/18.60770205.js",
    "revision": "fad2be96334a8eed23102c99c204a494"
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
    "url": "assets/js/20.6485b0f1.js",
    "revision": "32f7a77af92df795ef111b031a6aaad6"
  },
  {
    "url": "assets/js/21.333db795.js",
    "revision": "63520820c4829aede20eaf23d49177f5"
  },
  {
    "url": "assets/js/22.fba0361b.js",
    "revision": "13ac15eb6ba75a78cba1d2f268bdc6f3"
  },
  {
    "url": "assets/js/23.43972876.js",
    "revision": "df1503ec884f8c9adb41caedb167db26"
  },
  {
    "url": "assets/js/24.28ac22fb.js",
    "revision": "20a9dae0a695453f8aa9ed9176d949df"
  },
  {
    "url": "assets/js/25.403b95e6.js",
    "revision": "dcb14ce8caf86691908f50195df59e86"
  },
  {
    "url": "assets/js/26.f697b4e7.js",
    "revision": "96f7a0381c61035539c0e88888b36f36"
  },
  {
    "url": "assets/js/27.a3495d3b.js",
    "revision": "cbc8209b3512fa09f75130536df19069"
  },
  {
    "url": "assets/js/28.bb87b478.js",
    "revision": "5d8a7ac1f3d7db1506a1f14ead0f5339"
  },
  {
    "url": "assets/js/29.6c781735.js",
    "revision": "fa48e6452f4c1aa045643a739066cedc"
  },
  {
    "url": "assets/js/30.8bb3b09e.js",
    "revision": "75f47ff1cbd9365226422efd32410a47"
  },
  {
    "url": "assets/js/31.9f330f3d.js",
    "revision": "6da87763df41f33d61c2dc7cf3927453"
  },
  {
    "url": "assets/js/32.86185795.js",
    "revision": "23dc21034b24ae1b3efec9e5a982b106"
  },
  {
    "url": "assets/js/33.dcd7c459.js",
    "revision": "bf0ac9f7dbe78b221ee6b500f6c4daaa"
  },
  {
    "url": "assets/js/34.a02c022f.js",
    "revision": "c90806852972fb63e50dc5d09c9dcf83"
  },
  {
    "url": "assets/js/35.4d8d3393.js",
    "revision": "29aff058c494b95e827b1510d075864c"
  },
  {
    "url": "assets/js/36.f9276262.js",
    "revision": "7044452853795753e426a94ee80e69c5"
  },
  {
    "url": "assets/js/37.2805702b.js",
    "revision": "5996a1775fea0bf9fcf8a8186c5c58c6"
  },
  {
    "url": "assets/js/38.fff2c8ec.js",
    "revision": "09ff12ce570b1b196f67d1a9459f73e7"
  },
  {
    "url": "assets/js/4.41216b2d.js",
    "revision": "7936bb214859542e57c32d283762b3c1"
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
    "url": "assets/js/7.2503169c.js",
    "revision": "25f1f876b4f69384a379f28072cb10b7"
  },
  {
    "url": "assets/js/8.ae027d84.js",
    "revision": "c1cc9a79c990c1eb93b7eb59db265e42"
  },
  {
    "url": "assets/js/9.fc60014f.js",
    "revision": "916d868c3758af4532297cdc2413a279"
  },
  {
    "url": "assets/js/app.676716f8.js",
    "revision": "1ce6f691ec779a9ee257f30ace25fc64"
  },
  {
    "url": "course/description.html",
    "revision": "621fbcf45d1055b48fca5d694c855bc5"
  },
  {
    "url": "course/schedule.html",
    "revision": "98cfcf476c1edfc22acdb4e2b6692c6a"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "35aa1f97f2ce28bad3c8c6f5e5dc127f"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "844fe0c1e2c47321b2daeadbd347e8f4"
  },
  {
    "url": "guide/css/index.html",
    "revision": "5a7eecf8556b0b503bfdffd6fdccc3b5"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "168672966d91cf9f75e8f84953b7fd26"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "aaf903ea3b42a4c54e65e86b0a77437d"
  },
  {
    "url": "guide/html/index.html",
    "revision": "df153363e3b911e5384b9d0072d3d744"
  },
  {
    "url": "guide/index.html",
    "revision": "8314e68946aec451451c99c5b8d0ada4"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "06398635b5daf648a68d5af207079dbd"
  },
  {
    "url": "guide/node/index.html",
    "revision": "e77eac1c635e884a8583b3c2dec8a91f"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "dc7c74b1d0422feda15dcf816f3e3970"
  },
  {
    "url": "index.html",
    "revision": "8304a08dbd4718acdbdfee9328ffa5f6"
  },
  {
    "url": "projects/index.html",
    "revision": "4a2ae1d29cf726b1b3b6bfbb1bd99cfb"
  },
  {
    "url": "projects/project-01.html",
    "revision": "a3d8bcf1549b4dfe46af5430bddcb346"
  },
  {
    "url": "projects/project-02.html",
    "revision": "0354fa497a1d352a7e058de9a95becb6"
  },
  {
    "url": "references/book-02.html",
    "revision": "219d75c235a7cd07fdf74883bc3f5cfd"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "42b615f63435a5cecb310db43be7b2a8"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "3dbc17ab209039fe5d582c8d01ae35ed"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "743ef2f181178f6bdc40038787ad4699"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "2cb68dbba1496b0625f965cd053b2102"
  },
  {
    "url": "references/index.html",
    "revision": "bfe8b569e2e290e539f8b173da5c87cf"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "7d16fae8d271a4d5a6a45aa949d3636d"
  },
  {
    "url": "tasks/task1.html",
    "revision": "30c440d52ba8818a113c625d1a349fa8"
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
