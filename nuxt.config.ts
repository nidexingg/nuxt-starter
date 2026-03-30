export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  experimental: {
    payloadExtraction: false,
  },
  runtimeConfig: {
    public: {}, //declare your public credentials here
    private: {}, //declare your private and sensitive credentials here
  },
  modules: ['@nuxtjs/tailwindcss', '@vite-pwa/nuxt', '@nuxt/image', '@nuxtjs/i18n', "@nuxtjs/color-mode"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0", // add `maximum-scale=1.0, user-scalable=0` if you don't want user to zoom in/out
      meta: [],
      link: [],
      script: [],
      htmlAttrs: {
        lang: "en",
        class: "",
      },
      bodyAttrs: {
        class: "",
      },
    },
    // check out transitions here: https://nuxt.com/docs/4.x/getting-started/transitions
    // pageTransition: {},
    // layoutTransition: {},
  },
  colorMode: {
    classSuffix: "", // optional, prevents adding "-mode" to body class
    preference: "system",
    fallback: "",
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'km', name: 'ខេមរភាសា', file: 'km.json' },
      { code: 'zh', name: '中文', file: 'zh.json' },
      { code: 'fr', name: 'Francais', file: 'fr.json' },
    ],
    // Disabling automatic locale detection
    detectBrowserLanguage: false,
  },
  pwa: { 
    // More customs: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/Reference
    registerType: "autoUpdate",
    includeAssets: ['favicon.ico'],
    devOptions: {
      enabled: true,
      type: 'module',
    },
    client: {
      installPrompt: true,
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
    },
    manifest: {
      name: "my-amazing-app",
      short_name: "app",
      description: "my-amazing-app description",
      theme_color: "#000000",
      start_url: "/",
      background_color: "#000000",
      display: "standalone",
      scope: "/",
      icons: [],
      screenshots: [],
    },
  },
})