const CACHE_NAME = 'site-v2';
const MIRROR_ORIGIN = 'https://present-workout-awards-sections.trycloudflare.com';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.hostname === 'tongdayang01.github.io') {
    event.respondWith(
      fetch(event.request).then(res => {
        const cloned = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
        return res;
      }).catch(() => {
        return caches.match(event.request);
      })
    );
  }
  else if (url.origin === MIRROR_ORIGIN) {
    event.respondWith(
      fetch(event.request).then(res => {
        const cloned = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
        return res;
      }).catch(() => {
        return caches.match(event.request);
      })
    );
  }
});
