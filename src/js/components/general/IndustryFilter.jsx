import React from "react";
import Checkbox from "./Checkbox.jsx";
import XButton from "./XButton.jsx";

export default class IndustryFilter extends React.Component {

    _showIndustry() {
        return (
            this.props.industries.map((industry, idx) => {
                return (
                    <Checkbox
                        key={"industry"+idx}
                        index={idx}
                        filterType={industry.filterType}
                        label={industry.label}
                        checked={industry.isChecked}
                        productCount={industry.productCount}
                        onSelectFilterValue={this.props.onSelectFilterValue}
                    />
                )
            })
        )
    }

    render () {
        return (
            <div className="IndustryFilter">
                <h3>Industry</h3>
                <XButton />
                {this._showIndustry()}
            </div>
        )
    }
}