importScripts('/js/gpu.min.js')

workbox.core.setCacheNameDetails({prefix: "pwa-game"});
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

const baseUrl = '/api/' // same in accesslayer.ts

const gameDealer = {
  createRole() {
    return 'haha1'
  },
}

const apiPool = Object.keys(gameDealer)

self.addEventListener('fetch', (e) => {
  console.log('request event is: ', e)
  const {request} = e
  e.respondWith(
    caches.match(request).then((cacheRes) => {
      // cache
      if (cacheRes) return cacheRes

      // game
      const {url} = request
      let data
      for (let i = 0, len = apiPool.length; i < len; i += 1) {
        const t = apiPool[i]
        if (url.match(baseUrl + t)) {
          const data = gameDealer[t]()
          break
        }
      }
      if (data) return new Response(data)

      // server
      const serverReq = request.clone()
      return fetch(serverReq)
    })
  )
})