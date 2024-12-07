export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "nuxt-og-image",
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_SITE_URL,
      siteName: process.env.NUXT_SITE_NAME,
      formSubmitUrl: process.env.NUXT_FORMSUBMIT_URL,
    },
    private: {}, //declare your private and sensitive credentials here
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Nuxt Starter",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      meta: [],
      link: [],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/iconify-icon@2.1.0/dist/iconify-icon.min.js",
          type: "text/javascript",
        },
      ],
      htmlAttrs: {
        lang: "en",
        class: "",
      },
      bodyAttrs: {
        class: "",
      },
    },
    pageTransition: { name: "fade", mode: "out-in" },
    layoutTransition: { name: "fade", mode: "out-in" },
  },
  content: {}, //https://content.nuxt.com/get-started/configuration
  fonts: {}, //https://fonts.nuxt.com/get-started/configuration
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  }, //https://tailwindcss.nuxtjs.org/getting-started/configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    url: process.env.NUXT_SITE_URL || "https://nidexingg.com/",
    name: "Nuxt Starter Template by Nidexingg",
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    strategy: "prefix_and_default",
    defaultLocale: "en",
    pages: {},
    locales: [
      {
        code: "en",
        language: "en-US",
        isCatchallLocale: true,
      },
      {
        code: "km",
        language: "km-KH",
      },
    ],
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  pwa: {
    manifest: {
      name: "Nuxt Starter Template by Nidexingg",
      short_name: "XingNuxt",
      theme_color: "#000000",
      start_url: "/",
      background_color: "#000000",
      display: "standalone",
      scope: "/",
      description: "Install XingNuxt PWA on your homescreen.",
      icons: [
        {
          src: "https://cloud.nidexingg.com/pwaicons/xingfolio/192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "https://cloud.nidexingg.com/pwaicons/xingfolio/512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "https://cloud.nidexingg.com/pwaicons/xingfolio/512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
        // add more sizes as you wish
      ],
    },
  },
  image: {
    format: ["webp"],
    screens: {},
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "iconify-icon",
    },
  },
});
