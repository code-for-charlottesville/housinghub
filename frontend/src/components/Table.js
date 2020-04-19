import React from "react";
import "bulma/css/bulma.css";

const Table = (props) => {
  let _renderTableHeader = (column, columnIndex) => {
    return (
      <th
        key={`${column.field}-${columnIndex}`}
        onClick={() =>
          props.onColumnSort && props.onColumnSort(column, columnIndex)
        }
      >
        <abbr title={column.title}>{column.title}</abbr>
      </th>
    );
  };

  let _renderCell = (value, rowIndex, columnIndex) => {
    let key = `${rowIndex}-${value}`;
    return <td key={key}>{value}</td>;
  };

  let _renderRow = (r, rowIndex) => (
    <tr
      className={props.selectedRowIndex === rowIndex ? "is-selected" : ""}
      onClick={() => props.onRowSelect && props.onRowSelect(r, rowIndex)}
    >
      {r.map((value, columnIndex) => _renderCell(value, rowIndex, columnIndex))}
    </tr>
  );

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
