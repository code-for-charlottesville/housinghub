import React from 'react';
import "bulma/css/bulma.css";
import "../style/PropertySearch.css";

export default function ZipCode(props){
    return(
        <div class="column">
            <tr>
            <label className="checkbox">
                <input type="checkbox"/>
                    Charlottesville, VA 22903
                </label>
                </tr><tr>
                <label className="checkbox">
                    <input type="checkbox"/>
                    Charlottesville, VA 22904
                </label>
                </tr><tr>
                <label className="checkbox">
                    <input type="checkbox"/>
                    Greene, VA 22935
                </label>
                </tr><tr>
                <label className="checkbox">
                    <input type="checkbox"/>
                    Albemarle, VA 22987
                </label>
            </tr>
        </div>

    )
}
