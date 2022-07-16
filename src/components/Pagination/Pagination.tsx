// Styles
import "./Pagination.css";

// Types
import { PaginationProps } from "../../types/types";

export const Pagination = ({ totalPages, selectPage }: PaginationProps) => {
  return (
    <div className="pagination">
      {totalPages &&
        [...Array(totalPages)].map((e, i) => (
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              selectPage(e)
            }
            value={i + 1}
            key={i + 1}
          >
            {i + 1}
          </button>
        ))}
    </div>
  );
};
