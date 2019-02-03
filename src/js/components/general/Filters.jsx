import React from "react";
import FilterBox from "./FilterBox.jsx";

export default class Filters extends React.Component {

    _showOrientationFilter() {
        return (
            this.props.orientation.map((orientation, idx) => {
                if (orientation.isChecked) {
                    console.log(orientation.label);
                    return (
                        <FilterBox
                            index={idx}
                            key={"orientationFilter"+idx}
                            label={orientation.label}
                            filterType={orientation.filterType}
                            checked={orientation.isChecked}
                            onSelectFilterValue={this.props.onSelectFilterValue}
                        />
                    )
                }
            })
        )
    }

    _showSizeFilter() {
        return (
            this.props.sizes.map((size, idx) => {
                if (size.isChecked) {
                    console.log(size.label);
                    return (
                        <FilterBox
                            index={idx}
                            key={"sizeFilter"+idx}
                            label={size.label}
                            filterType={size.filterType}
                            checked={size.isChecked}
                            onSelectFilterValue={this.props.onSelectFilterValue}
                        />
                    )
                }
            })
        )
    }

    _showIndustriesFilter() {
        return (
            this.props.industries.map((industry, idx) => {
                if (industry.isChecked) {
                    console.log(industry.label);
                    return (
                        <FilterBox
                            index={idx}
                            key={"industryFilter"+idx}
                            label={industry.label}
                            filterType={industry.filterType}
                            checked={industry.isChecked}
                            onSelectFilterValue={this.props.onSelectFilterValue}
                        />
                    )
                }
            })
        )
    }

    _showStylesFilter() {
        return (
            this.props.styles.map((style, idx) => {
                if (style.isChecked) {
                    console.log(style.label);
                    return (
                        <FilterBox
                            index={idx}
                            key={"styleFilter"+idx}
                            label={style.label}
                            filterType={style.filterType}
                            checked={style.isChecked}
                            onSelectFilterValue={this.props.onSelectFilterValue}
                        />
                    )
                }
            })
        )
    }

    render () {
        return (
            <div className="Filters">
                <h2>Showing filters: </h2>
                {this._showOrientationFilter()}
                {this._showSizeFilter()}
                {this._showIndustriesFilter()}
                {this._showStylesFilter()}
            </div>

        )
    }
}
