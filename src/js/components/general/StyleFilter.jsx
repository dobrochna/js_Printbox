import React from "react";
import Checkbox from "./Checkbox.jsx";
import XButton from "./XButton.jsx";

export default class StyleFilter extends React.Component {

    _showStyle() {
        return (
            this.props.styles.map((style, idx) => {
                return (
                    <Checkbox
                        key={"style"+idx}
                        index={idx}
                        filterType={style.filterType}
                        label={style.label}
                        checked={style.isChecked}
                        productCount={style.productCount}
                        onSelectFilterValue={this.props.onSelectFilterValue}
                    />
                )
            })
        )
    }

    render () {
        return (
            <div className="StyleFilter">
                <h3>Style</h3>
                <XButton />
                {this._showStyle()}
            </div>
        )
    }
}