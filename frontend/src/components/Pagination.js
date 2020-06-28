import React from "react";
import _ from "lodash";
import "../style/App.css";
import { ButtonGroup, Button } from "react-bootstrap";

const Pagination = (props) => {
  let renderPaginationBox = (content, pageIndex) => (
    <Button
      key={`pagination-box-${pageIndex}`}
      className="PaginationBox"
      variant="secondary"
      onClick={() =>
        pageIndex !== props.currentPageIndex && props.onSetPage(pageIndex)
      }
    >
      {pageIndex !== props.currentPageIndex && <a>{content}</a>}
      {pageIndex === props.currentPageIndex && content}
    </Button>
  );

  let pagesToRender = props.pageIndexEnd - props.pageIndexStart;
  if (!pagesToRender) return <ul />;
  return (
    <ButtonGroup>
      {props.currentPageIndex !== 0 && renderPaginationBox("First", 0)}
      {_.times(pagesToRender, (i) =>
        render.PaginationBox(
          props.pageIndexStart + i + 1,
          i + props.pageIndexStart
        )
      )}
      {props.currentPageIndex !== props.numberOfPages - 1 &&
        renderPaginationBox("Next", props.currentPageIndex + 1)}
      {props.currentPageIndex !== props.numberOfPages - 1 &&
        renderPaginationBox("Last", props.numberOfPages - 1)}
    </ButtonGroup>
  );
};

export default Pagination;
