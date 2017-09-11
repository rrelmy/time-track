/**
 * @author Rémy Böhler
 */
const CACHE_NAME = 'offline-cache-v3'
const urlsToCache = serviceWorkerOption.assets
urlsToCache.push('/')

self.addEventListener('install', function (event) {
    // Perform install steps
    console.info("Install")
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache)
            })
    );
});

self.addEventListener('fetch', function (event) {
    console.info("Fetcher")

    // Network first
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request)
        })
    );

    // Cache first
    /*event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                    return response || fetch(event.request);
                }
            )
    );*/
});

self.addEventListener('activate', function (event) {
    clients.claim()
    console.info('Now ready to handle fetches!')
})
