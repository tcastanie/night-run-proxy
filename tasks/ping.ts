import { defineTask } from "nitro/task";
import { useRuntimeConfig } from "nitro/runtime-config";

export default defineTask({
  meta: {
    name: "ping",
    description: "Ping the RSS to avoid inactivity deletion",
  },
  async run() {
    const { rssUrl } = useRuntimeConfig();
    await fetch(rssUrl);
    return { result: "pong" };
  },
});
