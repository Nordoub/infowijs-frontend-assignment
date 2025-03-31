import Logo from "../assets/logo.svg";
import Dropdown from "./Dropdown";
import { useFeedContext } from "../hooks/useFeedContext";
import { categories } from "../constants/config";
import { useMatch, useNavigate } from "react-router-dom";

const Header = () => {
  const isArticlePage = useMatch("/article/:id");
  const navigate = useNavigate();
  const { selectedCategory, setSelectedCategory } = useFeedContext();
  const options = Object.keys(categories);

  const selectedDisplayValue = Object.keys(categories).find(
    (key) => categories[key as keyof typeof categories] === selectedCategory
  );

  const onSelect = (value: string) => {
    setSelectedCategory(categories[value]);
    if (isArticlePage) {
      navigate("/");
    }
  };

  return (
    <nav className="flex mb-10 py-5 shadow-md justify-center">
      <div className="flex 2xl:w-60/100 w-80/100 justify-between ">
        <img
          className="w-20 cursor-pointer caret-transparent"
          src={Logo}
          onClick={() => navigate("/")}
        />
        <Dropdown
          selectedValue={selectedDisplayValue}
          options={options}
          onSelect={onSelect}
        />
      </div>
    </nav>
  );
};

export default Header;
