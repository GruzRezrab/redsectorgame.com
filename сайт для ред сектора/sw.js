// sw.js
self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // Просто пропускаем запросы дальше
  event.respondWith(fetch(event.request));
});