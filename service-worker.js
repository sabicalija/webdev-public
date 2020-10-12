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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2019/404.html",
    "revision": "ed896262579db2f8a6fa4e6e1da6f5d0"
  },
  {
    "url": "2019/assets/css/0.styles.7966f4aa.css",
    "revision": "e0639e62101b92344154db3022a5b83f"
  },
  {
    "url": "2019/assets/favicon/android-chrome-192x192.png",
    "revision": "d2ad87d0dc3537c2f445489ab9aab462"
  },
  {
    "url": "2019/assets/favicon/android-chrome-512x512.png",
    "revision": "06c2f5bab5f6e4bc26d802c045586e73"
  },
  {
    "url": "2019/assets/favicon/apple-touch-icon.png",
    "revision": "887bb9f019ab4582da5211c4e91dac95"
  },
  {
    "url": "2019/assets/favicon/favicon-16x16.png",
    "revision": "2d27462da8826390451ef45b4153e575"
  },
  {
    "url": "2019/assets/favicon/favicon-32x32.png",
    "revision": "bd38772defdc893db0f2855b00c50448"
  },
  {
    "url": "2019/assets/favicon/mstile-150x150.png",
    "revision": "fec673d895f920a46598a9ca9e3d9cc3"
  },
  {
    "url": "2019/assets/favicon/mstile-310x310.png",
    "revision": "cc782f860bd0f524f3bc2ac4e7faf59e"
  },
  {
    "url": "2019/assets/favicon/safari-pinned-tab.svg",
    "revision": "e1248a3ed1352a8d0ae3439d0724ca11"
  },
  {
    "url": "2019/assets/fonts/ubuntu/stylesheet.css",
    "revision": "9e130232c3eed4ffb05004b8ac07f454"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-bold-webfont.woff",
    "revision": "f58d27507335211a06b8aff41c6784d6"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-bold-webfont.woff2",
    "revision": "71cd5f4011632f570eafeb7ddf14fef8"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-bolditalic-webfont.woff",
    "revision": "ad880aa732bfdb09972da531bb2f3e89"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-bolditalic-webfont.woff2",
    "revision": "ea3c1842c6f8f3559a482ef48b10438d"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-italic-webfont.woff",
    "revision": "8bc01e6423fedd5b6a779fc974ef27d7"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-italic-webfont.woff2",
    "revision": "3610ec965e7134441d29b5be269eaf52"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-light-webfont.woff",
    "revision": "ea1f05b5ac614c8a0e33f91e4fecd77d"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-light-webfont.woff2",
    "revision": "2050f2a86d1b8c69c2fe73ca6f994352"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-lightitalic-webfont.ttf",
    "revision": "d9970d03b181274ccb736ac9e3b7b2ae"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-lightitalic-webfont.woff",
    "revision": "98c016df8679dd36ea96dc3876a22a7c"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-lightitalic-webfont.woff2",
    "revision": "028b80e7431adf86450ca1e3203e3f88"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-medium-webfont.woff",
    "revision": "b62d641e13f2e11e0177ab1de2a9ed6f"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-medium-webfont.woff2",
    "revision": "ce7734ac839e15ff04b274c9270b33d2"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-mediumitalic-webfont.ttf",
    "revision": "d2c6ca5e421f2c85be6db292fe608779"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-mediumitalic-webfont.woff",
    "revision": "3284976e395348776f6fe3f85d1d0565"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-mediumitalic-webfont.woff2",
    "revision": "c3899d3e548327e186a05698f69f65f9"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-regular-webfont.ttf",
    "revision": "ac59aeedd21ef0a2cafbe27a659755d0"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-regular-webfont.woff",
    "revision": "bc8de4e13923745ca2b2bca40c259673"
  },
  {
    "url": "2019/assets/fonts/ubuntu/ubuntu-regular-webfont.woff2",
    "revision": "91eeaad994ca44a5561bbe48bcb1034e"
  },
  {
    "url": "2019/assets/img/icons/169-light-custom.svg",
    "revision": "47dff43af9003c7292c208bd8cd7b525"
  },
  {
    "url": "2019/assets/img/icons/169-light.svg",
    "revision": "b6a8b10847ea1cd72a50506d58fc0583"
  },
  {
    "url": "2019/assets/img/icons/169.svg",
    "revision": "f1e1ef8432de7c96128c5311c3a37500"
  },
  {
    "url": "2019/assets/img/icons/43-light-custom.svg",
    "revision": "dbafa4ad62c55d11c5cfca38fdd522f3"
  },
  {
    "url": "2019/assets/img/icons/43-light.svg",
    "revision": "c9ed50096de6e7956547d73e38ea9302"
  },
  {
    "url": "2019/assets/img/icons/43.svg",
    "revision": "ffac02a32ecccc69cf48fdc8d8b0279b"
  },
  {
    "url": "2019/assets/img/logos/css.svg",
    "revision": "2671e7b6ffd3f97a1778b33956ade792"
  },
  {
    "url": "2019/assets/img/logos/fhtw.svg",
    "revision": "df12fe4e70e7e86bdd139d5ab6aeee6a"
  },
  {
    "url": "2019/assets/img/logos/fhtw/css.svg",
    "revision": "ccc17a5252a407ddd89e81e64fa114a4"
  },
  {
    "url": "2019/assets/img/logos/fhtw/html-js-css-icon.svg",
    "revision": "7f1bedf36ec4f4270e2092b31ac4a401"
  },
  {
    "url": "2019/assets/img/logos/fhtw/html-js-css.svg",
    "revision": "47c87aba727588f07b8132df876238a3"
  },
  {
    "url": "2019/assets/img/logos/fhtw/html.svg",
    "revision": "d389f0c4239aac40f23b216777f2313d"
  },
  {
    "url": "2019/assets/img/logos/fhtw/javascript.svg",
    "revision": "091e6ae83b7e3c8cf9a806b57475a2a8"
  },
  {
    "url": "2019/assets/img/logos/html-js-css.svg",
    "revision": "0b18d9c66db9e1650cab3cd517e84b71"
  },
  {
    "url": "2019/assets/img/logos/html.svg",
    "revision": "b3d94c28bb04c827b5597c2ef6d0ce4d"
  },
  {
    "url": "2019/assets/img/logos/javascript.svg",
    "revision": "1ac897424bdff171dca5107f60c1fef6"
  },
  {
    "url": "2019/assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "2019/assets/js/10.024fbea2.js",
    "revision": "a59c6ec961e444fa8479a150935ccd1f"
  },
  {
    "url": "2019/assets/js/11.583916b9.js",
    "revision": "c0d9f08eafe9b61a1a6c4fe1a7326d5a"
  },
  {
    "url": "2019/assets/js/12.02aee895.js",
    "revision": "15d2e884c7fcc70351b035ff67a5375e"
  },
  {
    "url": "2019/assets/js/13.fb6bd856.js",
    "revision": "279a5fbe37f0003ef4d62bafa2542aa6"
  },
  {
    "url": "2019/assets/js/14.7e07f5e8.js",
    "revision": "6ab986f685a35e64be759fc97f162c97"
  },
  {
    "url": "2019/assets/js/15.a448de4a.js",
    "revision": "4c877bc3cd681e348151400b397b5a42"
  },
  {
    "url": "2019/assets/js/16.ade4212e.js",
    "revision": "235753802c4bf530d007edd238241c94"
  },
  {
    "url": "2019/assets/js/17.fe71b99c.js",
    "revision": "61bb4d66556d42516571e2520bdb584d"
  },
  {
    "url": "2019/assets/js/18.871d5c0b.js",
    "revision": "86f8cddac7058846ab50e3d19039eace"
  },
  {
    "url": "2019/assets/js/19.59d1e286.js",
    "revision": "6fdf993451ff5caa752d00bf66555390"
  },
  {
    "url": "2019/assets/js/2.c9a4c00a.js",
    "revision": "edeed3cf29d9b6f60c71dc94c1161214"
  },
  {
    "url": "2019/assets/js/20.c148241b.js",
    "revision": "3b9c3d856edb7098daf9d08e4429cdb5"
  },
  {
    "url": "2019/assets/js/21.60cb90a6.js",
    "revision": "c874cd5505cefcbb207d6d1eaf248ec0"
  },
  {
    "url": "2019/assets/js/22.b14e4e53.js",
    "revision": "5e5b8ec2d790921d1e4e31fe90ec27b9"
  },
  {
    "url": "2019/assets/js/23.d6eae644.js",
    "revision": "455b2630202fba9c9a6e07c6faf03c93"
  },
  {
    "url": "2019/assets/js/24.55579d3a.js",
    "revision": "e8294c3bcab02c6159c1f5c2444d2351"
  },
  {
    "url": "2019/assets/js/25.b4249619.js",
    "revision": "2e708c67495ac9af7647ea3283041836"
  },
  {
    "url": "2019/assets/js/26.9cf132ad.js",
    "revision": "9404867fea5139e5967084b697821f9a"
  },
  {
    "url": "2019/assets/js/27.aaa0abb5.js",
    "revision": "055fd3eb272b30202bc8de62215c36ee"
  },
  {
    "url": "2019/assets/js/28.aa1423e9.js",
    "revision": "a969238428c857386228469f5b5c9ceb"
  },
  {
    "url": "2019/assets/js/29.8e8b65d2.js",
    "revision": "084fdb28f44e467510db56910ea514c1"
  },
  {
    "url": "2019/assets/js/3.91ad92ec.js",
    "revision": "41aa7530e709e4eef431cefa1be08739"
  },
  {
    "url": "2019/assets/js/30.5313db29.js",
    "revision": "5ecf105df280d094c3f4ed2099980ba1"
  },
  {
    "url": "2019/assets/js/31.682a00c5.js",
    "revision": "fa7be2eb86a579acd2ef00d4f4d08441"
  },
  {
    "url": "2019/assets/js/32.6a9620d4.js",
    "revision": "aec54330c47bfe70810021569f082bb1"
  },
  {
    "url": "2019/assets/js/33.53f9b780.js",
    "revision": "68f376ab8ff2f12fdfb003760fd35b27"
  },
  {
    "url": "2019/assets/js/34.add9603d.js",
    "revision": "9289d1991a7ea4694548123c3b5f0436"
  },
  {
    "url": "2019/assets/js/35.a609a338.js",
    "revision": "86af3ec69f1626acd3b91bef86cd87a1"
  },
  {
    "url": "2019/assets/js/36.b05be276.js",
    "revision": "d8947cb2851976c890aec604e0a8b623"
  },
  {
    "url": "2019/assets/js/37.3743146d.js",
    "revision": "44d3f2dd7ce3eeb011ec5cd1643c8799"
  },
  {
    "url": "2019/assets/js/38.56041b1b.js",
    "revision": "cf8f0427e3e6108f5480a70f07bd7eb8"
  },
  {
    "url": "2019/assets/js/39.0cbcab4d.js",
    "revision": "95c9956d9e60f9edf9f154abce95ef32"
  },
  {
    "url": "2019/assets/js/4.fe01713f.js",
    "revision": "b2fd7c7ffea41020ad5a1e359a4f7d7d"
  },
  {
    "url": "2019/assets/js/40.b8bc9482.js",
    "revision": "6f31c48517aa676b9762662b58664c8f"
  },
  {
    "url": "2019/assets/js/41.678abaef.js",
    "revision": "f19abb137b6607c9a431afba666aa295"
  },
  {
    "url": "2019/assets/js/42.b2914793.js",
    "revision": "61e6e7c9adf1482416e3056673537452"
  },
  {
    "url": "2019/assets/js/43.f354fccc.js",
    "revision": "9afb8c83a6704e0497da31656de0f177"
  },
  {
    "url": "2019/assets/js/44.6645d42e.js",
    "revision": "da929a3779859fef25523ce7d12a0810"
  },
  {
    "url": "2019/assets/js/45.13eb1dd2.js",
    "revision": "e0cd41aef0fa06cf07cdbb83d9b3c3d3"
  },
  {
    "url": "2019/assets/js/46.9bb412f4.js",
    "revision": "a42cd27fb4ae168c1dd4daf5b50cdf16"
  },
  {
    "url": "2019/assets/js/47.b1f46222.js",
    "revision": "a84af969c840819daf2edc40ef74d238"
  },
  {
    "url": "2019/assets/js/48.30f1cc29.js",
    "revision": "1c363d5546e406ab79820b07069344a7"
  },
  {
    "url": "2019/assets/js/49.c0d999d7.js",
    "revision": "40eed37c5daf166edc0e945f71957822"
  },
  {
    "url": "2019/assets/js/5.1920c4a1.js",
    "revision": "958109669c58bf5e4741baccdc5f1f52"
  },
  {
    "url": "2019/assets/js/50.c960fae2.js",
    "revision": "fac1cfa9dc1fee499077aff1c86d67b3"
  },
  {
    "url": "2019/assets/js/6.a0190112.js",
    "revision": "46223acb52df3c4124fccc623aa3351f"
  },
  {
    "url": "2019/assets/js/7.ba602f65.js",
    "revision": "7897d4bf96bfc385725dfa67a4b23930"
  },
  {
    "url": "2019/assets/js/8.fc46e36d.js",
    "revision": "b62363723b0caac611efef1db46a2e99"
  },
  {
    "url": "2019/assets/js/9.a7a62f4d.js",
    "revision": "945f4461d94ab4bece6177d8b6043d7e"
  },
  {
    "url": "2019/assets/js/app.700eb1b6.js",
    "revision": "bd0d9e3a6cb368bd42db61d4bafa96a2"
  },
  {
    "url": "2019/contents/apis/index.html",
    "revision": "663d93ca8df4608ea6b3498d39a66385"
  },
  {
    "url": "2019/contents/browser/index.html",
    "revision": "273be8a2f0d455660ccaa1dbfb8d2b14"
  },
  {
    "url": "2019/contents/css/basic.html",
    "revision": "a40ff956aa61d449fd7e7d2219803b20"
  },
  {
    "url": "2019/contents/css/expert.html",
    "revision": "308a271bd0687e1f38262df3fb27def1"
  },
  {
    "url": "2019/contents/css/index.html",
    "revision": "28f8935526926e973337d9473ac1e35a"
  },
  {
    "url": "2019/contents/css/intermediate.html",
    "revision": "9ce02329c02bff3308c5d3aa716876d8"
  },
  {
    "url": "2019/contents/dom/index.html",
    "revision": "ca3a6b9921572a62c2c1465429163ffa"
  },
  {
    "url": "2019/contents/getting-started/index.html",
    "revision": "40ed13d4a65603a1c4a8d1cac407c869"
  },
  {
    "url": "2019/contents/html/index.html",
    "revision": "70e34fba732e299dade64d4ce7a2f2c5"
  },
  {
    "url": "2019/contents/index.html",
    "revision": "dbcae493ebac97188e0b23f7886989bb"
  },
  {
    "url": "2019/contents/javascript/index.html",
    "revision": "d5d5c226a1b2778949f6eed516a982d0"
  },
  {
    "url": "2019/contents/node/index.html",
    "revision": "88d1e364a8d2e38bccbadc6b309fc5f8"
  },
  {
    "url": "2019/contents/overview/index.html",
    "revision": "9b18db490d8535f49aadfd546e45da11"
  },
  {
    "url": "2019/contents/vue/index.html",
    "revision": "54a30088b5736f941c27dc7aad34269d"
  },
  {
    "url": "2019/course/description.html",
    "revision": "4aa696d9f0c3701d56c3369a70d8f4eb"
  },
  {
    "url": "2019/course/schedule.html",
    "revision": "1b4ad72954b73930a4fd4eb53b62a8cd"
  },
  {
    "url": "2019/guide/apis/index.html",
    "revision": "2408239cb823785a341252fc32d7e9ef"
  },
  {
    "url": "2019/guide/browser/index.html",
    "revision": "c1428525a978e32626e0704e3102f407"
  },
  {
    "url": "2019/guide/css/index.html",
    "revision": "691d6a05d8ebb1c25e1e99f11bdd2cdf"
  },
  {
    "url": "2019/guide/dom/index.html",
    "revision": "39bf993e961bbeac57f3588cdf1bd628"
  },
  {
    "url": "2019/guide/getting-started/index.html",
    "revision": "a5dcff9453f878fb604b139dfb2aa5b0"
  },
  {
    "url": "2019/guide/html/index.html",
    "revision": "68a939c70c1243943f19d160a2ff0504"
  },
  {
    "url": "2019/guide/index.html",
    "revision": "baa3a26009c2a68d2c7bc97aaf412f69"
  },
  {
    "url": "2019/guide/javascript/index.html",
    "revision": "f07ce688f43efefbd82ea45b3754f8ef"
  },
  {
    "url": "2019/guide/node/index.html",
    "revision": "c1195de0831ee6b2f47d28ce8a6eb5c8"
  },
  {
    "url": "2019/guide/vue/index.html",
    "revision": "7daa5ef4228910ffe36440927d4bf23a"
  },
  {
    "url": "2019/index.html",
    "revision": "4ac60ebd585a1043d36fed8e59f44abd"
  },
  {
    "url": "2019/projects/index.html",
    "revision": "6e34245b0aeacf81f88ede9fade51a85"
  },
  {
    "url": "2019/projects/project-01.html",
    "revision": "ba9d109c39b2e60da3400ead0e005b04"
  },
  {
    "url": "2019/projects/project-02.html",
    "revision": "0d50dfaeb47a8444a15142260e0a26b8"
  },
  {
    "url": "2019/references/book-02.html",
    "revision": "54f029cdfc62597e39c89d2d3aa5eefb"
  },
  {
    "url": "2019/references/css/css-definitive-guide.html",
    "revision": "63bcdc480eb88a8ab63719aa621753bd"
  },
  {
    "url": "2019/references/general/high-performance-browser-networking.html",
    "revision": "e88e22361dd95762bfa45c6c0194b2a4"
  },
  {
    "url": "2019/references/html/book-03.html",
    "revision": "2234154e715fb7bf8d5acdbc57d2a579"
  },
  {
    "url": "2019/references/html/book-04.html",
    "revision": "27b1e79786c90dda4be65df5bcf60034"
  },
  {
    "url": "2019/references/html/one/book-05.html",
    "revision": "96e6e96742b55af11114c08153a7cfb8"
  },
  {
    "url": "2019/references/index.html",
    "revision": "6e34245b0aeacf81f88ede9fade51a85"
  },
  {
    "url": "2019/slides/lecture-01.html",
    "revision": "708779a9877723442ce690535dc00752"
  },
  {
    "url": "2019/slides/lecture-03.html",
    "revision": "37161ac5bc0de1964d6e3bf771b42b80"
  },
  {
    "url": "2019/slides/lecture-05.html",
    "revision": "94c9c7004ca2572f2a14e33e54a246b7"
  },
  {
    "url": "2019/tasks/task1.html",
    "revision": "ae6da2e2797f94f4c3220047063c85e7"
  },
  {
    "url": "2019/tasks/task2.html",
    "revision": "ec0178a34a2a54c70562651f0c254e60"
  },
  {
    "url": "2019/tasks/task3.html",
    "revision": "3d810785949154098e1dc63b45baaa97"
  },
  {
    "url": "2019/tasks/task4.html",
    "revision": "cdbdda9655d93aca372e7e1657dfec07"
  },
  {
    "url": "2019/tasks/task5.html",
    "revision": "98d497894d15994efee1b0de6a670461"
  },
  {
    "url": "2019/tasks/task6.html",
    "revision": "ae639ee5eb06b88f9b377e6e6b8a253d"
  },
  {
    "url": "404.html",
    "revision": "3e67edbd1da7aae8a21a2976f53f6a0e"
  },
  {
    "url": "assets/css/0.styles.253430d3.css",
    "revision": "a0fc3c1e70938102a5ea1d0ff00a2b1c"
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
    "url": "assets/fonts/ubuntu/stylesheet.css",
    "revision": "9e130232c3eed4ffb05004b8ac07f454"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-bold-webfont.woff",
    "revision": "f58d27507335211a06b8aff41c6784d6"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-bold-webfont.woff2",
    "revision": "71cd5f4011632f570eafeb7ddf14fef8"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-bolditalic-webfont.woff",
    "revision": "ad880aa732bfdb09972da531bb2f3e89"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-bolditalic-webfont.woff2",
    "revision": "ea3c1842c6f8f3559a482ef48b10438d"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-italic-webfont.woff",
    "revision": "8bc01e6423fedd5b6a779fc974ef27d7"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-italic-webfont.woff2",
    "revision": "3610ec965e7134441d29b5be269eaf52"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-light-webfont.woff",
    "revision": "ea1f05b5ac614c8a0e33f91e4fecd77d"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-light-webfont.woff2",
    "revision": "2050f2a86d1b8c69c2fe73ca6f994352"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-lightitalic-webfont.ttf",
    "revision": "d9970d03b181274ccb736ac9e3b7b2ae"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-lightitalic-webfont.woff",
    "revision": "98c016df8679dd36ea96dc3876a22a7c"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-lightitalic-webfont.woff2",
    "revision": "028b80e7431adf86450ca1e3203e3f88"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-medium-webfont.woff",
    "revision": "b62d641e13f2e11e0177ab1de2a9ed6f"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-medium-webfont.woff2",
    "revision": "ce7734ac839e15ff04b274c9270b33d2"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-mediumitalic-webfont.ttf",
    "revision": "d2c6ca5e421f2c85be6db292fe608779"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-mediumitalic-webfont.woff",
    "revision": "3284976e395348776f6fe3f85d1d0565"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-mediumitalic-webfont.woff2",
    "revision": "c3899d3e548327e186a05698f69f65f9"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-regular-webfont.ttf",
    "revision": "ac59aeedd21ef0a2cafbe27a659755d0"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-regular-webfont.woff",
    "revision": "bc8de4e13923745ca2b2bca40c259673"
  },
  {
    "url": "assets/fonts/ubuntu/ubuntu-regular-webfont.woff2",
    "revision": "91eeaad994ca44a5561bbe48bcb1034e"
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
    "url": "assets/js/10.60e937e8.js",
    "revision": "80d347e971b42598a289d8bdf1ffa4bc"
  },
  {
    "url": "assets/js/11.0820d1ed.js",
    "revision": "43baea51254f2b5ba425150d90f374d7"
  },
  {
    "url": "assets/js/12.98bfcacd.js",
    "revision": "d1840b0288f93c144c5b61b3ba79ee9f"
  },
  {
    "url": "assets/js/13.37105e88.js",
    "revision": "b7595b5c7ae208c51b90f5abc5696aaa"
  },
  {
    "url": "assets/js/14.310bf8ab.js",
    "revision": "f35383fd429df209a84738876bf85303"
  },
  {
    "url": "assets/js/15.1d1561ef.js",
    "revision": "71a7d5d5173fca4cae472e6679808e67"
  },
  {
    "url": "assets/js/16.2bedbf9d.js",
    "revision": "0f401b77ad3189858aa11aee8c5ec1ee"
  },
  {
    "url": "assets/js/17.063c81ad.js",
    "revision": "c851630dc2bf380b6088d16493a164e9"
  },
  {
    "url": "assets/js/18.f421e958.js",
    "revision": "c7f14266f78849dd5a522e402f4d0876"
  },
  {
    "url": "assets/js/19.cb4fa015.js",
    "revision": "844f602be923a9a8172497f220279052"
  },
  {
    "url": "assets/js/2.b63f4f4c.js",
    "revision": "1799715c73f705e93b3b653aa839cebd"
  },
  {
    "url": "assets/js/3.7a6eccd1.js",
    "revision": "3b46e1748c03eacc97c048471ffbcf26"
  },
  {
    "url": "assets/js/4.af7acb18.js",
    "revision": "c3e1e16303c7f9910c9cc328d9a70955"
  },
  {
    "url": "assets/js/5.8a2c5080.js",
    "revision": "958109669c58bf5e4741baccdc5f1f52"
  },
  {
    "url": "assets/js/6.5d570bcd.js",
    "revision": "46223acb52df3c4124fccc623aa3351f"
  },
  {
    "url": "assets/js/7.23ae45c5.js",
    "revision": "8fc662278d89156777fc1cb5b179804a"
  },
  {
    "url": "assets/js/8.32acb089.js",
    "revision": "97855c15c1def52728c4d128dfec7002"
  },
  {
    "url": "assets/js/9.6b505e26.js",
    "revision": "c8e41656d380e82a566a32c79c6ffdec"
  },
  {
    "url": "assets/js/app.31226351.js",
    "revision": "9c9e2b4e9db2d670eaea4782b712f183"
  },
  {
    "url": "course/description.html",
    "revision": "363d1a9e303475856c9c8e1d38fed3e8"
  },
  {
    "url": "course/schedule.html",
    "revision": "4158bce6ab9bd9fb6eaadb12a74d8eb3"
  },
  {
    "url": "index.html",
    "revision": "596a66e07b517b858cdbe48cc734d3ca"
  },
  {
    "url": "tasks/task1.2019.html",
    "revision": "96ef0251e27c8e3eb579cfca0de3450f"
  },
  {
    "url": "tasks/task1.html",
    "revision": "d49c826d7131765935ce9aefde33883d"
  },
  {
    "url": "tasks/task2.2019.html",
    "revision": "ecc26294c18d0a236f2858235a9cc334"
  },
  {
    "url": "tasks/task2.html",
    "revision": "62fd8fb01c9dcc07a1736a2ad3d77f15"
  },
  {
    "url": "tasks/task3.2019.html",
    "revision": "ace8cc9e7812373b329ed3388e5e4c3e"
  },
  {
    "url": "tasks/task3.html",
    "revision": "7d72ce1e3fb088dbb97fd49d4baf379e"
  },
  {
    "url": "tasks/task4.2019.html",
    "revision": "492cb50d2238089075715d35f00c0e8f"
  },
  {
    "url": "tasks/task4.html",
    "revision": "fc66eb0b0340d1f4a1c13ff69d4d045b"
  },
  {
    "url": "tasks/task5.html",
    "revision": "35041b8173ffa31eb3dc4013592b3319"
  },
  {
    "url": "tasks/task6.html",
    "revision": "f8e7c38f26323c1848c6508387a34dcb"
  }
].concat(self.__precacheManifest || []);
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
