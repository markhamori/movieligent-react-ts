import { useRef } from "react";

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
  setQuery,
}: HeaderProps) => {
  const inputField = useRef<HTMLInputElement>(null);

  const searchButton = () => {
    const value = inputField.current?.value;
    if (value !== undefined) setQuery(value);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="movieligent-logo" />
      </div>
      <div className="header__menu">
        <div className="header__input">
          <input
            type="text"
            name="search"
            ref={inputField}
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
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => searchButton()}
          >
            <FiSearch />
          </button>
        </div>
      </div>
    </div>
  );
};
