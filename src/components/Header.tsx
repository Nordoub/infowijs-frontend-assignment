import Logo from "../assets/logo.svg";
import Dropdown from "./Dropdown";
import { useFeedContext } from "../hooks/useFeedContext";
import { categories } from "../constants/config";
import { Link, useMatch, useNavigate } from "react-router-dom";

const Header = () => {
  const isArticlePage = useMatch(":category/article/:id");
  const navigate = useNavigate();
  const { selectedCategory, setSelectedCategory } = useFeedContext();
  const options = Object.keys(categories);

  const selectedDisplayValue = Object.keys(categories).find(
    (key) => categories[key as keyof typeof categories] === selectedCategory
  );

  const goToHomepage = () => navigate("/");

  const onSelect = (value: string) => {
    setSelectedCategory(categories[value]);
    if (isArticlePage) {
      goToHomepage();
    }
  };

  return (
    <header>
      <nav
        className="flex mb-10 py-5 shadow-md justify-center"
        aria-label="Main navigation"
      >
        <div className="flex 2xl:w-60/100 w-80/100 justify-between">
          <Link to="/" aria-label="Go to homepage">
            <img
              className="w-20 caret-transparent"
              src={Logo}
              alt="Website logo"
            />
          </Link>
          <Dropdown
            selectedValue={selectedDisplayValue}
            options={options}
            onSelect={onSelect}
            aria-label="Select category"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
