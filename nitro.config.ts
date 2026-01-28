import { defineConfig } from "nitro";

export default defineConfig({
  compatibilityDate: "2026-01-28",
  serverDir: "./",
  runtimeConfig: {
    rssUrl: "",
  },
  routeRules: {
    "/rss": {
      cors: true,
      headers: {
        "access-control-allow-methods": "GET",
        "access-control-allow-origin": "https://xviniette.github.io",
      },
    },
  },
  experimental: {
    tasks: true,
  },
  scheduledTasks: {
    // Run `ping` task every 5 days at 07:00 🥐
    "0 7 */5 * *": ["ping"],
  },
});
