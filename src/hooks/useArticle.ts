import { useMemo } from "react";
import { useFeedContext } from "./useFeedContext";
import useGetFeedQuery from "./useGetFeedQuery";
import { ArticleRouteParams } from "../models/article";

const useArticle = ({ id, category }: Partial<ArticleRouteParams>) => {
  const { selectedCategory } = useFeedContext();
  const { data: feed } = useGetFeedQuery(category ?? selectedCategory);

  const article = useMemo(
    () => feed?.items.find((item) => item.guid === id),
    [id, feed]
  );

  return article;
};

export default useArticle;
