import { Category } from "./category";

export type Article = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  guid: string;
  image?: string;
};

export type ArticleRouteParams = {
  id: string;
  category: Category;
};
