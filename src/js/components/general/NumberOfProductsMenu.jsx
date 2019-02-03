import React from "react";

export default class NumberOfProductsMenu extends React.Component {


    render () {
        return (
            <div className="NumberOfProductsMenu">
                <label>
                    Show:
                    <select>
                        <option value="40">40</option>
                        <option value="80">80</option>
                        <option value="All">All</option>
                    </select>
                </label>
            </div>
        )
    }
}

