import React from "react";
import Checkbox from "./Checkbox.jsx";
import XButton from "./XButton.jsx";

export default class SizeFilter extends React.Component {

    _showSizes() {
        return (
            this.props.sizes.map((size, idx) => {
                return (
                    <Checkbox
                        key={"size"+idx}
                        index={idx}
                        filterType={size.filterType}
                        label={size.label}
                        checked={size.isChecked}
                        productCount={size.productCount}
                        onSelectFilterValue={this.props.onSelectFilterValue}
                    />
                )
            })
        )
    }

    render () {
        return (
            <div className="SizeFilter">
                <h3>Size</h3>
                <XButton onSelectFilterValue={this.props.onSelectFilterValue}/>
                {this._showSizes()}
            </div>
        )
    }
}