import React from "react";
import "bulma/css/bulma.css";
import "../style/Table.css"

const Table = (props) => {
  return (
    <table className="table">
      <thead>
        {props.columns.map((c,i) => (
          <th key={`${c.field}-${i}`}>
            <abbr title={c.title}>{c.title}</abbr>
          </th>
        ))}
      </thead>
      <tbody>
        {props.rows.map((r,i) => (
          r.map((v,j) =>  {
            let key = `${i}-${v}`
            if (j===0) return (<th className="row" key={key}>{v}</th>)
            return (<td className="row" key={key}>{v}</td>)
          })    
        ))}
      </tbody>
    </table>
   );
};

export default Table;
