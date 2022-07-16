// Icons
import { BsFillSuitHeartFill } from "react-icons/bs";

// Style
import "./Favorites.css";

export const Favorites = () => {
  return (
    <div className="favorites">
      <button className="favorites__button">
        Favorites
        <span>
          <BsFillSuitHeartFill />
        </span>
      </button>
    </div>
  );
};
