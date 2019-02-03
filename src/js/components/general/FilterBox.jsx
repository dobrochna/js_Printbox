import React from "react";
import XButtonFilterBox from "./XButtonFilterBox.jsx";

export default class FilterBox extends React.Component {
    render () {
        return (
            <div className="FilterBox">
                <label>{this.props.label}</label>
                <XButtonFilterBox
                    onSelectFilterValue={this.props.onSelectFilterValue}
                    index={this.props.index}
                    filterType={this.props.filterType}
                    checked={this.props.checked}
                />
            </div>
        )
    }
}