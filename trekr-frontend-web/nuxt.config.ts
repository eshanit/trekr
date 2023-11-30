// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    //...
    '@vee-validate/nuxt',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@sidebase/nuxt-session',
    '@nuxt/image',
    'nuxt-lodash'
  ],
  runtimeConfig: {
      // Do not put secret information here
      public: {
         // Server Url
        nestServerUrl: process.env.SERVER_URL,
      },
  },
  ssr: false
})
