import React from "react";
import "bulma/css/bulma.css";

const SearchBar = (props) => {
  return (
  	<span>
        
        <input
          type="text"
          placeholder={props.placeHolder}
          className="input"
          onChange={e =>
            props.onChange(e.target.value)
          }
          required
        />
  	</span>
  );
};

export default SearchBar;
