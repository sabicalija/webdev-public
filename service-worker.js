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
    "revision": "2f586411433654bdedc36aa90b4e0b59"
  },
  {
    "url": "assets/css/0.styles.bdbcf45e.css",
    "revision": "7a60de855c4248ef2ae3f010786084ff"
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
    "url": "assets/js/23.33f97b27.js",
    "revision": "d636181199c3aaee4549327a865dc3cf"
  },
  {
    "url": "assets/js/24.5b43e821.js",
    "revision": "d49f252f4111a8370d463d18a86b5185"
  },
  {
    "url": "assets/js/25.536a33bd.js",
    "revision": "15c8edbdf94b6cb65dc50a6394486505"
  },
  {
    "url": "assets/js/26.f12a05f7.js",
    "revision": "1c803f7eb95d07cfbe5bf1bd3d53ecc8"
  },
  {
    "url": "assets/js/27.a3495d3b.js",
    "revision": "cbc8209b3512fa09f75130536df19069"
  },
  {
    "url": "assets/js/28.b25859ac.js",
    "revision": "8e2e1b6772db3db0d7a60b53080a29bc"
  },
  {
    "url": "assets/js/29.7e57cc8a.js",
    "revision": "13cf2ad46b9a6dcd174718ef56c41540"
  },
  {
    "url": "assets/js/30.56023e32.js",
    "revision": "7251dde38b91cf1bf86569b276e5fd0e"
  },
  {
    "url": "assets/js/31.13ec2681.js",
    "revision": "1622b3197982295f690451cd8ba4b1a3"
  },
  {
    "url": "assets/js/32.ccf3e22b.js",
    "revision": "c0587a2fe2a9fc33f551749f68e29c43"
  },
  {
    "url": "assets/js/33.dcd7c459.js",
    "revision": "bf0ac9f7dbe78b221ee6b500f6c4daaa"
  },
  {
    "url": "assets/js/34.f3d959c0.js",
    "revision": "adae6505275e3d6f95e45216c4ef6fe3"
  },
  {
    "url": "assets/js/35.41df0d46.js",
    "revision": "d1be0c490a54721c4a0baebaeac333f3"
  },
  {
    "url": "assets/js/36.b5b7d54b.js",
    "revision": "39d2b2b5fddc296097d1ae5ad411a6b8"
  },
  {
    "url": "assets/js/37.f957d375.js",
    "revision": "ae4d7ef4db72b04f9de982a17a1d0168"
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
    "url": "assets/js/app.994a5f21.js",
    "revision": "fb6c05607c82b2cbeb2a9f863facbc31"
  },
  {
    "url": "course/description.html",
    "revision": "c06259b0571de89a495645d0d40ec376"
  },
  {
    "url": "course/schedule.html",
    "revision": "6e00147658a074ec7fd28539d9ed4b24"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "9156943b7b4bbf9b5a63db866b609143"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "863d948d7ce3c0b04e21b1033badbaee"
  },
  {
    "url": "guide/css/index.html",
    "revision": "67c6b5100f007fd4e2d4b9f03d619a7e"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "4de00ffde2d2ac0f4644931a4c03cd39"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "29600acbef3c19b90784c80bf330a9c1"
  },
  {
    "url": "guide/html/index.html",
    "revision": "84cb2f32d9ccff08baefb796c899997e"
  },
  {
    "url": "guide/index.html",
    "revision": "cedbffb89e3220940499f2c544f8b330"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "693a6b16f06405d1f33a22d030812479"
  },
  {
    "url": "guide/node/index.html",
    "revision": "a153a3a30da3b6a8f89c29f46f96cf14"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "08611c0b3b500429bb80fc7dbe7a6b04"
  },
  {
    "url": "index.html",
    "revision": "658d09d3f27c7bda9a949d3c22a77da3"
  },
  {
    "url": "projects/index.html",
    "revision": "e47b12561bc593e87759b6802af3cb43"
  },
  {
    "url": "projects/project-01.html",
    "revision": "a58abb200d0d52c0b2fe26133db7fce1"
  },
  {
    "url": "projects/project-02.html",
    "revision": "7278af75e103e1b617dfadc30a41c4b0"
  },
  {
    "url": "references/book-02.html",
    "revision": "1dfa05006d488c868d59ea08ab774bad"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "6d1b4a9f0655c106187e355e3e90238c"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "6c8065e9d8206487cf72811f336d3135"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "a91cb888f10dfae3eeae7685c26521ec"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "29721ed7ab24e1e866e25a8ec1c192a6"
  },
  {
    "url": "references/index.html",
    "revision": "f0c3d272ac7eeeb86eff6cba73a3675e"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "5068a298dd2e0cb36512a8acbedbf888"
  },
  {
    "url": "tasks/task1.html",
    "revision": "1478c76ee3ff82bd8dc511ca0ec752ba"
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
