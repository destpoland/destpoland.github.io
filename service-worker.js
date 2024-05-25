self.addEventListener('install', function () {
  console.log('Service worker installing...');
});

const cacheName='cache-2024.05.26-01';

self.addEventListener('fetch', (event) => {
  event.respondWith(async function() {

    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(event.request);
    const networkResponsePromise = fetch(event.request);

    event.waitUntil(async function() {
      const networkResponse = await networkResponsePromise;
      await cache.put(event.request, networkResponse.clone());
    }());

    // Returned the cached response if we have one, otherwise return the network response.
    return cachedResponse || networkResponsePromise;
  }());
});