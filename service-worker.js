self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('PWA Example').then((cache) => cache.add('https://RJJdeVries.github.io/index.html'))
  );
});

self.addEventListener('fetch',(event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => (response ?? fetch(event.request)))
  );
});
