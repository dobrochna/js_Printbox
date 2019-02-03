import React from "react";
import SizeFilter from "./SizeFilter.jsx";
import CustomerRatingFilter from "./CustomerRatingFilter.jsx";
import IndustryFilter from "./IndustryFilter.jsx";
import OrientationFilter from "./OrientationFilter.jsx";
import FavoriteFilter from "./FavoriteFilter.jsx"
import StyleFilter from "./StyleFilter.jsx";
import Color from "./ColorFilter.jsx";


export default class SideBar extends React.Component {
    render () {
        return (
            <div className="SideBar">
                <h1>Narrow results</h1>
                <OrientationFilter orientation={this.props.orientation} onSelectFilterValue={this.props.onSelectFilterValue}/>
                <SizeFilter sizes={this.props.sizes} onSelectFilterValue={this.props.onSelectFilterValue}/>
                <CustomerRatingFilter ratings={this.props.ratings} onSelectFilterValue={this.props.onSelectFilterValue}/>
                <FavoriteFilter favorites={this.props.favorites} onSelectFilterValue={this.props.onSelectFilterValue}/>
                <IndustryFilter industries={this.props.industries} onSelectFilterValue={this.props.onSelectFilterValue}/>
                <Color colors={this.props.colors} onSelectFilterValue={this.props.onSelectFilterValue}/>
                <StyleFilter styles={this.props.styles} onSelectFilterValue={this.props.onSelectFilterValue}/>
            </div>
        )
    }
}