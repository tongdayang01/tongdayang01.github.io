var CACHE = 'fullsite-v2';
var ORIGIN = 'https://tongdayang01.top';

self.addEventListener('install', e => self.skipWaiting());

self.addEventListener('fetch', e => {
  var url = new URL(e.request.url);
  if (url.hostname === 'tongdayang01.github.io' || url.origin === ORIGIN) {
    e.respondWith(
      fetch(e.request).then(res => {
        var clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match(e.request))
    );
  }
});
