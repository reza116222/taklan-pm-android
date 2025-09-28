const CACHE_NAME = 'pm-taklan-full-v1';
const urlsToCache = ['/index.html','/maintenance.html','/devices.html','/emergency.html','/reports.html','/iso.html','/analytics.html','/settings.html','/assets/logo.png','/assets/styles.css'];

self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))); });
self.addEventListener('fetch', event => { event.respondWith(caches.match(event.request).then(response => response || fetch(event.request))); });
