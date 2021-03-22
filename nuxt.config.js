export default {
  ssr: false,
  debug: true,
  // Add env variables, https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
  publicRuntimeConfig: {
    BACKEND_ORIGIN: process.env.BACKEND_ORIGIN,
    URL: process.env.URL,
    DOMEN_URL: process.env.DOMEN_URL,
  },
  privateRuntimeConfig: {
    OAUTH_V2_CLIENT_ID: process.env.OAUTH_V2_CLIENT_ID,
    OAUTH_V2_CLIENT_SECRET: process.env.OAUTH_V2_CLIENT_SECRET,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'GAS-MAP',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'google-site-verification', content: '4Eye43HfsdgKVTWYDc2T_2r-gJFoq_mCMJCvA6ZJAv8' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@assets/css/global.css',
    '@/node_modules/vue-js-modal/dist/styles.css',
  ],
  loadingIndicator: {
    name: 'circle',
    color: '#0336FF',
    background: 'white',
  },

  // Add fornts (https://www.npmjs.com/package/nuxt-webfontloader)
  webfontloader: {
    google: {
      families: ['Exo 2:300,400,500,600,700'],
    },
  },

  // Remove unsed css in the production build (process.env.NODE_ENV === 'production'),
  purgeCSS: {
    mode: 'postcss',
    enabled: false,
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/modal.js',
    '~/plugins/vue-currency-input.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'ua',
          name: 'Українська',
          file: 'ua.json',
          iso: 'uk-UA',
        },
        {
          code: 'en',
          name: 'English',
          file: 'en.json',
          iso: 'en-EN',
        },
      ],
      seo: true,
      defaultLocale: 'ua',
      detectBrowserLanguage: false,
      lazy: true,
      langDir: 'assets/locales/',
      vueI18n: {
        fallbackLocale: 'en',
      },
    }],
    'nuxt-purgecss',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-nested': {},
        'postcss-import': {},
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: false,
        },
      },
    },
  },
}
