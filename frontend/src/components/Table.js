import React from 'react'
import { SEARCH_TABLE_COLUMNS } from '../constants/globalConstants'
import '../style/App.css'
import { Table } from 'react-bootstrap'
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
    )
  }

  let _renderCell = (value, rowIndex, columnIndex) => {
    let key = `$cell-{rowIndex}-${columnIndex}-${value}`
    return <td key={key}>{value}</td>
  }

  let _renderRow = (r, rowIndex) => (
    <tr
      className={props.selectedRowIndex === rowIndex ? 'is-selected' : ''}
      onClick={() => props.onRowSelect && props.onRowSelect(r, rowIndex)}
      key={`row-${rowIndex}`}
    >
      {r.map((value, columnIndex) => _renderCell(value, rowIndex, columnIndex))}
    </tr>
  )

  return (
    <Table hover>
      <thead className="bg-info text-white">
        <tr>
          {SEARCH_TABLE_COLUMNS.map((column, index) => {
            return <th key={index}>{column}</th>
          })}
        </tr>
      </thead>
      <tbody>{props.rows.map((r, i) => _renderRow(r, i))}</tbody>
    </Table>
  )
}

export default LocalTable
