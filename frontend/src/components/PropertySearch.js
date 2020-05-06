import React from "react";
import "bulma/css/bulma.css";
import "../style/App.css";
import Dropdown from './Dropdown.js'
import CheckBox from './CheckBox.js'
const PropertySearch = (props) => {
    return (
        <div class="columns">
            <div class="column">
                <CheckBox/>
            </div>
            <div class="column">
                <input
                  type="text"
                  placeholder={props.placeHolder}
                  className="input"
                  onChange={(e) => props.onChange && props.onChange(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder={props.placeHolder}
                  className="input"
                  onChange={(e) => props.onChange && props.onChange(e.target.value)}
                  required
                />
            </div>
            <div class="column">
                <div class="rows">
                    <div class="row">
                        <Dropdown
                            getName="Bedrooms"
                        />
                    </div>
                    <div class="row">
                        <Dropdown
                            getName="Bathroom"
                        />
                    </div>
                </div>
            </div>
            <div class="column">
                <button class="button is-primary is-rounded">Rounded</button>
            </div>
        </div>
    )
}
export default PropertySearch;
