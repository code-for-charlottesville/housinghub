import React from "react";
import _ from "lodash";
import "../style/App.css";

const MAX_PAGES = 10;

const Pagination = (props) => {
  let renderPaginationBox = (content, pageIndex) => (
    <li
      className="PaginationBox"
      onClick={() =>
        pageIndex !== props.currentPageIndex && props.onSetPage(pageIndex)
      }
    >
      {pageIndex !== props.currentPageIndex && <a>{content}</a>}
      {pageIndex === props.currentPageIndex && content}
    </li>
  );

  let pagesToRender = props.pageIndexEnd - props.pageIndexStart;
  if (!pagesToRender) return <ul />;
  return (
    <ul className="Sideways container">
      {props.currentPageIndex !== 0 && renderPaginationBox("First", 0)}
      {_.times(pagesToRender, (i) =>
        renderPaginationBox(
          props.pageIndexStart + i + 1,
          i + props.pageIndexStart
        )
      )}
      {props.currentPageIndex !== props.numberOfPages - 1 &&
        renderPaginationBox("Next", props.currentPageIndex + 1)}
      {props.currentPageIndex !== props.numberOfPages - 1 &&
        renderPaginationBox("Last", props.numberOfPages - 1)}
    </ul>
  );
};

export default Pagination;
