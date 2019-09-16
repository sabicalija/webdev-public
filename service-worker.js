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
    "revision": "0b0fd12bdc53fa106d971894f0e7d210"
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
    "url": "assets/js/19.9e799a20.js",
    "revision": "95b4f02bfbf07560e2d8dd22088785c0"
  },
  {
    "url": "assets/js/2.8e4169f3.js",
    "revision": "3cff175bbd310f56496b49ed5ce47285"
  },
  {
    "url": "assets/js/20.eb97f59c.js",
    "revision": "c1d59ec9a1077ffb0d1fa5257a9d14bd"
  },
  {
    "url": "assets/js/21.5a1bca41.js",
    "revision": "76e080d3a02304fd8170e14e8c9dfadf"
  },
  {
    "url": "assets/js/22.74a76750.js",
    "revision": "da33fc7cc1dc7a75270ad8581412aba2"
  },
  {
    "url": "assets/js/23.43972876.js",
    "revision": "df1503ec884f8c9adb41caedb167db26"
  },
  {
    "url": "assets/js/24.20e471dd.js",
    "revision": "525150999f8ee67ff7db7c0bb94ee1b4"
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
    "url": "assets/js/27.10a8534a.js",
    "revision": "8d24c34e6f1e745e681f81331a17c102"
  },
  {
    "url": "assets/js/28.39e5b707.js",
    "revision": "b4c545563c1902397b909abbec65d0e4"
  },
  {
    "url": "assets/js/29.8d2735b0.js",
    "revision": "bf0eebfcc16ce7bca1326ddf84e07574"
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
    "url": "assets/js/34.4a4a13fe.js",
    "revision": "84f3fdfbff710e13e471662fcc5a3729"
  },
  {
    "url": "assets/js/35.32c73af4.js",
    "revision": "d0cbcca37d442c510c6f1252b83ba3cb"
  },
  {
    "url": "assets/js/36.f660c30f.js",
    "revision": "2a2d899ec2af9c116c211701a7616697"
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
    "url": "assets/js/app.a829d4d3.js",
    "revision": "e62096064cb3175853f28f6c3e57a87d"
  },
  {
    "url": "course/description.html",
    "revision": "149439375c26884144adb0d0f3e2051a"
  },
  {
    "url": "course/schedule.html",
    "revision": "007dc75cc883d6718cf9014eec342a16"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "fddf973420c1b7d7fbe28cc8fc64bd2d"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "33a153dc8848405f126130e2d5acbbee"
  },
  {
    "url": "guide/css/index.html",
    "revision": "e97e88f0f2d02d5fa5d657cd04d93ae3"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "f06f50bda6b6629b85a3a4a51c334c7e"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "b6860ce5db8cfa71792feeba88069b75"
  },
  {
    "url": "guide/html/index.html",
    "revision": "d450e3c81d9cd1bdd6ea4533a8dc203f"
  },
  {
    "url": "guide/index.html",
    "revision": "0466d034159833db1663be25936aa85d"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "437198c63e3abb98181e3473f14027d9"
  },
  {
    "url": "guide/node/index.html",
    "revision": "8a314141a337793bc5a9caa2d96aa9a3"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "c1cc0ed30461091a151910b22e7a032c"
  },
  {
    "url": "index.html",
    "revision": "d544625f8eb6d13acc68cf2d94bcd291"
  },
  {
    "url": "projects/index.html",
    "revision": "45396d9d3185b1e36d82dde07b6484c9"
  },
  {
    "url": "projects/project-01.html",
    "revision": "d60be6f8e38ad9713f2e1572a1eeb88f"
  },
  {
    "url": "projects/project-02.html",
    "revision": "ee08e26d7b9dc1b55088b1926682af42"
  },
  {
    "url": "references/book-02.html",
    "revision": "faeb187b13f6051b610638980314e00d"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "025dc3cd415573dc4edc3b9546973ae9"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "cacbfa9c85c9840e1c74a8d9169241f2"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "37e252457e5e543ac5f7ee222fef7100"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "d748885b180352737078be56ec7718b4"
  },
  {
    "url": "references/index.html",
    "revision": "45766ba0291349c35d7256dc8a2d1133"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "ecaec3d7cc134bd490dcd203231f9cf8"
  },
  {
    "url": "tasks/task1.html",
    "revision": "20dadf48e1826089004ee941e739c39f"
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
