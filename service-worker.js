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
    "revision": "544bca9e6a280359f2e29509d438458a"
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
    "url": "assets/js/17.848604df.js",
    "revision": "b98a4df85229cda06398ff849228accb"
  },
  {
    "url": "assets/js/18.eca86a1e.js",
    "revision": "b17ba0f724c55cbf06a6dfa18d33c485"
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
    "url": "assets/js/21.5a1bca41.js",
    "revision": "76e080d3a02304fd8170e14e8c9dfadf"
  },
  {
    "url": "assets/js/22.41df4ae6.js",
    "revision": "e2c0b84f0405bef56ee0d56536143634"
  },
  {
    "url": "assets/js/23.8a85b30d.js",
    "revision": "11ae471e6e4704b945f5c80380b69783"
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
    "url": "assets/js/33.a3f53b40.js",
    "revision": "f6be514ded6e3e26263c849b91280076"
  },
  {
    "url": "assets/js/34.f3d959c0.js",
    "revision": "adae6505275e3d6f95e45216c4ef6fe3"
  },
  {
    "url": "assets/js/35.1290c217.js",
    "revision": "ccf3479cfb3a67e4e4a107ed42972ba5"
  },
  {
    "url": "assets/js/36.86cf5b65.js",
    "revision": "e26e51a827279409ee47326b48df32b9"
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
    "url": "assets/js/app.aad6c91e.js",
    "revision": "e383d34af2860bf8ea1a5096f98bd3d8"
  },
  {
    "url": "course/description.html",
    "revision": "e51e3c3fa17811a24c0493e8447ea6aa"
  },
  {
    "url": "course/schedule.html",
    "revision": "704e51ff73a33e58fe7d7742458833d4"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "d15cb7f4ea33367aa235154dc18a208b"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "b0e7eabc7c8cf343b96e6736d1345f25"
  },
  {
    "url": "guide/css/index.html",
    "revision": "853341eff6780f63040111f38d3c5437"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "35ea041c32421bf509b3539aeff9fd8f"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "823ec4de58e6797f44fc8b500f340e6f"
  },
  {
    "url": "guide/html/index.html",
    "revision": "aba5c02aa6eda2e7220c1754fcbe387a"
  },
  {
    "url": "guide/index.html",
    "revision": "0b6d03587ed3e7e9cd2f6f4d3b5e4cf1"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "c559e7fefeaabda1c3216bf114bf655d"
  },
  {
    "url": "guide/node/index.html",
    "revision": "0400fc223b8c535e2fc0f5c437b2367b"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "02bf557580ee698073624a32e18157e1"
  },
  {
    "url": "index.html",
    "revision": "7504f84cbf0de2b9035563a93cf47773"
  },
  {
    "url": "projects/index.html",
    "revision": "cc0c610a8a4b5b46944ac3ed4ed5010d"
  },
  {
    "url": "projects/project-01.html",
    "revision": "7c6f7779712c60eafc69e44b853ae876"
  },
  {
    "url": "projects/project-02.html",
    "revision": "c2c9253fc6e78b5012a4dd4ac7bcbd78"
  },
  {
    "url": "references/book-02.html",
    "revision": "e913e6da1c93fb61650cda759b9b9432"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "7f79a9002f1124e29432329a8a4ffd04"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "459454116c9a00b412a21b80b08590e4"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "010a4235e9cf95a8b548166c5f8abd8f"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "2c0e1fe75bf2105135c9ab45c4c51718"
  },
  {
    "url": "references/index.html",
    "revision": "3d5423000d352f68aca8d13b5c5fae67"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "50202c717f204deb2284d9d3103b52fd"
  },
  {
    "url": "tasks/task1.html",
    "revision": "d6bd7009a65d41f85312962c1224d5fb"
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
