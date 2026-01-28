import { defineConfig } from "nitro";

export default defineConfig({
  serverDir: "./",
  runtimeConfig: {
    rssUrl: "",
  },
  experimental: {
    tasks: true,
  },
  scheduledTasks: {
    // Run `ping` task every 5 days at 07:00 🥐
    "0 7 */5 * *": ["ping"],
  },
});
