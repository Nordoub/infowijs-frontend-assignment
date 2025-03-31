import { Article } from "../models/article";
import { RssFeed } from "../models/feed";

const ID_CHAR_COUNT = 7;

const XMLParser = (xmlString: string): RssFeed => {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlString, "text/xml");
  const channel = xml.querySelector("channel");

  const parsedFeed: RssFeed = {
    feed: {
      title: channel?.querySelector("title")?.textContent || "",
      link: channel?.querySelector("link")?.textContent || "",
      description: channel?.querySelector("description")?.textContent || "",
      language: channel?.querySelector("language")?.textContent || "",
      copyright: channel?.querySelector("copyright")?.textContent || "",
      pubDate: channel?.querySelector("pubDate")?.textContent || "",
      webMaster: channel?.querySelector("webMaster")?.textContent || "",
    },
    items: Array.from(xml.querySelectorAll("item")).map((item) => {
      const enclosure = item.querySelector("enclosure");
      const imageUrl = enclosure ? enclosure.getAttribute("url") : null;
      return {
        title: item.querySelector("title")?.textContent || "",
        link: item.querySelector("link")?.textContent || "",
        description: item.querySelector("description")?.textContent || "",
        pubDate: item.querySelector("pubDate")?.textContent || "",
        guid:
          item.querySelector("guid")?.textContent?.slice(-ID_CHAR_COUNT) || "",
        enclosure: {
          type: enclosure?.getAttribute("type") || "",
          url: imageUrl,
        },
        image: imageUrl,
      } as Article;
    }),
  };

  return parsedFeed;
};

export default XMLParser;
