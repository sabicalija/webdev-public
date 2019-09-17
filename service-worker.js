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
    "revision": "a62655a3037bd9592ad0038e16052c9b"
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
    "url": "assets/js/21.2867fe57.js",
    "revision": "32b61371b5d98c7bf0f04e30fbac895f"
  },
  {
    "url": "assets/js/22.74a76750.js",
    "revision": "da33fc7cc1dc7a75270ad8581412aba2"
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
    "url": "assets/js/34.81bb7ebe.js",
    "revision": "96d08709d9c8df0545dc9ced280ecf9f"
  },
  {
    "url": "assets/js/35.41df0d46.js",
    "revision": "d1be0c490a54721c4a0baebaeac333f3"
  },
  {
    "url": "assets/js/36.f660c30f.js",
    "revision": "2a2d899ec2af9c116c211701a7616697"
  },
  {
    "url": "assets/js/37.a1c69b4d.js",
    "revision": "8736a7ca21793d625ae1f6287405b166"
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
    "url": "assets/js/app.1cf4f98e.js",
    "revision": "280306019ebefdec379a8f9746d3b671"
  },
  {
    "url": "course/description.html",
    "revision": "8f2db41ec1a129d8c9101aa3af6a557c"
  },
  {
    "url": "course/schedule.html",
    "revision": "74ec943f9e622ac81c688f7e3fc82102"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "c35f33ccdad81750eb8a444c95e98cb2"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "7c84218d7ecc1fe11f82a709537d449b"
  },
  {
    "url": "guide/css/index.html",
    "revision": "4ed58d6c1def38218d53cc7049794910"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "27ef9d9ffaa40697115119505acf2a06"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "31ba34347227442c4fbb56b653caaa07"
  },
  {
    "url": "guide/html/index.html",
    "revision": "ada3749b75e20fba3e2b7a20a8458019"
  },
  {
    "url": "guide/index.html",
    "revision": "22d01c82f8153717de7675de55694c10"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "27ddf810d4a1087c38e24f3455fd31a2"
  },
  {
    "url": "guide/node/index.html",
    "revision": "c91f0ef95861819e20b09d128b18f196"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "b89b6ca2e86b4c5c64c59d8b554cb6e4"
  },
  {
    "url": "index.html",
    "revision": "8ac0003315c741f209b602f73af285e2"
  },
  {
    "url": "projects/index.html",
    "revision": "796c56a83bf4f67bd01a13dc6219e0c6"
  },
  {
    "url": "projects/project-01.html",
    "revision": "5d6ee505c1e283c5d140ecb6cd2d99c3"
  },
  {
    "url": "projects/project-02.html",
    "revision": "e04aa26694beb8555454448dc1ab99e1"
  },
  {
    "url": "references/book-02.html",
    "revision": "34d1fbbbc411cbdc32dbf6a68588a353"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "64de3f7c4b62e63286992ac0dd851540"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "608e9474859c23efc287886054de7a45"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "127ec9846b784646cf3eb20f060efb6c"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "7a7742d6e5de7eec0aba9421d746009c"
  },
  {
    "url": "references/index.html",
    "revision": "5a5bdbc13fef7b723e20dd06e224e066"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "bcb73e8492fc092917a0cd25c9191c1b"
  },
  {
    "url": "tasks/task1.html",
    "revision": "35c5a40c861b4f57a2c3b07f65df0edf"
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
