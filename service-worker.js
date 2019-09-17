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
    "revision": "9516dbc79b865d95b6eda94c49c24c4d"
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
    "url": "assets/js/13.ea68fd0b.js",
    "revision": "957e2caaf74131c744ebab6fbf3340e4"
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
    "url": "assets/js/17.8cff35d5.js",
    "revision": "61a3bb6d8dc2a3a5bcf89c9bde978b0d"
  },
  {
    "url": "assets/js/18.4cea1f6c.js",
    "revision": "9937608a4e55de3df57a7871b4868467"
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
    "url": "assets/js/30.50399d48.js",
    "revision": "3b122d3f4f3fff4e477a603982434f86"
  },
  {
    "url": "assets/js/31.13ec2681.js",
    "revision": "1622b3197982295f690451cd8ba4b1a3"
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
    "url": "assets/js/34.f3d959c0.js",
    "revision": "adae6505275e3d6f95e45216c4ef6fe3"
  },
  {
    "url": "assets/js/35.d778c807.js",
    "revision": "4d9269322dd266fca992305b2b2f815b"
  },
  {
    "url": "assets/js/36.377a47eb.js",
    "revision": "5b23c704ef0ebd9494345b8fa75e7c78"
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
    "url": "assets/js/4.a1b98331.js",
    "revision": "b73ecdcc342b3569ca495a326e07d772"
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
    "url": "assets/js/app.82264397.js",
    "revision": "8e329abc3e1514175ba24fdb29b21caa"
  },
  {
    "url": "course/description.html",
    "revision": "460d62e58dbb37a1e7c26f7a95996c62"
  },
  {
    "url": "course/schedule.html",
    "revision": "8c15eda36e7326b44d72eb9365b87479"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "a132f8c043e4cc603232db3f1bb7ebd0"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "131da65b4f488bd866d91b76675be084"
  },
  {
    "url": "guide/css/index.html",
    "revision": "8ef54565de115667df782ea8d5fc71f1"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "6dc7c19aefdbd4bd980da97d5abf6243"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "109f3eb3e3549b8e53a954c420caffbf"
  },
  {
    "url": "guide/html/index.html",
    "revision": "aa8db0438f7f69dbebb91725e64fd554"
  },
  {
    "url": "guide/index.html",
    "revision": "4c01dcbe9865486d2cd5acca2b5ed602"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "ba74a4eaa4b56de1501f22fed41a401f"
  },
  {
    "url": "guide/node/index.html",
    "revision": "7a5210e6fe8b2055fb0bf5bef9923679"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "c881949615e9d13925ff21e6780b1fd5"
  },
  {
    "url": "index.html",
    "revision": "4e000f7127f61a0321c764f306aef187"
  },
  {
    "url": "projects/index.html",
    "revision": "f146ca79b7c99a56afd44c1da8e01284"
  },
  {
    "url": "projects/project-01.html",
    "revision": "fb40ffa57a1784cf383623de2fc82080"
  },
  {
    "url": "projects/project-02.html",
    "revision": "cd88567e3891eb0b44074ce4e9a80059"
  },
  {
    "url": "references/book-02.html",
    "revision": "103dd3b9fc7cf8ccfe4d307addb333ef"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "648ba73507fcab1269ee37829a5e182a"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "7d37aea24d1525cd1643a7c25e067394"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "aa429fdad54387d1065dc6fcfcb7b40e"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "4a5eb0d51f2a7252610e8b20ae3d5975"
  },
  {
    "url": "references/index.html",
    "revision": "ac02467776b3bb9565f4841f3e8fe7f3"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "f4a830652c0f44dad047b91530d0fb02"
  },
  {
    "url": "tasks/task1.html",
    "revision": "ce1a51d9040098ce69527cb4bc98b07e"
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
