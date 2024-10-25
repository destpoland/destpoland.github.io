const cacheName = 'cache-2024.05.26-01';

self.addEventListener('install', function (event) {
    console.log('Service worker installing...');
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(handleFetch(event));
});

async function handleFetch(event) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(event.request);
    const networkResponsePromise = fetch(event.request);

    // Update the cache with the network response
    event.waitUntil((async () => {
        try {
            const networkResponse = await networkResponsePromise;
            await cache.put(event.request, networkResponse.clone());
        } catch (error) {
            console.error('Fetching failed:', error);
        }
    })());

    // Return cached response if available, otherwise fetch from network
    return cachedResponse || networkResponsePromise;
}
