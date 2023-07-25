// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  css: ["@/assets/css/style.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-vue3-google-signin"],
  googleSignIn: {
    clientId: "30963455517-4a4uerkdl20afjfsda9vjq9jnl726dsv.apps.googleusercontent.com",
  },
  runtimeConfig: {
    public: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_INFOR_URL: process.env.GOOGLE_INFOR_URL,
      BASE_URL: process.env.BASE_URL
    },
  },
});
