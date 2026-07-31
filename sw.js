var CACHE='award-v2';
var MIRROR='https://present-workout-awards-sections.trycloudflare.com';
var MIRROR_HOST=new URL(MIRROR).hostname;
self.addEventListener('install',function(e){e.waitUntil(self.skipWaiting())});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){
  var u=new URL(e.request.url);
  if(u.hostname==='tongdayang01.github.io'||u.hostname==='tongdayang01-backup.github.io'){
    e.respondWith(caches.open(CACHE).then(function(c){
      return c.match(e.request).then(function(r){
        var p=fetch(e.request).then(function(n){c.put(e.request,n.clone());return n});
        return r||p;
      });
    }));
  }else if(u.hostname===MIRROR_HOST){
    e.respondWith(fetch(e.request).then(function(r){
      var cp=r.clone();
      caches.open(CACHE).then(function(c){c.put(e.request,cp)});
      return r;
    }).catch(function(){return caches.match(e.request)}));
  }
});
