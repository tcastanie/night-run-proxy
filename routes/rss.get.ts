import { defineCachedHandler } from "nitro/cache";
import { useRuntimeConfig } from "nitro/runtime-config";
import { HTTPError } from "nitro/h3";

export default defineCachedHandler(
  async () => {
    const { rssUrl } = useRuntimeConfig();
    let rss = "";
    try {
      const response = await fetch(rssUrl);
      rss = await response.text();
    } catch (error) {
      throw new HTTPError("RSS error", { status: 500, cause: error });
    }
    return rss;
  },
  {
    maxAge: 60 * 60, // 1 hour
    swr: false,
  },
);
