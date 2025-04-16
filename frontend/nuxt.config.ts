export default defineNuxtConfig({
  
  ssr: false,

  devtools: {
    enabled: false,
  },

  app: {
    head: {
      title: "Loading ...",
    },
  },

  css: ["~/assets/css/main.css", "~/assets/css/fontiran.css"],

  modules: ["@pinia/nuxt", "nuxt-swiper"],

  // "@vite-pwa/nuxt",
  
  pinia: {
    storesDirs: ["./stores/**"],
  },

  // pwa: {
  //   manifest: {
  //     name: "Bargbin App",
  //     short_name: "Bargbin",
  //     description: "Bargbin Application",
  //     icons: [
  //       {
  //         src: "icons/icon_64x64.png",
  //         sizes: "64x64",
  //         type: "image/png",
  //       },
  //       {
  //         src: "icons/icon_144x144.png",
  //         sizes: "144x144",
  //         type: "image/png",
  //       },
  //       {
  //         src: "icons/icon_192x192.png",
  //         sizes: "192x192",
  //         type: "image/png",
  //       },
  //       {
  //         src: "icons/icon_512x512.png",
  //         sizes: "512x512",
  //         type: "image/png",
  //       },
  //     ],
  //   },
  //   workbox: {
  //     navigateFallback: "/",
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: "module",
  //   },
  // },

  nitro: {
    routeRules: {
      '/api/**': {
        proxy: 'http://localhost:8000/**'
      }
    }
  },


  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-11-01",
});