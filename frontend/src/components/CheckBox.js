import React from "react";
import "bulma/css/bulma.css";
import "../style/PropertySearch.css";


const CheckBox = (props) => {
    return (
        <div class="columns is-hoverable">
            <div class="column">
                <tr>
                <label className="checkbox">
                    <input type="checkbox"/>
                    City of Charlottesville
                </label>
                </tr><tr>
                <label className="checkbox">
                    <input type="checkbox"/>
                    Green
                </label>
                </tr><tr>
                <label className="checkbox">
                    <input type="checkbox"/>
                    Albemarle
                </label>
                </tr>
            </div>
            <div class="column">
                <tr>
                <label className="checkbox">
                    <input type="checkbox"/>
                    Single Family Home
                </label>
                </tr><tr>
                <label className="checkbox">
                    <input type="checkbox"/>
                    Apartement
                </label>
                </tr><tr>
                <label className="checkbox">
                    <input type="checkbox"/>
                    Shared Apartement
                </label>
                </tr>
            </div>
        </div>
    )

}
export default CheckBox;
