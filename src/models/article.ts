export type Enclosure = {
  type: string;
  url: string;
};

export type Article = {
  title: string;
  link: string;
  description: string;
  enclosure: Enclosure;
  pubDate: string;
  guid: string;
  image: string | null;
};
