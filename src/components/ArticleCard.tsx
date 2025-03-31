import { Article } from "../models/article";
import { Link } from "react-router-dom";

type Props = {
  article: Article;
  isHighlighted?: boolean;
};

const ArticleCard = ({
  article: { title, image, guid },
  isHighlighted,
}: Props) => {
  return (
    <Link to={`/article/${guid}`}>
      <div className="rounded relative overflow-hidden">
        <div className="scale-100 hover:scale-105 ease-in duration-200">
          <img
            className="rounded"
            src={image ? image : undefined}
            alt={"picture"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 opacity-50"></div>
        </div>
        <p
          className={`py-2 font-extrabold ${
            isHighlighted
              ? "py-4 px-5 absolute bottom-0 text-shad text-white text-str md:text-xl"
              : ""
          }`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};

export default ArticleCard;
