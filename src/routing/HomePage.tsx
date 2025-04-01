import { useFeedContext } from "../hooks/useFeedContext";
import useGetFeedQuery from "../hooks/useGetFeedQuery";
import ArticleCard from "../components/ArticleCard";
import useBreakpoints from "../hooks/useBreakpoints";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { selectedCategory } = useFeedContext();
  const { data: feed } = useGetFeedQuery(selectedCategory);
  const { width, lg, md } = useBreakpoints();

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 lg:gap:10 md:gap-7 sm:gap-5">
      {feed?.items.map(({ guid, title, image }, i) => {
        const shouldHighlight =
          (width >= lg && i < 2) || (width >= md && width < lg && i < 1);

        return (
          <Link
            key={guid}
            className={` ${i === 0 ? "md:col-span-3 lg:col-span-2" : ""} ${
              i === 1 ? "lg:col-span-2" : ""
            }`}
            to={`${selectedCategory}/article/${guid}`}
            aria-label={`Read article: ${title}`}
          >
            <ArticleCard
              title={title}
              image={image}
              isHighlighted={shouldHighlight}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default HomePage;
