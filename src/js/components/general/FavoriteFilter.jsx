import React from "react";
import Checkbox from "./Checkbox.jsx";
import XButton from "./XButton.jsx";

export default class FavoriteFilter extends React.Component {


    render() {
        return (
            <div className="FavoriteFilter">
                <h3>Favorite</h3>
                <XButton />
                <Checkbox
                    index={0}
                    filterType={this.props.favorites[0].filterType}
                    label={this.props.favorites[0].label}
                    productCount={this.props.favorites[0].productCount}
                    checked={this.props.favorites[0].isChecked}
                    onSelectFilterValue={this.props.onSelectFilterValue}
                />
            </div>
        )
    }

}