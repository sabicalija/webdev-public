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
    "revision": "ce4a42bf2caea6c1075460cb666e545d"
  },
  {
    "url": "assets/css/0.styles.db7b430d.css",
    "revision": "a198fb1864f999066f368d63f6b623be"
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
    "url": "assets/js/16.83ab59d9.js",
    "revision": "c02654da13e228bdaa3be922174f79fb"
  },
  {
    "url": "assets/js/17.9abb0ba8.js",
    "revision": "cbbc982a656f87b90c66ce6eba6623c4"
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
    "url": "assets/js/29.7e57cc8a.js",
    "revision": "13cf2ad46b9a6dcd174718ef56c41540"
  },
  {
    "url": "assets/js/30.56023e32.js",
    "revision": "7251dde38b91cf1bf86569b276e5fd0e"
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
    "url": "assets/js/33.b2a864fb.js",
    "revision": "a444b7e7443b33303dc44a3295af41f5"
  },
  {
    "url": "assets/js/34.f3d959c0.js",
    "revision": "adae6505275e3d6f95e45216c4ef6fe3"
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
    "url": "assets/js/app.d05c8850.js",
    "revision": "946ad1061040896b064c1d8556b14a27"
  },
  {
    "url": "course/description.html",
    "revision": "5b55d88f31ab0bf39db8ab419155f58e"
  },
  {
    "url": "course/schedule.html",
    "revision": "4b6e7b89f07f19880be97fd30163fb2b"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "653fcbbdc093a455b02277190413c279"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "9e68601040e0268191940340a1e0dc4e"
  },
  {
    "url": "guide/css/index.html",
    "revision": "dc2603f0d654fc2e88ba1add3ce6cfc5"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "2748e0dc54d02e6421391616dd07bbbd"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "b0b69d8df10b007fc5218a9c698d8a41"
  },
  {
    "url": "guide/html/index.html",
    "revision": "019f473a57caaeb85ed2684eb55dab4a"
  },
  {
    "url": "guide/index.html",
    "revision": "a80a4dc874cbda1a81ef42d49d0b4a19"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "69f37297c81fff98a5e0d09f6e906f6b"
  },
  {
    "url": "guide/node/index.html",
    "revision": "22fa3c5f2dcf18285a254597464b2ea9"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "959eecb313f89f7396bea8550f2e2b15"
  },
  {
    "url": "index.html",
    "revision": "405cb0f1ff4253c59f6b290282c66dc3"
  },
  {
    "url": "projects/index.html",
    "revision": "e91b859fa2855af57b4a1a1bfc8be68a"
  },
  {
    "url": "projects/project-01.html",
    "revision": "dcb3b63de033515ba9fb49ec3e6d3bdc"
  },
  {
    "url": "projects/project-02.html",
    "revision": "45796ea26ed8e871795fd06548f19b42"
  },
  {
    "url": "references/book-02.html",
    "revision": "5083f1b6c7152c919f3ea2559a6bb982"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "d81fbfc0bb256578b57c8fdd0825e66d"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "f5ee76d71a85490823bd739e88fad252"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "df343e15e09bdbcd36a0424f8d9c12fe"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "d0896b8963247a5fe324849bec1871c4"
  },
  {
    "url": "references/index.html",
    "revision": "e6e0abe81003812472f0252c399493f9"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "25233d0d96846bb36d48071283e0000e"
  },
  {
    "url": "tasks/task1.html",
    "revision": "b9f3ac6d35ccba37bbdeda7f83de5af3"
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
