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
    "revision": "97aa382183292fb93e1cb70cfbe01a3d"
  },
  {
    "url": "assets/css/0.styles.3e4446ae.css",
    "revision": "a02102dd3a581ddbc2da43d0d7f25b86"
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
    "url": "assets/js/17.68ea20c3.js",
    "revision": "e688aa40fc33f9c300eac3677c22077e"
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
    "url": "assets/js/22.459ac49f.js",
    "revision": "145415e54928062555ef663b3d03b9b3"
  },
  {
    "url": "assets/js/23.8a85b30d.js",
    "revision": "11ae471e6e4704b945f5c80380b69783"
  },
  {
    "url": "assets/js/24.4f744a83.js",
    "revision": "e4c09147d131248ebaf815e172f99c71"
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
    "url": "assets/js/29.5ff52cfe.js",
    "revision": "04d9f065628acfcf3256b52e4065c730"
  },
  {
    "url": "assets/js/30.56023e32.js",
    "revision": "7251dde38b91cf1bf86569b276e5fd0e"
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
    "url": "assets/js/34.a02c022f.js",
    "revision": "c90806852972fb63e50dc5d09c9dcf83"
  },
  {
    "url": "assets/js/35.32c73af4.js",
    "revision": "d0cbcca37d442c510c6f1252b83ba3cb"
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
    "url": "assets/js/app.96ce3116.js",
    "revision": "ccfb466400f18677d103c6346ba9f998"
  },
  {
    "url": "course/description.html",
    "revision": "a2ec3fc45b7bd884eb1375f1d4337580"
  },
  {
    "url": "course/schedule.html",
    "revision": "8faab28b1a50d4e4c16926d4c5a8e139"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "88816fff55e61fa9fe9b4d89acac8592"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "b5757dddbc49908c1c04e3fd7f3304c8"
  },
  {
    "url": "guide/css/index.html",
    "revision": "e6b999ca7a70893842df20315dacc3d4"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "d04321719af0b5e2a314bb9d0b424a58"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "20f0e36199e6ec10172554ba5d77630f"
  },
  {
    "url": "guide/html/index.html",
    "revision": "46bf5ce3fb9c43f3ec88b2f4a0e210eb"
  },
  {
    "url": "guide/index.html",
    "revision": "10a511c9da56e11601166ce46c527392"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "b2c81787dd18b38b38c59c1e79650d92"
  },
  {
    "url": "guide/node/index.html",
    "revision": "5dab759776c1cde763f196bfcc1a0ca4"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "7ec33887fdfca4177a0f0a286a106e1f"
  },
  {
    "url": "index.html",
    "revision": "c7c16637ab2c6a49011de75e1b84c629"
  },
  {
    "url": "projects/index.html",
    "revision": "a62033a2619caa4b365ae9ac7f8c7831"
  },
  {
    "url": "projects/project-01.html",
    "revision": "0123d5af280786a7705e466fe6fe8eec"
  },
  {
    "url": "projects/project-02.html",
    "revision": "1a90f7b82a9d4407c4269cd67e232394"
  },
  {
    "url": "references/book-02.html",
    "revision": "9cd8d39b9423491cd6c9f0231c0be80d"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "56213fd2391bfa151d36614dc555fbdb"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "69930b448057c9b7591d14ceecef7e54"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "459b8389e9093251b4fe6af61c1c2894"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "cbf1359d466277e3adf28666cff82104"
  },
  {
    "url": "references/index.html",
    "revision": "a7e2caf7ae693e0e3ba3ae54e012882b"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "3363a9741e9e61dd38ec2b1526a99f9c"
  },
  {
    "url": "tasks/task1.html",
    "revision": "52ac1b1835929fc7b460db128118fd66"
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
