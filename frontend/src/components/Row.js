import React from 'react';
import Cell from './Cell';


// write a loop to list all the cells of the row
const Row = (props) => { // Row needs selectedRowIndex, onRowSelect, columns
    return <tr
      className={props.selectedRowIndex === rowIndex ? "is-selected" : ""}
      onClick={() => props.onRowSelect && props.onRowSelect(r, rowIndex)}
      key={`row-${rowIndex}`}
    >
      {props.columns.map((c, columnIndex) =>(
       <Cell value = {props.row[c.field]} rowIndex= {props.rowIndex} columnIndex= {columnIndex} />)
      )}
    </tr>
  };

// reference

let _renderRow = (r, rowIndex) => (
  <tr
    className={props.selectedRowIndex === rowIndex ? "is-selected" : ""}
    onClick={() => props.onRowSelect && props.onRowSelect(r, rowIndex)}
    key={`row-${rowIndex}`}
  >
    {props.columns.map((c, columnIndex) =>
      _renderCell(r[c.field], rowIndex, columnIndex)
    )}
  </tr>
);


  export default Row;