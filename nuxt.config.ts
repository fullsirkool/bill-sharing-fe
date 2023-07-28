// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    "nuxt-vue3-google-signin",
    "nuxt-icon",
    "@nuxthq/ui",
    "@nuxtjs/tailwindcss",
  ],
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  runtimeConfig: {
    public: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_INFOR_URL: process.env.GOOGLE_INFOR_URL,
      BASE_URL: process.env.BASE_URL,
    },
  },
});
