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
    "revision": "2e1a366865fb2030d695b53954a0dceb"
  },
  {
    "url": "assets/css/0.styles.93823e04.css",
    "revision": "f906a0944e15add3f00a89102b727fa8"
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
    "url": "assets/js/13.f476e231.js",
    "revision": "1b8a2dcbf416d05c448946cab749754e"
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
    "url": "assets/js/16.39907dc1.js",
    "revision": "13525fc9e75fd794c0b2434b6587f02f"
  },
  {
    "url": "assets/js/17.9abb0ba8.js",
    "revision": "cbbc982a656f87b90c66ce6eba6623c4"
  },
  {
    "url": "assets/js/18.4cea1f6c.js",
    "revision": "9937608a4e55de3df57a7871b4868467"
  },
  {
    "url": "assets/js/19.9e799a20.js",
    "revision": "95b4f02bfbf07560e2d8dd22088785c0"
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
    "url": "assets/js/24.28ac22fb.js",
    "revision": "20a9dae0a695453f8aa9ed9176d949df"
  },
  {
    "url": "assets/js/25.32796256.js",
    "revision": "fb08ba3f0c1a5581cfac14dd8909ea8e"
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
    "url": "assets/js/28.b25859ac.js",
    "revision": "8e2e1b6772db3db0d7a60b53080a29bc"
  },
  {
    "url": "assets/js/29.6c781735.js",
    "revision": "fa48e6452f4c1aa045643a739066cedc"
  },
  {
    "url": "assets/js/30.d615dfff.js",
    "revision": "aa4e2c01ad866fb0a6c0612bd9463dd6"
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
    "url": "assets/js/33.b2a864fb.js",
    "revision": "a444b7e7443b33303dc44a3295af41f5"
  },
  {
    "url": "assets/js/34.f3d959c0.js",
    "revision": "adae6505275e3d6f95e45216c4ef6fe3"
  },
  {
    "url": "assets/js/35.4d8d3393.js",
    "revision": "29aff058c494b95e827b1510d075864c"
  },
  {
    "url": "assets/js/36.f660c30f.js",
    "revision": "2a2d899ec2af9c116c211701a7616697"
  },
  {
    "url": "assets/js/37.7489fbcc.js",
    "revision": "54e6ac195561a01541eb1b453c9abe5d"
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
    "url": "assets/js/7.46030e7e.js",
    "revision": "aad9c8b304213ce57e47e37c2cf5d5b5"
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
    "url": "assets/js/app.c979308a.js",
    "revision": "bd9d094ef982d1dbe37e9f04212e7789"
  },
  {
    "url": "course/description.html",
    "revision": "7a25b21efc2d593db4d8fd0228a1ef10"
  },
  {
    "url": "course/schedule.html",
    "revision": "4c249e07d789e422598df8b7486fd445"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "ce311d907060ab25038c696363395389"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "137d6be07ba98bcd6d3ab455b5278aa7"
  },
  {
    "url": "guide/css/index.html",
    "revision": "1803b0735304a10d7ebfef2a95f35138"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "b6f205638a9775e09ef790d7f7d1a4e3"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "52b24f45c246382295a824cafef2aaaa"
  },
  {
    "url": "guide/html/index.html",
    "revision": "375eb3838c2e341e185acde9b17cc42c"
  },
  {
    "url": "guide/index.html",
    "revision": "bba08bf8641f177e4af1d875916bcc08"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "480eb078e880668ffc16ec29e47b3b94"
  },
  {
    "url": "guide/node/index.html",
    "revision": "805e11cccea55cc67831327ce5364306"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "a6b5047cc1fd517095b46f37bb868eb4"
  },
  {
    "url": "index.html",
    "revision": "60b524f598cf0c857f10da644ff824d4"
  },
  {
    "url": "projects/index.html",
    "revision": "bd1f83a73adbdf3cf68e1dfbf8e16013"
  },
  {
    "url": "projects/project-01.html",
    "revision": "f773d05a5bcdd08b50a4591d5b0ba979"
  },
  {
    "url": "projects/project-02.html",
    "revision": "57da7ac5bdd30c4b38958d3ac5a59346"
  },
  {
    "url": "references/book-02.html",
    "revision": "fa57635e670aae4c833b78467205f120"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "00903ed92ee9f23a9bf77a6db6f8a031"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "4b66dca54f1b946206285b017c2fe943"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "80866b11478d32924cc779e109101dee"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "11daa54bb40789a94a98ba520413840e"
  },
  {
    "url": "references/index.html",
    "revision": "0cafc5d85628a96cebd41ca09f238687"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "9f1bef0103b4b47f6c4da1eb8cf975ec"
  },
  {
    "url": "tasks/task1.html",
    "revision": "9f9d128c93e6c6f6a32656c6de32ee64"
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
