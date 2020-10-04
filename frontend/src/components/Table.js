import React from "react";
import "../style/App.css";
import { Table, Button } from "react-bootstrap";
const LocalTable = (props) => {
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
      {props.columns.map((c, columnIndex) =>
        _renderCell(r[c.field], rowIndex, columnIndex)
      )}
      <Button>Delete</Button>
    </tr>
  );

  const TableHead = ({ columns }) => {
    return columns.map(({ field, title }, index) => {
      return <th key={index}>{title}</th>;
    });
  };

  return (
    <Table hover>
      <thead className="bg-info text-white">
        <tr>
          <TableHead columns={props.columns} />
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{props.rows.map((r, i) => _renderRow(r, i))}</tbody>
    </Table>
  );
};

export default LocalTable;
