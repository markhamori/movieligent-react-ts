// Images
import Logo from "../../assets/Movieligent-logo.svg";

// Icons
import { FiSearch } from "react-icons/fi";

// Components
import { Favorites } from "../Favorites/Favorites";

// Styles
import "./Header.css";

// Types
import { HeaderProps } from "../../types/types";

export const Header = ({handleChange, handleKeyPress, searchButton}:HeaderProps) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="movieligent-logo" />
      </div>
      <div className="header__menu">
        <Favorites />
        <div className="header__input">
          <input
            type="text"
            name="search"
            placeholder="Search a movie..."
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={searchButton}>
            <FiSearch />
          </button>
        </div>
        
      </div>
    </div>
  );
};
