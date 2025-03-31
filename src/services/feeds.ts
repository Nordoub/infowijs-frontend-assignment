import { API_BASE_URL } from "../constants/config";
import { Category } from "../models/category";
import { RssFeed } from "../models/feed";
import XMLParser from "../utils/XMLParser";

export const getFeed = async (category: Category): Promise<RssFeed> => {
  const response = await fetch(`${API_BASE_URL}?feed=${category}`);
  const xmlString = await response.text();
  const parsedFeed = XMLParser(xmlString);

  return parsedFeed;
};
