importScripts('https://cdnjs.cloudflare.com/ajax/libs/gpu.js/1.6.0/gpu.min.js')

self.addEventListener('fetch', (e) => {
  console.log('request event is: ', e)
  // TODO: maybe should use response
  e.respondWith(new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000)
  }))
})