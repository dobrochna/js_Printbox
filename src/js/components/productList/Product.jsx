import React from "react";
import Favourite from "./Favourite.jsx";
import Rating from "./Rating.jsx";

export default class Product extends React.Component {

    render () {
        return (
            <div className="Product">
                <img src={this.props.imgSrc} alt="i nic!!!"/>
                <Favourite isFavourite={this.props.isFavourite}/>
                <Rating rating={this.props.rating}/>
                <p>{this.props.name}</p>
                <p>{this.props.size}</p>
            </div>
        );
    }
}