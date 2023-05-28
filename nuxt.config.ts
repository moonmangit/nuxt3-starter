// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@vueuse/nuxt",
  ],
  imports: {
    dirs: ["stores"],
  },

  // modules options
  googleFonts: {
    families: {
      "Noto Sans Thai": [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  veeValidate: {
    autoImports: true,
  },
});
