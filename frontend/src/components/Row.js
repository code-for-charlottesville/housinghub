import React from "react";
import Cell from "./Cell";

// write a loop to list all the cells of the row
const Row = (props) => {
  // Row needs selectedRowIndex, onRowSelect, columns, row, rowIndex
  return (
    <tr
      className={props.selectedRowIndex === rowIndex ? "is-selected" : ""}
      onClick={() =>
        props.onRowSelect && props.onRowSelect(props.row, props.rowIndex)
      }
      key={`row-${props.rowIndex}`}
    >
      {props.columns.map((c, columnIndex) => (
        <Cell
          value={props.row[c.field]}
          rowIndex={props.rowIndex}
          columnIndex={columnIndex}
        />
      ))}
    </tr>
  );
};

// reference
export default Row;
