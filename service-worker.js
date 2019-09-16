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
    "revision": "4a6c33a307a376dfb1d5d2ec34091bc3"
  },
  {
    "url": "assets/css/0.styles.e1c5c35c.css",
    "revision": "6168595a5f1cc2b4ed8a0c5a9eaeaec5"
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
    "url": "assets/js/1.e726da4e.js",
    "revision": "ae2a7a96511dd484f798884d216204d7"
  },
  {
    "url": "assets/js/10.6073d54c.js",
    "revision": "f5310024b0521f814609d03d9571d869"
  },
  {
    "url": "assets/js/11.dfb30b88.js",
    "revision": "984809bf1098d021bd56baee827f30a5"
  },
  {
    "url": "assets/js/12.d3c5fb2f.js",
    "revision": "252f59e39244eab39ba08ce4c99a8cbd"
  },
  {
    "url": "assets/js/13.94f347c1.js",
    "revision": "5ebaeec38bbb7caca79e90bdff477491"
  },
  {
    "url": "assets/js/14.a9263ab2.js",
    "revision": "4223c6baec601bba63f0971630a8ee69"
  },
  {
    "url": "assets/js/15.6aa580a3.js",
    "revision": "907a0c321419177318ecc1bb33f27884"
  },
  {
    "url": "assets/js/16.220722b3.js",
    "revision": "ed09ca1bd42a9fa6deaec8d2aa49bc47"
  },
  {
    "url": "assets/js/17.e2e9f333.js",
    "revision": "6a409ddf73d6a5af26c652e76d0d31b0"
  },
  {
    "url": "assets/js/18.aefb924f.js",
    "revision": "b4aaf4222d69f00cd6be4fb9a9ea81e4"
  },
  {
    "url": "assets/js/19.3fb85ad2.js",
    "revision": "1c674c964c6e7285deb3c91bceea0493"
  },
  {
    "url": "assets/js/2.7f5d5448.js",
    "revision": "52768040a4dbd5b76370f52aff200c96"
  },
  {
    "url": "assets/js/20.ba45563f.js",
    "revision": "b68fdb763ac5eeaa5db8c9992676a5ab"
  },
  {
    "url": "assets/js/21.f101e6b8.js",
    "revision": "f1f888f2de1ccf82cfdac12e699d6d37"
  },
  {
    "url": "assets/js/22.04ad2634.js",
    "revision": "c2bff2063dfaa520ecbd466db17ad996"
  },
  {
    "url": "assets/js/23.82346c35.js",
    "revision": "a8a5ea7110a968d222d274993233e419"
  },
  {
    "url": "assets/js/24.3bfc4363.js",
    "revision": "c41ed395ced33ec4f951aa2e0c3ec6b7"
  },
  {
    "url": "assets/js/25.fd3e5299.js",
    "revision": "df595dc21d2b62f5d8b246582c88ef6e"
  },
  {
    "url": "assets/js/26.b4883bb3.js",
    "revision": "83d9fbcc35f3da25e3e2701ab91d89c2"
  },
  {
    "url": "assets/js/27.54324c49.js",
    "revision": "c847c93065e1506cf1452ad5913c66bc"
  },
  {
    "url": "assets/js/28.2462cd5c.js",
    "revision": "0db44e8b0842f150a1feb99988827a95"
  },
  {
    "url": "assets/js/29.974865ef.js",
    "revision": "90ed91cb850cd397848218b558c36d98"
  },
  {
    "url": "assets/js/30.01f9ae4f.js",
    "revision": "22f49d0240bfe5b6788d08991d33bd3c"
  },
  {
    "url": "assets/js/31.9f8a3936.js",
    "revision": "7c5f6539c074ed32bd2e881788495928"
  },
  {
    "url": "assets/js/32.aa8fc5d9.js",
    "revision": "3ef36d10f31e0316b21d236965787e99"
  },
  {
    "url": "assets/js/33.0e1a64d8.js",
    "revision": "7ad1fc8012a1ffd015c524ec23bfa30f"
  },
  {
    "url": "assets/js/34.0f0e5721.js",
    "revision": "fdc3b9c4d5caf9ea5c8895d9ed96185d"
  },
  {
    "url": "assets/js/35.e3e656f5.js",
    "revision": "3f311c08ef5facbd38b9d3403485470e"
  },
  {
    "url": "assets/js/36.d8857cc6.js",
    "revision": "43945db65eae0b5b8c3490730952f8b7"
  },
  {
    "url": "assets/js/37.bade2a53.js",
    "revision": "c30fadefab794edc18b79bc3a4cde374"
  },
  {
    "url": "assets/js/4.d8568e4c.js",
    "revision": "f02dd1a668101a529b8014c4e34a698e"
  },
  {
    "url": "assets/js/5.c4bddbc4.js",
    "revision": "41fc5238beb1ef07ea672fdf08e5b408"
  },
  {
    "url": "assets/js/6.3651b88a.js",
    "revision": "fe018c64d58cb6bd90b65c9f088743b3"
  },
  {
    "url": "assets/js/7.4a5d252c.js",
    "revision": "d2ed1cde50663679cbcb52dc8c0a8f5c"
  },
  {
    "url": "assets/js/8.adb9af52.js",
    "revision": "b3112f575a5533024358d6fe8e64fefc"
  },
  {
    "url": "assets/js/9.21f71d28.js",
    "revision": "af30ee837390227ad1542ab236adb39b"
  },
  {
    "url": "assets/js/app.6a610b06.js",
    "revision": "ca1453f9bb60ae4f09ee60ec5a00ef79"
  },
  {
    "url": "course/description.html",
    "revision": "f97378edf47a0d88b9590d0b1da9a947"
  },
  {
    "url": "course/schedule.html",
    "revision": "3f4276704149e111bf5c45676052c102"
  },
  {
    "url": "guide/apis/index.html",
    "revision": "a200ce6b654e448003a478f1f2aeef87"
  },
  {
    "url": "guide/browser/index.html",
    "revision": "004d5fa3f5e37a4c50cf01fd27905c2d"
  },
  {
    "url": "guide/css/index.html",
    "revision": "d3592ae984b287495ab3b22658388460"
  },
  {
    "url": "guide/dom/index.html",
    "revision": "6dba0f39d8f537494b88e56fb221fe9c"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "10660b90f1ad7fa6ae1d904683b9e13a"
  },
  {
    "url": "guide/html/index.html",
    "revision": "ce1d034486719ed317ab6c6d37b2e11c"
  },
  {
    "url": "guide/index.html",
    "revision": "6ac778a5b357da640b0a695578f4e3d2"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "f462922d61f6941ebe282b06c9d73d19"
  },
  {
    "url": "guide/node/index.html",
    "revision": "01f3689b426f8d1039c819d0a378eb1b"
  },
  {
    "url": "guide/vue/index.html",
    "revision": "4f90fc8c42c296ed6f4c27f0393d7102"
  },
  {
    "url": "index.html",
    "revision": "d80fc7d5ec99eb87e028c63768828861"
  },
  {
    "url": "projects/index.html",
    "revision": "434e33cc3ff40344c2a772ab4868f324"
  },
  {
    "url": "projects/project-01.html",
    "revision": "44d6d8fa45c278674b1b49ec725a24fd"
  },
  {
    "url": "projects/project-02.html",
    "revision": "80753ea1fa7b2faa8aef953cd3450780"
  },
  {
    "url": "references/book-02.html",
    "revision": "bacee195238ad38cf261bd13766787ca"
  },
  {
    "url": "references/css/book-01.html",
    "revision": "65d2cba7fdcf3d6075f2bc1829ecc61e"
  },
  {
    "url": "references/html/book-03.html",
    "revision": "38337738cc80da5921ee5ea75cc914e1"
  },
  {
    "url": "references/html/book-04.html",
    "revision": "586c565dc97051fb6bb84044ef4288e6"
  },
  {
    "url": "references/html/one/book-05.html",
    "revision": "bdd4f613538c237f082d1a8f69fbad47"
  },
  {
    "url": "references/index.html",
    "revision": "7589b58a9246fb6ac1e59f21122bb773"
  },
  {
    "url": "slides/lecture-01.html",
    "revision": "ae79c57928a25c017e7405a1d73560c6"
  },
  {
    "url": "tasks/task1.html",
    "revision": "bcf3c29638ae8afe87d7b1275ab13168"
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
