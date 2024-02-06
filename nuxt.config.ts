// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    output: {
      publicDir: "docs",
    },
  },
  modules: ["@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "Nuxt3 PWA",
      short_name: "N3 PWA",
      description: "This is a test",
      start_url: "/app/",
      scope: '/app/',
      theme_color: "#684191",
      icons: [
        {
          src: "icons/icon_48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/icon_72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/icon_96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/icon_128.png",
          sizes: "128x128",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/icon_192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/icon_384.png",
          sizes: "384x384",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "icons/icon_512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "icons/icon_512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
      "screenshots" : [
        {
          "src": "icons/wide-screenshot.png",
          "sizes": "1196x822",
          "type": "image/png",
          "form_factor": "wide",
          "label": "Homescreen of Awesome App"
        },
        {
          "src": "icons/narrow-screenshot.jpeg",
          "sizes": "1125x2436",
          "type": "image/jpeg",
          "form_factor": "narrow",
          "label": "List of Awesome Resources available in Awesome App"
        }
      ]
    },
    workbox: {
      navigateFallback: "/app",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
