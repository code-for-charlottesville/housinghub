import React from "react";

import "../style/App.css";
import "../style/PropertySearch.css";
import Table from "react-bootstrap/Table";
const LocalTable = (props) => {
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
    <Table table bordered hover striped>
      <thead className="head">
        <tr>
          <th>Property Type</th>
          <th>Address</th>
          <th>Rent</th>
          <th>Bedrooms</th>
          <th>Bathrooms</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{props.rows.map((r, i) => _renderRow(r, i))}</tbody>
    </Table>
  );
};

export default LocalTable;
