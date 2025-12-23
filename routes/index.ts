import { defineHandler, proxyRequest } from "nitro/h3";
import { useRuntimeConfig } from "nitro/runtime-config";

export default defineHandler((event) => {
  const { rssUrl } = useRuntimeConfig();
  return proxyRequest(event, rssUrl);
});
