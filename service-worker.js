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
    "revision": "73b41fcde212cabea7669bc9726591ab"
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
    "url": "assets/js/18.1c0e055a.js",
    "revision": "4dd1e2a4f89047c5cb7d8ac2c2ba22e0"
  },
  {
    "url": "assets/js/19.977e66a7.js",
    "revision": "f33122d2c51fa801e13ec8c30d763755"
  },
  {
    "url": "assets/js/2.8e4169f3.js",
    "revision": "3cff175bbd310f56496b49ed5ce47285"
  },
  {
    "url": "assets/js/20.685f9b95.js",
    "revision": "84de4a8bbf0453fec7f38beabc02a737"
  },
  {
    "url": "assets/js/21.405ea187.js",
    "revision": "7411c962214691d299062718701c487b"
  },
  {
    "url": "assets/js/22.fba0361b.js",
    "revision": "13ac15eb6ba75a78cba1d2f268bdc6f3"
  },
  {
    "url": "assets/js/23.7f9ce296.js",
    "revision": "f576b76a5d9e55112c90ab4c1300950a"
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
    "url": "assets/js/26.a920d843.js",
    "revision": "56567f659a9db77bf1c564a473b5736d"
  },
  {
    "url": "assets/js/27.a3495d3b.js",
    "revision": "cbc8209b3512fa09f75130536df19069"
  },
  {
    "url": "assets/js/28.39e5b707.js",
    "revision": "b4c545563c1902397b909abbec65d0e4"
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
    "url": "assets/js/33.b2a864fb.js",
    "revision": "a444b7e7443b33303dc44a3295af41f5"
  },
  {
    "url": "assets/js/34.81bb7ebe.js",
    "revision": "96d08709d9c8df0545dc9ced280ecf9f"
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
    "url": "assets/js/37.5c9d7663.js",
    "revision": "3609b714ca6b07af5b113091e816250e"
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
    "url": "assets/js/app.31e6122c.js",
    "revision": "add85cd15f933e3b2f15321d31cd783a"
  },
  {
    "url": "course/description.html",
    "revision": "54cd6311c7a671681379935c1771fefd"
  },
  {
    "url": "course/schedule.html",
    "revision": "932cfec3861dcef3f12c35622fca1db6"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "ebc2fde0e57c262f7899495dcc8b5c85"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "dc3631f80e479c5d3735c266981482a3"
  },
  {
    "url": "guide/css/index.html",
    "revision": "3d4e3491f273a3c0409578299f3df956"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "be6a5f165bc8ea084645af4d73ee43c2"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "81b784518a06714616e48809d6b87a2e"
  },
  {
    "url": "guide/html/index.html",
    "revision": "e9eb9a4ad2f928185e15c65fe769e588"
  },
  {
    "url": "guide/index.html",
    "revision": "0e763f9debdf0e75731630cdf03c275f"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "1667250a07d751062a43e0b66505c66d"
  },
  {
    "url": "guide/node/index.html",
    "revision": "d8814d73d62e74c261e7dbc27af23721"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "88766f16304a7677db2b408bdf80f678"
  },
  {
    "url": "index.html",
    "revision": "37dd1645cbfc56978fae127847129605"
  },
  {
    "url": "projects/index.html",
    "revision": "e9b3d784fc5a9477035302cd4b165d0b"
  },
  {
    "url": "projects/project-01.html",
    "revision": "ac19811e622a3073129fd0682045b0d4"
  },
  {
    "url": "projects/project-02.html",
    "revision": "87c39abc4f73ebc30b83f0c524f9d253"
  },
  {
    "url": "references/book-02.html",
    "revision": "c17fb35dc50799f3fb2bb8e773f7db11"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "24bac9f6a2d6130dd25cb25a604a8b4d"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "7af5de87b3bc444516aec5603f617bf3"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "3ed0f49daeacb9991eafe5231b452ad5"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "769a57520b1c40c2f62e0b7a8e135720"
  },
  {
    "url": "references/index.html",
    "revision": "daec00398add37668bff665168608274"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "6684cc7e398fa6a20d674cea17b1fc58"
  },
  {
    "url": "tasks/task1.html",
    "revision": "d96db32905e2f9db5c04c976ae687c44"
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
