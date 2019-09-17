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
    "revision": "7a09332bce1606979a3ea4cfe9b356df"
  },
  {
    "url": "assets/css/0.styles.c02ba487.css",
    "revision": "0633f163903cb3c9d7de2dfbe7dccb25"
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
    "url": "assets/js/20.e3584ffb.js",
    "revision": "96bbe363f68f3c35522e648d1c91eefd"
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
    "url": "assets/js/23.33f97b27.js",
    "revision": "d636181199c3aaee4549327a865dc3cf"
  },
  {
    "url": "assets/js/24.20e471dd.js",
    "revision": "525150999f8ee67ff7db7c0bb94ee1b4"
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
    "url": "assets/js/29.c6d5ee32.js",
    "revision": "6b63a259856e24a72b9b10bc6a3d4c9c"
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
    "url": "assets/js/app.0acdac5a.js",
    "revision": "f37f2eee291362916253f91976de67d2"
  },
  {
    "url": "course/description.html",
    "revision": "95ef09f501396eda6b16e352a9b21234"
  },
  {
    "url": "course/schedule.html",
    "revision": "bfc99566d8648f949e89612d32ee4dc5"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "f66317a7f512e87bbc627f8a85023fd5"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "ddeecf505e405d9e16f8c64a381cacf0"
  },
  {
    "url": "guide/css/index.html",
    "revision": "e8aa038ef5b3a211ee8eb2787a3e5b3a"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "759a2d5a8102eaeeb4612914e30ec95b"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "14a23708043ed3ce982141cb228f8b0e"
  },
  {
    "url": "guide/html/index.html",
    "revision": "21a09fe681e78d621a553b4140cedf86"
  },
  {
    "url": "guide/index.html",
    "revision": "8c472fca761e6ceadcd6634f5a40b171"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "9a50524a8e3cfd2482f7b4ea316da159"
  },
  {
    "url": "guide/node/index.html",
    "revision": "456023020d0041646ec313e3868a8474"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "fbee5f08051941ecad091b13f32a93b9"
  },
  {
    "url": "index.html",
    "revision": "4a04de823899cf643737fe2c7e2f77ff"
  },
  {
    "url": "projects/index.html",
    "revision": "62435f793117b90598c02639f929dba2"
  },
  {
    "url": "projects/project-01.html",
    "revision": "e942ad35ee642f09a9df74c9003f97da"
  },
  {
    "url": "projects/project-02.html",
    "revision": "9f0aa765555e704e781371711ab1ee68"
  },
  {
    "url": "references/book-02.html",
    "revision": "17dc3dfddf8b51e25d6f3186d607b965"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "e3cabfb69846cfe4035461168c120c6c"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "9e0fe831220afbab21083f69135baae2"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "2a28d57249998aa0bbf38a0c3e2ff863"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "ab834d8ba067235bc9e138c89f2fe117"
  },
  {
    "url": "references/index.html",
    "revision": "5d4530fc91a84b8fc9db94ebc6c44c64"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "453d3e8abba6f88ebb8fabd7abe2ab21"
  },
  {
    "url": "tasks/task1.html",
    "revision": "845ed0b076dd822536093a47ea553ee3"
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
