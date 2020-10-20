import React from "react";
import _ from "lodash";
import "../style/App.css";
import { ButtonGroup, Button } from "react-bootstrap";

const Pagination = (props) => {
  let renderPaginationBox = (content, pageIndex) => (
    <Button
      key={`pagination-box-${content}`}
      className="PaginationBox"
      variant={(pageIndex === props.currentPageIndex ? "primary" : "secondary")}
      onClick={() =>
        pageIndex !== props.currentPageIndex && props.onSetPage(pageIndex)
      }
    >
    {content === pageIndex ? pageIndex + 1 : content}
    </Button>
  );

  let pagesToRender = props.numberOfPages;
  if (!pagesToRender) return <ul />;
  return (
    <ButtonGroup>
      {props.currentPageIndex !== 0 && renderPaginationBox("First", 0)}
      {props.currentPageIndex !== 0 && renderPaginationBox("Prev", 0)}
      {_.times(pagesToRender, (i) =>
        renderPaginationBox(i, i)
      )}
      {props.currentPageIndex !== props.numberOfPages - 1 &&
        renderPaginationBox("Next", props.currentPageIndex + 1)}
      {props.currentPageIndex !== props.numberOfPages - 1 &&
        renderPaginationBox("Last", props.numberOfPages - 1)}
    </ButtonGroup>
  );
};

export default Pagination;
