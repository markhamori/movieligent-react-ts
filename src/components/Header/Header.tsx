// Images
import Logo from "../../assets/Movieligent-logo.svg";

// Components
import { Favorites } from "../Favorites/Favorites";

// Styles
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="movieligent-logo" />
      </div>
      <Favorites />
    </div>
  );
};
