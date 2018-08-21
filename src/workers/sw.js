importScripts('/js/gpu.min.js');

const gameDealer = {
  createRole(body) {
    return {val: body.name + '-done'};
  },
}

workbox.core.setCacheNameDetails({prefix: "pwa-game"});
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  cleanUrls: false, // dont add .html to end to support "clean" URLs
});
workbox.routing.registerRoute(/\/api/, ({url, event}) => {
  const dealerName = url.pathname.split('/').pop();
  console.log('dealerName', dealerName)
  if (gameDealer[dealerName]) {
    event.request.json().then((body) => {
      console.log('body', body)
      const res = gameDealer[dealerName](body);
      return new Response(JSON.stringify(res));
    })
  }
}, 'POST');
