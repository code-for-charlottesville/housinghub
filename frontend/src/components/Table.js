import React, { useState } from 'react';
import { connect } from 'react-redux'
import "../style/App.css";
import { Table } from 'react-bootstrap';
const LocalTable = (props) => {
  const _renderTableHeader = (column, columnIndex) => {
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

  const _renderCell = (value, rowIndex, columnIndex) => {
    const key = `$cell-${rowIndex}-${columnIndex}-${value}`;
    return <td key={key}>{value}</td>;
  };

  const _renderRow = (r, rowIndex) => (
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

  const filterResults = (r) => {
    const map = new Map();
    map.set("min_rent", min_rent => min_rent <= r.monthly_rent);
    map.set("max_rent", max_rent => max_rent >= r.monthly_rent);
    map.set("date_available", date_available => date_available.getTime() == r.date_available.getTime());
    map.set("bedrooms", bedrooms => bedrooms === r.bedrooms);
    map.set("deposit_needed", deposit_needed => deposit_needed === r.deposit);
    // map.set("credit_report_needed", credit_report_needed => credit_report_needed === r.???);
    map.set("near_bus_stop", near_bus_stop => near_bus_stop === r.bus_line);
    // map.set("pets_allowed", pets_allowed => pets_allowed === r.???)
    map.set("school_district", school_district => school_district === r.school_district);
    // map.set("lease_type", lease_type => lease_type === r.???)
    // map.set("voucher_accepted", voucher_accepted => voucher_accepted === r.voucher_type_accepted???)

    for (const rule in props.searchFields) {
      if(!map.get(rule)(props.searchFields[rule])) {
        return false;
      };  
    };
    return true;
  };

  return (
    <Table hover>
      <thead className="bg-info text-white">
        <tr>
          {props.columns.map(({ field, title }, index) => {
            return <th key={index}>{title}</th>;
          })}
        </tr>
      </thead>
      <tbody>{props.rows.filter(filterResults).map((r, i) => _renderRow(r, i))}</tbody>
    </Table>
  );
};

function mapStateToProps(state) {
  return {
    searchFields: state.search.query.searchFields,
  };
}

export default connect(mapStateToProps)(LocalTable);
