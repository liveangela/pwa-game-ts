// TODO: add gameEngine defination with importScripts()

workbox.core.setCacheNameDetails({prefix: "pwa-game"});
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  cleanUrls: false, // dont add .html to end to support "clean" URLs
});
workbox.routing.registerRoute(/\/api/, ({url, event}) => {
  const funcName = url.pathname.split('/').pop();
  if (gameEngine[funcName]) {
    event.respondWith(async function() {
      const body = await event.request.json();
      const res = await gameEngine[funcName](body);
      return new Response(JSON.stringify(res));
    }())
  }
}, 'POST');
workbox.clientsClaim();
workbox.skipWaiting();
