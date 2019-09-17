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
    "revision": "c4c477ee07cacb2109c74cdb3050eb3b"
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
    "url": "assets/js/16.37c2dba8.js",
    "revision": "e4e14856b2a39a24a740154d33d4b4fe"
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
    "url": "assets/js/22.c6c65793.js",
    "revision": "4e739d21369bab0a8d3cc0420b34fe3c"
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
    "url": "assets/js/26.f12a05f7.js",
    "revision": "1c803f7eb95d07cfbe5bf1bd3d53ecc8"
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
    "url": "assets/js/29.6c781735.js",
    "revision": "fa48e6452f4c1aa045643a739066cedc"
  },
  {
    "url": "assets/js/30.a4f70330.js",
    "revision": "96572bbe2dd16aad61ad85c7634a17c6"
  },
  {
    "url": "assets/js/31.9f330f3d.js",
    "revision": "6da87763df41f33d61c2dc7cf3927453"
  },
  {
    "url": "assets/js/32.86185795.js",
    "revision": "23dc21034b24ae1b3efec9e5a982b106"
  },
  {
    "url": "assets/js/33.b2a864fb.js",
    "revision": "a444b7e7443b33303dc44a3295af41f5"
  },
  {
    "url": "assets/js/34.a02c022f.js",
    "revision": "c90806852972fb63e50dc5d09c9dcf83"
  },
  {
    "url": "assets/js/35.1290c217.js",
    "revision": "ccf3479cfb3a67e4e4a107ed42972ba5"
  },
  {
    "url": "assets/js/36.f9276262.js",
    "revision": "7044452853795753e426a94ee80e69c5"
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
    "url": "assets/js/app.210e2516.js",
    "revision": "dbf6dfa5a93dccd772ef592297bd06ac"
  },
  {
    "url": "course/description.html",
    "revision": "f4b9ea4152b46367a80760cefee6ec6c"
  },
  {
    "url": "course/schedule.html",
    "revision": "d46a9865926b5d3f8c0ad5c4dbc24dc4"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "37233324d8a3fdb3cdb6fe14970ed2a5"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "d2f9e04444f670f35a96d567dda1b74d"
  },
  {
    "url": "guide/css/index.html",
    "revision": "24df133b7afe4724362a629b6cd2980c"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "a6bd5ad0fe03b3ece67647a8e4ab8429"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "14f89d8cbe0920ee16ef3df93a6151c1"
  },
  {
    "url": "guide/html/index.html",
    "revision": "36b689c21549dfae0dae4ec1b63f5d73"
  },
  {
    "url": "guide/index.html",
    "revision": "b62882168900fb1dad99d8f310883106"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "124976d89ec07c63870944b9d1fc4f66"
  },
  {
    "url": "guide/node/index.html",
    "revision": "13c1504290b4418294eb075f03c6cb86"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "0a13570b354509d1a31e58843bc5e2a8"
  },
  {
    "url": "index.html",
    "revision": "f0bdc97c81dd8ce631c86532039cae17"
  },
  {
    "url": "projects/index.html",
    "revision": "5fe0cc3d3e46a305873429ca1a073b33"
  },
  {
    "url": "projects/project-01.html",
    "revision": "91566e4e9699b2116ac9ade423dc9b68"
  },
  {
    "url": "projects/project-02.html",
    "revision": "ec43d38cc511d32d64c2d4b2c3782fbe"
  },
  {
    "url": "references/book-02.html",
    "revision": "42353181eaf274511aaf66a1c8730a38"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "3d9bb562f2b051d3cfec33423784a0a0"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "2ed8a9365d2b443f386dfba4ab002048"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "00b38dbe3bb6d7de4c483e3dd48a4cd0"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "e012f9df1606a06e757839da7626d2f9"
  },
  {
    "url": "references/index.html",
    "revision": "f3b87971d6a80ac814053b2866a8cc78"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "38eec26d52922634eab35904e449bd4e"
  },
  {
    "url": "tasks/task1.html",
    "revision": "75e9ca047177c4a0e976f8cff13df9c1"
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
