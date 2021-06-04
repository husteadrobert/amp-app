export default {
  head: {
    title: 'Amplitude',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  components: true,

  buildModules: [
    '@nuxtjs/firebase',
  ],

  firebase: {
    lazy: false,
    config: {
      apiKey: 'AIzaSyAz0ACO_F_O8X78zQoxYqyESHhWbYpMDBY',
      authDomain: 'amplify-a4c63.firebaseapp.com',
      databaseURL: 'https://amplify-a4c63-default-rtdb.firebaseio.com/',
      projectId: 'amplify-a4c63',
      storageBucket: 'amplify-a4c63.appspot.com',
      messagingSenderId: '850001286017',
      appId: '1:850001286017:web:6d4266c863edb759234e80',
      measurementId: 'G-CLZ080E93S',
    },
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'authentication/onAuthStateChanged',
        },
        ssr: true,
        // emulatorPort: process.env.NODE_ENV === 'development' ? 9099 : undefined,
        disableEmulatorWarnings: false,
      },
    },
  },

  modules: ['@nuxtjs/pwa', '@nuxtjs/axios'],

  build: {},

  /*
   ** Nuxt.js Middleware
   */
  router: {
    middleware: [],
  },

  pwa: {
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    },
  },
}
