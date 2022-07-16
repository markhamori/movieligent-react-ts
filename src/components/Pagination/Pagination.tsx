import { useEffect } from "react";

// Styles
import "./Pagination.css";

// Types
import { PaginationProps } from "../../types/types";

export const Pagination = ({
  pages,
  totalPages,
  selectPage,
}: PaginationProps) => {
  const currentPageBtns = document.querySelectorAll(".pagination__button");

  useEffect(() => {
    currentPageBtns.forEach((btn) => {
      if (Number(btn.innerHTML) === pages) {
        btn.classList.add("current");
      } else {
        btn.classList.remove("current");
      }
    });
  }, [pages]);

  return (
    <div className="pagination">
      {totalPages &&
        [...Array(totalPages)].map((e, i) => (
          <button
            className="pagination__button"
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
