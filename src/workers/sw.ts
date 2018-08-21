// for development only, while the sw.js for prod
// TODO: Error "Cannot find name 'FetchEvent'" in @types/workbox-sw/index.d.ts
import workbox from 'workbox-sw'
import gameEngine from '../games'

workbox.routing.registerRoute(/\/api/, ({url, event}): Promise<Response> => {
  const dealerName = url.pathname.split('/').pop() || ''
  if (gameEngine.hasOwnProperty(dealerName)) {
    event.respondWith(async function() {
      const body = event.request.json()
      const res = gameEngine[dealerName](body)
      return new Response(JSON.stringify(res))
    }())
  }
  return new Promise((resolve, reject) => {})
}, 'POST')
workbox.clientsClaim()
workbox.skipWaiting()
