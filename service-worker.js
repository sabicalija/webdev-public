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
    "revision": "fefa3cf69e5ae46736dd5fb7d4567d38"
  },
  {
    "url": "assets/css/0.styles.c02ba487.css",
    "revision": "0633f163903cb3c9d7de2dfbe7dccb25"
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
    "url": "assets/js/16.d3d1fa0b.js",
    "revision": "2422906fdcbee749aeffca699774dabd"
  },
  {
    "url": "assets/js/17.848604df.js",
    "revision": "b98a4df85229cda06398ff849228accb"
  },
  {
    "url": "assets/js/18.1c0e055a.js",
    "revision": "4dd1e2a4f89047c5cb7d8ac2c2ba22e0"
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
    "url": "assets/js/24.5b43e821.js",
    "revision": "d49f252f4111a8370d463d18a86b5185"
  },
  {
    "url": "assets/js/25.8ab8e401.js",
    "revision": "c36d0969ff5bbe9a73c4e6fe8cc90fc4"
  },
  {
    "url": "assets/js/26.a920d843.js",
    "revision": "56567f659a9db77bf1c564a473b5736d"
  },
  {
    "url": "assets/js/27.2683bccf.js",
    "revision": "e66ff4bd61604d1db06e6e3b4e224d11"
  },
  {
    "url": "assets/js/28.8c4cbaae.js",
    "revision": "0ec6d628dd4ae3de9db5a4b1be657af8"
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
    "url": "assets/js/31.9f330f3d.js",
    "revision": "6da87763df41f33d61c2dc7cf3927453"
  },
  {
    "url": "assets/js/32.898eb95c.js",
    "revision": "934aa282f3991086a2bc0e12e26bb2f7"
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
    "url": "assets/js/35.4d8d3393.js",
    "revision": "29aff058c494b95e827b1510d075864c"
  },
  {
    "url": "assets/js/36.377a47eb.js",
    "revision": "5b23c704ef0ebd9494345b8fa75e7c78"
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
    "url": "assets/js/app.d5c4eba5.js",
    "revision": "3d708d99959faab5ab4f815c13d784af"
  },
  {
    "url": "course/description.html",
    "revision": "18cbba3bbd946b481d97f8a097788349"
  },
  {
    "url": "course/schedule.html",
    "revision": "a3f26273d58c1abc27f7b212e64c9069"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "e36cfbdb7edff939f4df0d09dfda102f"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "f4606dee4d7b6a54df5fda37df5dc288"
  },
  {
    "url": "guide/css/index.html",
    "revision": "b732e70ed8b501bdf36de264fbac3b7f"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "a29dbfcdaa441f993fbab060ecbd9082"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "790136009e5d462305268b1c11e281e7"
  },
  {
    "url": "guide/html/index.html",
    "revision": "2674ce5e9bedf8d51bf083d677268b0b"
  },
  {
    "url": "guide/index.html",
    "revision": "e267fae25270fbf3bbf36eaa5d5c994e"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "cd29f365b7d830c1234bb5e29829a3b8"
  },
  {
    "url": "guide/node/index.html",
    "revision": "0e74b8d1a5a4e17e8ac81dad61cb772a"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "9f6407b0cc00c28904f79f6174e1f5a9"
  },
  {
    "url": "index.html",
    "revision": "8ebfd05bec0f84645dc5a0855f61553a"
  },
  {
    "url": "projects/index.html",
    "revision": "e607570673e9542185000989e704e781"
  },
  {
    "url": "projects/project-01.html",
    "revision": "56c59aae5afe9af5688c7e61108be6c2"
  },
  {
    "url": "projects/project-02.html",
    "revision": "bf98da7751c66440e476a873fae92889"
  },
  {
    "url": "references/book-02.html",
    "revision": "c10b23b53cd74490a61bc20cffe8e208"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "3b54b9c92fd9d2626fe222e9cb1e2c89"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "1685c096f40eb29d5417f49b9a0618d3"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "a730a66a90ee9c58a0909020cad3af91"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "50b3848687b4e591cff2fc8642943164"
  },
  {
    "url": "references/index.html",
    "revision": "1bb4ccf0a1965dfd279973b56d91b064"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "8bda95e0c7b01002e37270cf314d869a"
  },
  {
    "url": "tasks/task1.html",
    "revision": "357d91f615c13932131d60f4080661d5"
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
