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
    "url": "404.html",
    "revision": "00d6d403c21682c3fd5eef6626b48ace"
  },
  {
    "url": "api/cli.html",
    "revision": "78a20b33fe431aa34a77d1428575ac6f"
  },
  {
    "url": "api/node.html",
    "revision": "950f2ae39fae9d97cba850cf468aafd3"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.690ccfb7.css",
    "revision": "2b7e784477956c7220e1c931109bcf4d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3c9ae0cc.js",
    "revision": "8d65746589a2471d6686372406cdbcb1"
  },
  {
    "url": "assets/js/11.c0155f76.js",
    "revision": "0c7765c5142e5105111a635bc90ad9ee"
  },
  {
    "url": "assets/js/12.2a52710f.js",
    "revision": "eac91c5e7876a73872cf899b786d2aed"
  },
  {
    "url": "assets/js/13.19cc3c9c.js",
    "revision": "3cc52b346329c90a3d6cf4279d0fc6e3"
  },
  {
    "url": "assets/js/14.41f42a6b.js",
    "revision": "1e1ddf2d426dddc393bcf549e167ddd6"
  },
  {
    "url": "assets/js/15.ba156484.js",
    "revision": "3bb825f3d94dbf293aaeb140cdf83eb7"
  },
  {
    "url": "assets/js/16.7f5df162.js",
    "revision": "03c80024474d778864a3ad91fab67060"
  },
  {
    "url": "assets/js/17.c793dae0.js",
    "revision": "f3603fa739df17ae5bf10b0a6ae5b49c"
  },
  {
    "url": "assets/js/18.de131f15.js",
    "revision": "f7c8e478f53caf8457ff20c33180ace2"
  },
  {
    "url": "assets/js/19.0047dab1.js",
    "revision": "d55c60523d0959a2e976d631ea5aa3dd"
  },
  {
    "url": "assets/js/20.5c008366.js",
    "revision": "6b9c3ae78415843db707c641ee61fbc7"
  },
  {
    "url": "assets/js/21.d0e743e0.js",
    "revision": "cecaa6bd6566e197bf05857a1cfa0031"
  },
  {
    "url": "assets/js/22.e67cbc22.js",
    "revision": "4ae437b17fbb0e3878115b0f30146098"
  },
  {
    "url": "assets/js/23.36f8453b.js",
    "revision": "9d8818667a8081d863479fc80d9a111b"
  },
  {
    "url": "assets/js/24.41918e6a.js",
    "revision": "005480a5ad313184262bbfa76867fb46"
  },
  {
    "url": "assets/js/25.dce33174.js",
    "revision": "6109d41bdbd3a2b077843494572809c3"
  },
  {
    "url": "assets/js/26.3210d338.js",
    "revision": "30db66275f323dd91cedde80f85623bb"
  },
  {
    "url": "assets/js/27.6e62dcf1.js",
    "revision": "51a1361f273e6f5564bde5386c1d9446"
  },
  {
    "url": "assets/js/28.db428dc6.js",
    "revision": "b6d9fba7e32012e76e6cbdc13a9026cd"
  },
  {
    "url": "assets/js/29.a9c58cc9.js",
    "revision": "bdd970cfd4dd3e9e3362ca32ae8a17a5"
  },
  {
    "url": "assets/js/30.4afc83a3.js",
    "revision": "d29c910cc4b3b8a90129ff8c3089e025"
  },
  {
    "url": "assets/js/31.34e66a8f.js",
    "revision": "66836aaab86083580384257d63eeacb9"
  },
  {
    "url": "assets/js/32.3e148db8.js",
    "revision": "b0f6ab59dccee1c5912da8f5705b5317"
  },
  {
    "url": "assets/js/33.c6be1f2a.js",
    "revision": "7c35908b0f77d4371ea207b41c01af97"
  },
  {
    "url": "assets/js/34.0c602b3f.js",
    "revision": "ef8be4f6a489a3d75da82537639c390f"
  },
  {
    "url": "assets/js/35.3c14da7d.js",
    "revision": "fc0fe3973b56eed33ce44eb1458c04ce"
  },
  {
    "url": "assets/js/36.2a684a77.js",
    "revision": "8a7964e1d178388b79f041db5eb18b16"
  },
  {
    "url": "assets/js/37.7ad1d729.js",
    "revision": "a9122c57adc66ff128ebea59226029b5"
  },
  {
    "url": "assets/js/38.256a843c.js",
    "revision": "207aa2c07f2c4bee5718802ae73ea781"
  },
  {
    "url": "assets/js/39.1e0f5456.js",
    "revision": "df3a6e43503831d8e51a98beb03cae2d"
  },
  {
    "url": "assets/js/4.245737f7.js",
    "revision": "e83951dca58852239967c73305548902"
  },
  {
    "url": "assets/js/40.337ff19b.js",
    "revision": "0d3063b3ec58ba434ed04f82fb4e5e4c"
  },
  {
    "url": "assets/js/41.4808081a.js",
    "revision": "bd89e28b3270c45376ced6e83afa5523"
  },
  {
    "url": "assets/js/42.8944caf0.js",
    "revision": "87d566fdebb6f3a4b7eae6f86a61f074"
  },
  {
    "url": "assets/js/43.51fa311c.js",
    "revision": "480612d0a81293f5762efd3db9ce6dd1"
  },
  {
    "url": "assets/js/44.15046c18.js",
    "revision": "872f92adb8f71ea0618f7b832d3a122b"
  },
  {
    "url": "assets/js/45.9b9512de.js",
    "revision": "48161ca3e28190b1337144e91dd03909"
  },
  {
    "url": "assets/js/46.8f945497.js",
    "revision": "c9bbf14d1b5cb036f3194260958ef010"
  },
  {
    "url": "assets/js/47.aa884cb2.js",
    "revision": "202b0aebd328d4c8802c8d415bc0d39f"
  },
  {
    "url": "assets/js/48.9ab5a4e7.js",
    "revision": "f31bbc1a2f7d305152c5a997718e3365"
  },
  {
    "url": "assets/js/49.9990c281.js",
    "revision": "7b2bef2c1ce11619ed6a3c085d046c0f"
  },
  {
    "url": "assets/js/5.77e90535.js",
    "revision": "1751566959a28dd40dd4a6c72b6ecdab"
  },
  {
    "url": "assets/js/50.31f703ff.js",
    "revision": "f3b8c4962d26396d0728c18ad3d8da19"
  },
  {
    "url": "assets/js/51.b150742e.js",
    "revision": "e9d8bc234e4eb5afdbbbd144a6512c22"
  },
  {
    "url": "assets/js/52.89300ae3.js",
    "revision": "541067511526fef2dc6aa544a6720bd3"
  },
  {
    "url": "assets/js/53.29a4127f.js",
    "revision": "c1d428f98bfa4ade252d86e170ca2f77"
  },
  {
    "url": "assets/js/54.7ec4f1e6.js",
    "revision": "26e4d42facf385ada588fbde29ac6fee"
  },
  {
    "url": "assets/js/55.7c7d8ac9.js",
    "revision": "6898b8dc685bb6c01c6a296600a00bce"
  },
  {
    "url": "assets/js/56.68e458b0.js",
    "revision": "9a19598d39bc472dc06ae35734159a5a"
  },
  {
    "url": "assets/js/57.7a674986.js",
    "revision": "f19800a0dafddb1c68b3ab49fa798261"
  },
  {
    "url": "assets/js/58.89c93b7d.js",
    "revision": "8af162bd33b3646f1bb2097d180cb1e3"
  },
  {
    "url": "assets/js/6.7d02eae5.js",
    "revision": "0d1cccfa4722080d8719003f9dd8609d"
  },
  {
    "url": "assets/js/7.69e57e9a.js",
    "revision": "b146951ae48f50b2e1c0607cddfe5abb"
  },
  {
    "url": "assets/js/8.1471c2dc.js",
    "revision": "b844961ea8f5cb6762e010aabcd14c76"
  },
  {
    "url": "assets/js/9.da15bcad.js",
    "revision": "4c2dc10a032ebce2b791e7bda574a7ec"
  },
  {
    "url": "assets/js/app.dd1df0de.js",
    "revision": "81b06bbb159ca4ca5911522c85c31aed"
  },
  {
    "url": "assets/js/vendors~flowchart.dcb867d0.js",
    "revision": "b8d860a47d22985d2f13aa5f85b6dc27"
  },
  {
    "url": "assets/js/vendors~notification.4930e3d3.js",
    "revision": "b61e21221e7236f23581446aaa5c2b13"
  },
  {
    "url": "config/index.html",
    "revision": "c8e2b72ed9c40e17b6dc38667b74ebad"
  },
  {
    "url": "faq/index.html",
    "revision": "4584f1694a7f07c068e6974beb82329e"
  },
  {
    "url": "guide/assets.html",
    "revision": "8408b62b5adf9142feaa801fa9e5171b"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "16b405b4d6ab020e01abe42116332d28"
  },
  {
    "url": "guide/deploy.html",
    "revision": "c32a43bca49a541ac626f2e5ccbb1dda"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "66313bcb6d0d0964fd60e049d82feaa8"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "a840b9986b7e045412d9c52a0a259876"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "840e05493f73ed90297f64bddae95579"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "934d3061c0dc428d8daa8beb98d57d9b"
  },
  {
    "url": "guide/i18n.html",
    "revision": "0cf14cc0be0cbe9392f35e10da584ea3"
  },
  {
    "url": "guide/index.html",
    "revision": "ac4e4aa8f23a9f9afe3f2d559cd5aee1"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "31f16cf18422948897d1906ed745ced0"
  },
  {
    "url": "guide/markdown.html",
    "revision": "de6e6fee8242bb220c231bcfa03100fe"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "a4318005def61166bc752875fba606d0"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "3181a0fa01a814be7a8f2802c6790f7b"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "df1e124830e99d373ffbc37b895555d1"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "f755df1b0315fa583afa09b2034e4f3d"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "ff484c5c61d822a8aa4bc48ea8ca70bd"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "58e149b74cc721088e8c532a1185edf7"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "06aa146f23399b8ff023ba346f36a650"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "d482beb01974f71410458f69655f88ea"
  },
  {
    "url": "plugin/index.html",
    "revision": "ca1b25b6f324fc159d718edd30ff34e7"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "ed76208596484ae9faeb48b5eb0bbeac"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "1e520d04253e61f96e003f6cb0515f9c"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "7a080f462e43e79b0068c8c4767efb8f"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "0fe7842698d177c7225eff74e1139515"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "fd27f1ee03186fece5cbe35239f455bc"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "19f29b135c5db509e628810191dbc4ab"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "f65295946ab13e9e0e97a55b17ff9662"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "86da38cac383f6b4ac5c626b05311abf"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "072c5f93f60a284eae72f89d5fd31c0b"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "6b7d8db3ffd4ceb76d5e08c93262e5b3"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "c0e9ef706d07c5b521b47b5c02f347cf"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "70a701a14a7345391a0951c1bbe02d7a"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "5401b0ce997df5a46e9d46b330a03548"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "e92f844c3bbbb642ed67d09080a3ffe6"
  },
  {
    "url": "theme/index.html",
    "revision": "542f8c8ae8a359d8a1ed5d88856afce6"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "c1bebac4b1870ba97eb1df591497ccd0"
  },
  {
    "url": "theme/option-api.html",
    "revision": "22a92f4ca47d833d4907caa2ddac1513"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "4f2686a3bc5a625e5c1fe24b79b7e73a"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "3ab5d575ea1dbb89b58640a0c960a321"
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
