import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@consts";

export async function GET(context) {
  const collection = await getCollection("collection");
  const items = [...collection];

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}
