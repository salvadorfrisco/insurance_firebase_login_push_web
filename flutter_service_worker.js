'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d563bd66a9ed84a7ee0c16e903f436d2",
".git/config": "8323bd404e35642ce05a425be4195e2b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ad936e40896d4f054470ceb3ea2a6ff8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d7a5fd129d548f0bd2237d6581168fd4",
".git/logs/refs/heads/main": "4a86b93d3cbc72d077a055459fb8c9f0",
".git/logs/refs/remotes/origin/main": "edf9ebad38da3f43180c2cbf27399eba",
".git/objects/02/ecbf08846b6314082c1c18dd58a659975f85fd": "6b6c5aaf6ae6ebdd31b98bca6ad9aeca",
".git/objects/09/97533572beee33fdbc50528fc117fdfa7c6d2d": "199e074e266388e29f1fdc9a5055b5ad",
".git/objects/10/0db845a43a7b597e21a0226241099dee83dece": "02ca3afb1b6d132c01ae2687fc64ba9a",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/20/68f09ac4449893039d12bd6c7e4ef43f4f52f6": "b1d252601e523ed648405ee29af6d42b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/14a2f636adaaf6fc0ad749a9238bf06c589193": "486110edaf1e536c8dbeef3e091f9f54",
".git/objects/2d/1d2c8b20861dcf980bd445495eb6497d8c273e": "ad1ec87a66364b4f97c867f3ffe29cce",
".git/objects/36/03e42276c45db53442b1a3108defd004152b79": "0102207312aef4b9ee600619c92f2244",
".git/objects/40/5789374f9ad5917e0bdeafe22620553c8d7316": "517b71c6b43fe1e0e836ae7a9e486768",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/19a0f15c3e24c7c81624c01179de327b0c57cd": "9e13de78f3249a80dc87ead41f9baf4c",
".git/objects/4d/a8512733d91e0e153f0adac36c983920c7ce9a": "b2cc5fac99292ff3e481c836c7ce0691",
".git/objects/4e/6f637684dcaa7a62f27c6353f819d0a6a45125": "20f9a4e9f93e721259bef6316a6bf2a5",
".git/objects/51/0994dc809a151e9e4b8f195cf86f9c8b8835ff": "42718a38d70078684fc37053f38795c9",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/564709ef08d16d4a820ebc6769150197cc54f9": "2193d5acc93af7004dc8342fdbf1e624",
".git/objects/6e/6ae3a02d4a2e08692cfbafc9d739de50ccc8aa": "4c90f7cec21ae10d2d2e18fc38100123",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/0c38ef27fc83e4533ff6a7b2b707509abb6c48": "20f7ce45b87e12c25df23683d47ae2e8",
".git/objects/77/28b9d8377ff26e95b477c7ccaebe57aa00f4ae": "d6186d02c0bf15134eff349a0d71fd54",
".git/objects/7b/b2e9f39908c4e9f0caa5cd773fa1c19fb4c3e9": "389125d8dee3ebeee71b1c43e5b1f7bf",
".git/objects/7f/7f6f1fdfee3430e97b6a26bb63d50e3ba5d7cb": "ef73ddb2d14dfa4b831375de7ba08eee",
".git/objects/81/bf8be372730dd4c02f032e7c5ffa46a44f7ffb": "feb7e800ea463c40f17b12c0abeb6a45",
".git/objects/86/2573180ac0ad3b5759c5c0a541f6dc3ea51238": "cc72a8e6982eaf15fdee9244f8d1c8f9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/edf868ad88ddf863911ba8d6478bfa6f6988bc": "c11a08cc30aaecccae766d6bcc76f1c8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/e92c6daa4ef72df8d9279bd9b21789cd9836c2": "b54b0dd57ce14e412d45a9d1629a5afc",
".git/objects/93/3c7804ef587263087fb0e7272a4fcc998fa06c": "51c8d95cdee4ce7750a59e1ccb50f057",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a4/b39db88b775923710e9776e55ab34a948cb0ce": "6801bf3d428e70196e54a3890533ea40",
".git/objects/ab/e739762df52cd590f06952b65ee16d314f9163": "825a89a998816692c019d4720a3f7480",
".git/objects/ac/074f5844b79c4b0dcd5108a58efcd9dcd5a268": "67cc14b2a853c912f96f4d4b00f59e2c",
".git/objects/af/c8ef91c0b7ddd89c53141df10ba6f1834c139e": "3969e37d88265ab1a35daac98d982b0e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bd/d734d1602a4664125a3fb24aed45f3c0d025ff": "5d0b0486706910a3353a476ffc1ce023",
".git/objects/c7/60eca4fa4441f74feebdd91c2460aa78b318ac": "f898f9c527d5be7d9965b3f1a03f210a",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ce/6b52d2171a28a30ddee0f5084e5c4f4776235c": "51ca5385909f06b33eb0e3664a121cfc",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3b7b4ab23f3af834d0cbdfb83a7d2eed4814e6": "91e30848836796e2c083c23dd9526190",
".git/objects/db/fd72a0319be9ace2d25e252659b4cc4899fbd5": "248ade3ccdcd9870c96a21b08bf9e90f",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e5/04dd388c35d3e446756de56e7c10b1caa0a89f": "1282d901c7fb8682f62a1cb683f7d5bb",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/580421e35e8e0fb29359fa57e0cebdac112543": "b3d95196988f6584d2388e697d5c6452",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c0da10bcaaa4dcd018c4965f9b73f12ded9970": "8278912fd98491442704bec962bbd963",
".git/objects/f1/0e647bfaeb4db04b118d7203e54c47d49abdec": "141659c67e021654d4b1fb9f449dca18",
".git/objects/f1/c8a9736fe911639d46e9a77348873dc2affea2": "374fefa59dafbd8436a9c5d94509b037",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/7776dae44e5c015b7b34cb7c99c2cfd30cda53": "117ac3fafbdb15d47a967187ecbe0fcc",
".git/refs/heads/main": "019d7e498fa8212d1f18fac78499dcb9",
".git/refs/remotes/origin/main": "019d7e498fa8212d1f18fac78499dcb9",
"assets/AssetManifest.bin": "18be4395987573139bcc466c10f55ed9",
"assets/AssetManifest.bin.json": "5c72ff8b4ae7b62daed20ddf94fc0b89",
"assets/AssetManifest.json": "4599a408fb16eaa20d826b2c73c0a57b",
"assets/assets/images/logo_sf.png": "4cc01f36da9d46c787dfb0ad29e8fdfd",
"assets/assets/images/logo_sf_branco_transp.png": "2b37245d790acc9d963e6aeccff5de87",
"assets/assets/images/zezinho.png": "6058e92e865f7cae3e8d2792fdb827b6",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0295f7b4324ef968607fd45e3281c3ac",
"assets/NOTICES": "925c75bad92a6a83821b285c7bf51e45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "8bfe3262ab644de77a56c2b4cc29e741",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "43392d584217583a929735ec35c14f8e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-config.template.js": "01f3b693bd3e1252785e0f0ef8943b0e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "312437135344b17f77f6f144f1f536b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "deee0ed3b86c63afe33c79655c711ced",
"/": "deee0ed3b86c63afe33c79655c711ced",
"main.dart.js": "23277cc45572ed10bb9b95d49c1ed811",
"manifest.json": "c63566dfa1173e4c62f50aa31c3a4cdc",
"version.json": "1b75b7f8dbae5e6fefc65ce08abd2037"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
