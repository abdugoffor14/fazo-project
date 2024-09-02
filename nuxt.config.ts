// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome'],
  devtools: { enabled: true },
  plugins: [{ src: './plugins/fontawesome.js', mode: 'client' }],
  css: [
    './assets/scss/main.scss'
  ]
})