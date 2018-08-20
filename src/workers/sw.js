importScripts('https://cdnjs.cloudflare.com/ajax/libs/gpu.js/1.6.0/gpu.min.js')

self.addEventListener('fetch', (e) => {
  console.log('request event is: ', e)
  const body = 'haha'
  const init = {'status': 200}
  const response = new Response(body, init)
  e.respondWith(response)
})