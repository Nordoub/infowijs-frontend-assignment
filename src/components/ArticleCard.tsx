import { memo } from "react";

type Props = {
  title: string;
  image: string | undefined;
  isHighlighted?: boolean;
};

const ArticleCard = ({ title, image, isHighlighted }: Props) => {
  return (
    <article
      className="rounded relative overflow-hidden"
      aria-labelledby="article-title"
    >
      <div className="scale-100 hover:scale-105 ease-in duration-200">
        <img className="rounded" src={image} alt={"Article image"} />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 opacity-50"
          aria-hidden="true"
        ></div>
      </div>
      <p
        id="article-title"
        className={`py-2 font-extrabold md:text-sm ${
          isHighlighted
            ? "py-4 px-5 absolute bottom-0 text-shad text-white text-str md:text-xl"
            : ""
        }`}
      >
        {title}
      </p>
    </article>
  );
};

ArticleCard.displayName = "ArticleCard";

export default memo(ArticleCard);
