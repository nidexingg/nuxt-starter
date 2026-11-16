import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devServer: {
    port: 3000,
  },
  devtools: { enabled: true },
  experimental: {
    payloadExtraction: false,
  },
  runtimeConfig: {
    public: {}, //declare your public credentials here
    private: {}, //declare your private and sensitive credentials here
  },
  modules: [
    "@vite-pwa/nuxt",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
  ],
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
  vite: {
    plugins: [tailwindcss()],
  },
  colorMode: {
    classSuffix: "", // optional, prevents adding "-mode" to body class
    preference: "system",
    fallback: "",
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "km", name: "ខេមរភាសា", file: "km.json" },
      { code: "zh", name: "中文", file: "zh.json" },
      { code: "fr", name: "Francais", file: "fr.json" },
    ],
    // Disabling automatic locale detection
    detectBrowserLanguage: false,
  },
  pwa: {
    // More customs: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/Reference
    registerType: "autoUpdate",
    includeAssets: ["favicon.ico"],
    devOptions: {
      enabled: true,
      type: "module",
      suppressWarnings: true,
    },
    client: {
      installPrompt: true,
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
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
      // caveat: The icons and screenshots below are just placeholders. Replace them with your own assets and put them in `/public` dir.
      icons: [
        {
          src: "https://placehold.co/192x192?text=icon",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "https://placehold.co/512x512?text=icon",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "https://placehold.co/512x512?text=icon",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
      screenshots: [
        {
          src: "https://placehold.co/750x1334?text=Example1",
          sizes: "750x1334",
          type: "image/png",
          form_factor: "narrow",
        },
        {
          src: "https://placehold.co/1280x720?text=Example1",
          sizes: "1280x720",
          type: "image/png",
          form_factor: "wide",
        },
        {
          src: "https://placehold.co/750x1334?text=Example2",
          sizes: "750x1334",
          type: "image/png",
          form_factor: "narrow",
        },
        {
          src: "https://placehold.co/1280x720?text=Example2",
          sizes: "1280x720",
          type: "image/png",
          form_factor: "wide",
        },
        {
          src: "https://placehold.co/750x1334?text=Example3",
          sizes: "750x1334",
          type: "image/png",
          form_factor: "narrow",
        },
        {
          src: "https://placehold.co/1280x720?text=Example3",
          sizes: "1280x720",
          type: "image/png",
          form_factor: "wide",
        },
      ],
    },
  },
});
