// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  modules: [
    "@nuxtjs/sitemap",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxtjs/mdc",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui-pro",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@nuxtjs/robots",
  ],
  i18n: {
    locales: [{ code: "fr", iso: "fr-FR", name: "Français" }],
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

  __dangerouslyDisableSanitizersByTagID: {
    "axeptio-settings": ["innerHTML"],
  },
  app: {
    head: {
      script: [
        {
          innerHTML: `
            window.axeptioSettings = {
              clientId: "686f9f81651ade3dc3dfda31",
              cookiesVersion: "dogall-fr-EU",
              googleConsentMode: {
                default: {
                  analytics_storage: "denied",
                  ad_storage: "denied",
                  ad_user_data: "denied",
                  ad_personalization: "denied",
                  wait_for_update: 500
                }
              }
            };
          `,
          type: "text/javascript",
          id: "axeptio-settings",
        },
        {
          src: "https://static.axept.io/sdk.js",
          async: true,
        },
      ],
      title: "Dog All - Coaching Canin",
      meta: [
        {
          name: "description",
          content:
            "Comportementaliste canin en Province de Liège & Luxembourg – Bilan comportemental, dressage et séances d’éducation canine avec méthodes positives et bienveillantes. Cours collectif et individuel personnalisé pour chiens.",
        },
      ],
    },
  },
});
