import { useMemo } from "react";
import { useFeedContext } from "./useFeedContext";
import useGetFeedQuery from "./useGetFeedQuery";
import { ArticleParams } from "../routing/ArticleDetailPage";

const useArticle = ({ id, category }: Partial<ArticleParams>) => {
  const { selectedCategory } = useFeedContext();
  const { data: feed } = useGetFeedQuery(category ?? selectedCategory);

  const article = useMemo(
    () => feed?.items.find((item) => item.guid === id),
    [id, feed]
  );

  return article;
};

export default useArticle;
