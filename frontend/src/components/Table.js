import React from "react";
import "bulma/css/bulma.css";

import "../style/App.css"
const Table = (props) => {
  return (
    <table>
      <thead>
        {props.columns.map((c,i) => (
          <th key={`${c.field}-${i}`}>
            <abbr title={c.title}>{c.title}</abbr>
          </th>
        ))}
      </thead>
    </table>
   );
};

export default Table;
