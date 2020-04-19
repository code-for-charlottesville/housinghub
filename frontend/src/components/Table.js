import React from "react";
import "bulma/css/bulma.css";
import "../style/Table.css";

const Table = (props) => {
  let _renderTableHeader = (column, columnIndex) => {
    return (
      <th key={`${column.field}-${columnIndex}`}>
        <abbr title={column.title}>{column.title}</abbr>
      </th>
    );
  };

  let _renderCell = (value, rowIndex, columnIndex) => {
    let key = `${rowIndex}-${value}`;
    if (columnIndex === 0) return <th key={key}>{value}</th>;
    return <td key={key}>{value}</td>;
  };

  let _renderRow = (r, rowIndex) => {
    return r.map((value, columnIndex) =>
      _renderCell(value, rowIndex, columnIndex)
    );
  };

  return (
    <div className="table-container">
      <table className="table is-bordered is-striped is-hoverable is-fullwidth">
        <thead>{props.columns.map((c, i) => _renderTableHeader(c, i))}</thead>
        <tbody>{props.rows.map((r, i) => _renderRow(r, i))}</tbody>
      </table>
    </div>
  );
};

export default Table;
