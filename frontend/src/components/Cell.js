import React from "react";

// https://react-bootstrap.github.io/components/table/

const Cell = (props) => {
  // need value, rowIndex, column index
  let key = `$cell-${props.rowIndex}-${props.columnIndex}-${props.value}`; // key actually just need column index
  return <td key={key}>{props.value}</td>;
};

export default Cell;
