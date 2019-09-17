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
    "revision": "7c9d1d1bd106bd92b80b4f44ed0ab1af"
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
    "url": "assets/js/17.2602fd15.js",
    "revision": "a2b185c78005cb08436447b4e1c49259"
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
    "url": "assets/js/20.685f9b95.js",
    "revision": "84de4a8bbf0453fec7f38beabc02a737"
  },
  {
    "url": "assets/js/21.5a1bca41.js",
    "revision": "76e080d3a02304fd8170e14e8c9dfadf"
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
    "url": "assets/js/31.9f330f3d.js",
    "revision": "6da87763df41f33d61c2dc7cf3927453"
  },
  {
    "url": "assets/js/32.898eb95c.js",
    "revision": "934aa282f3991086a2bc0e12e26bb2f7"
  },
  {
    "url": "assets/js/33.5913ba98.js",
    "revision": "943a555b9c90bc889d9525743dcad006"
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
    "url": "assets/js/36.f660c30f.js",
    "revision": "2a2d899ec2af9c116c211701a7616697"
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
    "url": "assets/js/app.14a4516d.js",
    "revision": "d5ad319c1571fcd4e9714feadf822552"
  },
  {
    "url": "course/description.html",
    "revision": "e4499d7d95d40472e0c016f70102ea78"
  },
  {
    "url": "course/schedule.html",
    "revision": "c91518a5906a17e0f9555c4a1a9e61b4"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "c00c16574d7615d053111665fb70c31c"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "58a4ce9a6122861f4df1bbf074dc5059"
  },
  {
    "url": "guide/css/index.html",
    "revision": "4f6b99b1dd9f6f4c5793e3ce2f96471d"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "123685e75e3c93393d4423103f4abcc9"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "682f58656824360a8960311082c0f3c0"
  },
  {
    "url": "guide/html/index.html",
    "revision": "c635bc1606a592771850334614d9a286"
  },
  {
    "url": "guide/index.html",
    "revision": "76012f07ec0a078aebf9dc8593fae561"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "a79a7853f2b1d93e6d522733aa2cd2e6"
  },
  {
    "url": "guide/node/index.html",
    "revision": "0be1ba74d337dde3723839453a41f6b4"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "41f52ea8386b09c45ea1cee1fb9a9c5b"
  },
  {
    "url": "index.html",
    "revision": "8bae09df4d10df14443b0e02865c2054"
  },
  {
    "url": "projects/index.html",
    "revision": "41c35dd8ca37744b3982e83de7fc2878"
  },
  {
    "url": "projects/project-01.html",
    "revision": "d98c63cb94473b7d23d44af920ed0461"
  },
  {
    "url": "projects/project-02.html",
    "revision": "00b671a00fe09569e52d0b46e82063cb"
  },
  {
    "url": "references/book-02.html",
    "revision": "868f7202af268fda3b443625a9834f46"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "69466a9233b66127108feb7766c7b8a8"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "147ecf7f37f09ea8dca7faea31118e5b"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "16593d2297e58e2fd1c6989a4c3a1355"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "81894e34773cb4081a2a2cb74e0f4d62"
  },
  {
    "url": "references/index.html",
    "revision": "a48e39a583b6db8f45edb2f2b409ebee"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "5b6eb4157394d633e292dc2db5b4f761"
  },
  {
    "url": "tasks/task1.html",
    "revision": "e19b64c1c211b118ca13da1bf879a0b5"
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
