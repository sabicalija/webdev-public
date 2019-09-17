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
    "revision": "fe5ff0bb959585261d03251d54a4a8e4"
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
    "url": "assets/js/17.7513d998.js",
    "revision": "b86918b46e5ac1418fec0a2687a556a4"
  },
  {
    "url": "assets/js/18.389e731d.js",
    "revision": "4af459e6198174f64fa7e32b7090af0c"
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
    "url": "assets/js/20.b8367f5e.js",
    "revision": "1168af823c03eba49e9c03d0e456cd7e"
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
    "url": "assets/js/26.5042afbe.js",
    "revision": "71ffd93bfac8480c50575d8cb6036ee2"
  },
  {
    "url": "assets/js/27.2683bccf.js",
    "revision": "e66ff4bd61604d1db06e6e3b4e224d11"
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
    "url": "assets/js/30.a4f70330.js",
    "revision": "96572bbe2dd16aad61ad85c7634a17c6"
  },
  {
    "url": "assets/js/31.5b690126.js",
    "revision": "e99237641ef1b17b61d593daeb3fa96b"
  },
  {
    "url": "assets/js/32.ccf3e22b.js",
    "revision": "c0587a2fe2a9fc33f551749f68e29c43"
  },
  {
    "url": "assets/js/33.5913ba98.js",
    "revision": "943a555b9c90bc889d9525743dcad006"
  },
  {
    "url": "assets/js/34.5263c781.js",
    "revision": "e72ab4997a882953383615de9d84fcf9"
  },
  {
    "url": "assets/js/35.41df0d46.js",
    "revision": "d1be0c490a54721c4a0baebaeac333f3"
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
    "url": "assets/js/app.6e4edb29.js",
    "revision": "e434cc5c4e0ae558365f17e58a34fcc7"
  },
  {
    "url": "course/description.html",
    "revision": "250b34359257edd89a230adc11a752e1"
  },
  {
    "url": "course/schedule.html",
    "revision": "7aad20a087ec44f1ffbda352e0a96309"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "2329b41c43516fb4c9a967fe3cf73eb1"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "20de9fc1fbf9ebd1ddb0bcbe2e9f5546"
  },
  {
    "url": "guide/css/index.html",
    "revision": "429dde037a06cf7065718ed04161bb00"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "70a5cca388eb9d9db8a7adddc7805829"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "e622b5d402e45a39ae8388acde06a25f"
  },
  {
    "url": "guide/html/index.html",
    "revision": "cdd1dc948298c863883042b77568c9be"
  },
  {
    "url": "guide/index.html",
    "revision": "d70dbc232d498b52526f7e0bfd4fbfbd"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "f9f37b0997e4b49d603f4a7a276d0117"
  },
  {
    "url": "guide/node/index.html",
    "revision": "c893b768da35a8bb03fb4cece9f057d1"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "e61d7bbbb367f5ffe47751dc448c74a2"
  },
  {
    "url": "index.html",
    "revision": "754487c3bed3d7835b83b6737da3504d"
  },
  {
    "url": "projects/index.html",
    "revision": "217c5b42f85e5abce2fe0d9f7c0dd11f"
  },
  {
    "url": "projects/project-01.html",
    "revision": "686f40a2914d478dad44d1548fbeb1bf"
  },
  {
    "url": "projects/project-02.html",
    "revision": "06d7f002fe8faf9f5885a372dc4f19c0"
  },
  {
    "url": "references/book-02.html",
    "revision": "5a5aff1b8816e21022c235d5335fbf83"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "cf3a1d05f2735cf450a8518e5fae1d73"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "5e8dabeb4a8acf80581466d12866895b"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "c5240288541faddef59b1f7c6319c5ff"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "597320326993f7961c7099756114a6d4"
  },
  {
    "url": "references/index.html",
    "revision": "f0d8c0385c67052542ea940afecf6d49"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "66410f977d72d41a8732bc273f670d13"
  },
  {
    "url": "tasks/task1.html",
    "revision": "f23f9a37d5632a2fabe9a54bda47d315"
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
