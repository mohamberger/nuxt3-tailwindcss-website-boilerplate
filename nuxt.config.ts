// https://nuxt.com/docs/api/configuration/nuxt-config

let siteUrl = "http://localhost:2040";
if ("PUBLIC_URL" in process.env) {
  siteUrl = "https://" + process.env.PUBLIC_URL;
} else if (process.env?.VERCEL_ENV == "production") {
  siteUrl = "https://example.com";
} else if ("VERCEL_BRANCH_URL" in process.env) {
  siteUrl = "https://" + process.env.VERCEL_BRANCH_URL;
} else if ("VERCEL_URL" in process.env) {
  siteUrl = "https://" + process.env.VERCEL_URL;
}

export default defineNuxtConfig({
  site: {
    url: siteUrl,
    name: "Awesome Site",
    description: "Welcome to my awesome site!",
    defaultLocale: "de", // not needed if you have @nuxtjs/i18n installed
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/css/fonts.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/seo", "@nuxt/image"],
});