// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "@nuxt/content",
    "@nuxtjs/mdc",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui-pro",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
  ],
  i18n: {
    locales: [
      { code: "fr", iso: "fr-FR", name: "Français" },
      { code: "en", iso: "en-US", name: "English" },
    ],
    defaultLocale: "fr",
  },
  css: ["~/assets/css/main.css"],

  fonts: {
    families: [
      {
        name: "Poppins",
        weights: [400, 500, 600, 700],
      },
      {
        name: "Figtree",
        weights: [300, 400, 500, 600],
      },
    ],
  },

  ui: {
    colorMode: false,
    theme: {
      colors: [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "info",
        "accent",
      ],
    },
  },
  supabase: {
    redirect: false,
  },
});
