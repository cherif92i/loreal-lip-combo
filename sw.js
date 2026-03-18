const CACHE_NAME = 'ysl-lovenude-v5';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './fonts/BlackDiamond.ttf',
  './fonts/Singulier-Regular.otf',
  './fonts/Singulier-Bold.otf',
  './fonts/Singulier-Light.otf',
  './img/logo-white.png',
  './img/ysl-beaute-white.png',
  './img/bg/visuel-dua-lovenude.jpg',
  './img/bg/visuel-dua-lovenude-2.jpg',
  './img/bg/visuel-lovenude.jpg',
  './img/bg/visuel-lovenude-produits.jpg',
  './img/bg/banner.jpg',
  './img/models/06-104.jpg',
  './img/models/44-44.jpg',
  './img/models/02-108.jpg',
  './img/models/05-108.jpg',
  './img/models/04-106.jpg',
  './img/models/03-105.jpg',
  './img/models/01-102.jpg',
  './img/models/44-104.jpg',
  './img/models/04-105.jpg',
  './img/models/07-1.jpg',
  './img/models/09-107.jpg',
  './img/models/08-107.jpg',
  './img/models/44-106.jpg',
  './img/models/09-110.jpg',
  './img/lipstick/01.jpg',
  './img/lipstick/02.jpg',
  './img/lipstick/03.jpg',
  './img/lipstick/04.jpg',
  './img/lipstick/05.jpg',
  './img/lipstick/06.jpg',
  './img/lipstick/07.jpg',
  './img/lipstick/08.jpg',
  './img/lipstick/09.jpg',
  './img/lipstick/44.jpg',
  './img/liner/01.jpg',
  './img/liner/44.jpg',
  './img/liner/102.jpg',
  './img/liner/103.jpg',
  './img/liner/104.jpg',
  './img/liner/105.jpg',
  './img/liner/106.jpg',
  './img/liner/107.jpg',
  './img/liner/108.jpg',
  './img/liner/109.jpg',
  './img/liner/110.jpg',
  './img/packshot/lipstick-01.jpg',
  './img/packshot/lipstick-02.jpg',
  './img/packshot/lipstick-04.jpg',
  './img/packshot/lipstick-05.jpg',
  './img/packshot/lipstick-06.jpg',
  './img/packshot/lipstick-07.jpg',
  './img/packshot/lipstick-08.jpg',
  './img/packshot/lipstick-09.jpg',
  './img/packshot/lipstick-44.jpg',
  './img/texture-lip/01.jpg',
  './img/texture-lip/02.jpg',
  './img/texture-lip/03.jpg',
  './img/texture-lip/04.jpg',
  './img/texture-lip/05.jpg',
  './img/texture-lip/06.jpg',
  './img/texture-lip/07.jpg',
  './img/texture-lip/08.jpg',
  './img/texture-lip/09.jpg',
  './img/texture-lip/44.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
