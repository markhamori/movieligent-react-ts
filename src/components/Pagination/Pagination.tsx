import { useEffect } from "react";

// Styles
import "./Pagination.css";

// Types
import { PaginationProps } from "../../types/types";

export const Pagination = ({
  pages,
  totalPages,
  selectPage,
  prevPage,
  nextPage,
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
  }, [pages, currentPageBtns]);

  return (
    <div className="pagination">
      {totalPages && (
        <button
          className="pagination__button--prev"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            prevPage(e)
          }
        >
          PREV
        </button>
      )}
      {totalPages &&
        [...Array(totalPages)].map((e, i) => (
          <button
            data-testid="total-pages-btn"
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
      {totalPages && (
        <button
          className="pagination__button--next"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            nextPage(e)
          }
        >
          NEXT
        </button>
      )}
    </div>
  );
};
