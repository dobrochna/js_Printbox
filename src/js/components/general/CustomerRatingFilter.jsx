import React from "react";
import Checkbox from "./Checkbox.jsx";
import XButton from "./XButton.jsx";

export default class CustomerRatingFilter extends React.Component {

    _ShowRating(){
        return(
            this.props.ratings.map((rating, idx) => {
                return (
                    <Checkbox
                        key={"rating"+idx}
                        index={idx}
                        filterType={rating.filterType}
                        imgSrc={rating.imgSrc}
                        checked={rating.isChecked}
                        productCount={rating.productCount}
                        onSelectFilterValue={this.props.onSelectFilterValue}
                    />
                )
            })
        )
    }

    render() {
        return (
            <div className="CustomerRatingFilter">
                <h3>Customer Rating</h3>
                <p>At least</p>
                <XButton />
                {this._ShowRating()}
            </div>
        )
    }
}