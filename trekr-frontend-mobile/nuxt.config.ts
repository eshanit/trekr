// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@vee-validate/nuxt',
    '@pinia/nuxt'
  ],
  css:[
    '@ionic/core/css/core.css',
    '@ionic/core/css/normalize.css',
    '@ionic/core/css/structure.css',
    '@ionic/core/css/typography.css',
    '@ionic/core/css/ionic.bundle.css'
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
