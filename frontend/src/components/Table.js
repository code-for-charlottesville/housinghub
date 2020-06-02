import React from "react";
import "bulma/css/bulma.css";
import "../style/App.css";
import "../style/PropertySearch.css";
const Table = (props) => {
  let _renderTableHeader = (column, columnIndex) => {
    return (
      <th
        key={`col-header-${column.field}-${columnIndex}`}
        onClick={() =>
          props.onColumnSort && props.onColumnSort(column, columnIndex)
        }
      >
        <abbr title={column.title}>{column.title}</abbr>
      </th>
    );
  };

  let _renderCell = (value, rowIndex, columnIndex) => {
    let key = `$cell-{rowIndex}-${columnIndex}-${value}`;
    return <td key={key}>{value}</td>;
  };

  let _renderRow = (r, rowIndex) => (
    <tr
      className={props.selectedRowIndex === rowIndex ? "is-selected" : ""}
      onClick={() => props.onRowSelect && props.onRowSelect(r, rowIndex)}
      key={`row-${rowIndex}`}
    >
      {r.map((value, columnIndex) => _renderCell(value, rowIndex, columnIndex))}
    </tr>
  );

  return (
    <div className="table-container">
      <table className="table is-bordered is-striped is-hoverable is-fullwidth HoverPointer">
        <thead className="head">
          <tr>
          <th>Property Type</th>
          <th>Address</th>
          <th>Rent</th>
          <th >Bedrooms</th>
          <th >Bathrooms</th>
          <th >Actions</th>
          </tr>
        </thead>
        <tbody>{props.rows.map((r, i) => _renderRow(r, i))}</tbody>
      </table>
    </div>
  );
};

export default Table;
