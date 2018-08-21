import {register} from 'register-service-worker'

const file = process.env.NODE_ENV === 'production' ? `${process.env.BASE_URL}sw.js` : './sw.ts'

// TODO: dev register no work, the path is wrong
register(file, {
  ready() {
    console.log(
      'App is being served from cache by a service worker.\n' +
      'For more details, visit https://goo.gl/AFskqB',
    )
  },
  cached() {
    console.log('Content has been cached for offline use.')
  },
  updated() {
    console.log('New content is available; please refresh.')
  },
  offline() {
    console.log('No internet connection found. App is running in offline mode.')
  },
  error(error) {
    console.error('Error during service worker registration:', error)
  },
})
