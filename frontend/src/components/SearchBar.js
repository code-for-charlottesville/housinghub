import React from "react";
import "bulma/css/bulma.css";
import "../style/App.css";
const SearchBar = (props) => {
  return (
    <div className="Sideways container">
      <input
        type="text"
        placeholder={props.placeHolder}
        className="input"
        onChange={(e) => props.onChange && props.onChange(e.target.value)}
        required
      />
      <button
        className="button is-success"
        onClick={(e) => props.onSubmit && props.onSubmit("temp")}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
