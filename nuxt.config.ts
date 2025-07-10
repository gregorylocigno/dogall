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

  app: {
    head: {
      script: [
        {
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PQCHCT3G')`,
          type: "text/javascript",
        },
      ],
      noscript: [
        {
          children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PQCHCT3G"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
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
