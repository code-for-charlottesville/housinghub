import React from "react";
import _ from "lodash";
import "../style/App.css";

const MAX_PAGES = 10;

const Pagination = (props) => {
  let renderPaginationBox = (content, pageIndex) => (
    <li className="PaginationBox" onClick={() => props.onSetPage(pageIndex)}>
      <a>{content}</a>
    </li>
  );

  let pagesToRender =
    props.numberOfPages > MAX_PAGES ? MAX_PAGES : props.numberOfPages;
  if (!pagesToRender) return <ul />;
  return (
    <ul className="Sideways">
      {renderPaginationBox("First", 0)}
      {_.times(pagesToRender, (i) => renderPaginationBox(i + 1, i))}
      {renderPaginationBox("Next", props.currentPageIndex + 1)}
      {renderPaginationBox("Last", props.numberOfPages - 1)}
    </ul>
  );
};

export default Pagination;
