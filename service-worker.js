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
    "revision": "59b2aae0174443a6cd7aa1ae2d792ca2"
  },
  {
    "url": "assets/css/0.styles.bdb2a578.css",
    "revision": "a49ae5078d98653e570e9e821c14b86b"
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
    "url": "assets/js/19.73b00037.js",
    "revision": "1cb5315bc982d6a32db34957488a8a40"
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
    "url": "assets/js/21.63b69559.js",
    "revision": "dfb5bb99bbffc94cb06055d631becbf1"
  },
  {
    "url": "assets/js/22.9bfb6b44.js",
    "revision": "b17eabec7ecf1ef396c160ab200107ec"
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
    "url": "assets/js/26.b5c707cc.js",
    "revision": "e768e4d0ee0656f1141c1c49b45abc19"
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
    "url": "assets/js/29.c6d5ee32.js",
    "revision": "6b63a259856e24a72b9b10bc6a3d4c9c"
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
    "url": "assets/js/36.b5b7d54b.js",
    "revision": "39d2b2b5fddc296097d1ae5ad411a6b8"
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
    "url": "assets/js/app.88db5741.js",
    "revision": "15dda367f4411e54bff55c859c026478"
  },
  {
    "url": "course/description.html",
    "revision": "2253b6b53df4f838eb7159b599c13134"
  },
  {
    "url": "course/schedule.html",
    "revision": "8e2416ce1d62dfc41c14f5a6bbe43085"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "24a7412ccbc13998a939b8c9e475918f"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "ba0bb58389086da81b0af15470d343de"
  },
  {
    "url": "guide/css/index.html",
    "revision": "f5df06a739c41d56c5d9d2d2faaf6633"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "93fe89f7853333442d9b40f71b26afc2"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "077f14734ee9bffe992c5d1efbb13986"
  },
  {
    "url": "guide/html/index.html",
    "revision": "fa6d0919c7ca649404329d4caf293953"
  },
  {
    "url": "guide/index.html",
    "revision": "7190f5125dd57c629612a8e236d29bdb"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "7b85b22290976df78660c41233387b39"
  },
  {
    "url": "guide/node/index.html",
    "revision": "85363613f8c352edb9f2c4792fa632e4"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "05ebc3b3b5a31eb29ae827b6b7f1e82b"
  },
  {
    "url": "index.html",
    "revision": "4f84d8630a01a4489a70437a6bcad634"
  },
  {
    "url": "projects/index.html",
    "revision": "95c559136bfe05cf01c67807b7184358"
  },
  {
    "url": "projects/project-01.html",
    "revision": "baff102f1da7c0a70b2e227a745d3407"
  },
  {
    "url": "projects/project-02.html",
    "revision": "9be79163996a5ebe025eced354c16483"
  },
  {
    "url": "references/book-02.html",
    "revision": "638b69831a20a8e81c3317a6e05341c4"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "1fc6153fc5e8bde4953eabaf42967627"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "ac5977f876461f6c6ddcb72c384b5aad"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "fcfe858734b249e3eab6c6f22205805f"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "08b0341af64f8bf4bd006ac276eb81f8"
  },
  {
    "url": "references/index.html",
    "revision": "faa1a3ba72871d73a9a32c35b4173115"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "ea95e3b7391dcd7e0252bef08646ad16"
  },
  {
    "url": "tasks/task1.html",
    "revision": "0c121fb627190f0447b70096af6d8825"
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
