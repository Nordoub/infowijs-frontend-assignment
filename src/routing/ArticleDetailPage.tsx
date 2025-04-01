import { useParams } from "react-router-dom";
import useArticle from "../hooks/useArticle";
import SafeHTML from "../components/SafeHTML";
import { ArticleRouteParams } from "../models/article";

const ArticleDetailPage = () => {
  const { id, category } = useParams<ArticleRouteParams>();
  const article = useArticle({ id, category });

  return (
    <div className="2xl:w-6/10 xl:w-8/10 w-full place-self-center place-items-center mx-auto mb-10 sm:space-y-15 space-y-5">
      <img
        className="rounded-lg caret-transparent"
        src={article?.image ?? ""}
        alt={article?.title || "Article header image"}
        aria-hidden={!article?.image}
      />
      <div className="w-full space-y-4">
        <p className="opacity-50 font-semibold">{article?.pubDate}</p>
        <h1 className="sm:mb-7">{article?.title}</h1>
        <SafeHTML html={article?.description ?? ""} />
      </div>
    </div>
  );
};

export default ArticleDetailPage;
