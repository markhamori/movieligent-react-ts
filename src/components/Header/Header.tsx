// Images
import Logo from "../../assets/Movieligent-logo.svg";

// Icons
import { FiSearch } from "react-icons/fi";

// Styles
import "./Header.css";

// Types
import { HeaderProps } from "../../types/types";

export const Header = ({
  handleChange,
  handleKeyPress,
  searchButton,
}: HeaderProps) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="movieligent-logo" />
      </div>
      <div className="header__menu">
        <div className="header__input">
          <form>
            <input
              type="text"
              name="search"
              placeholder="Search a movie..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
                handleKeyPress(e)
              }
            />
            <button
              type="button"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                searchButton(e)
              }
            >
              <FiSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
