import React from "react";

export default class Rating extends React.Component {

    _ShowRating() {
        switch(this.props.rating){
            case 1: return ('images/Rating1Star.svg');
                break;
            case 2: return ('images/Rating2Stars.svg');
                break;
            case 3: return ('images/Rating3Stars.svg');
                break;
            case 4: return ('images/Rating4Stars.svg');
                break;
            case 5: return ('images/Rating5Stars.svg');
                break;
        }
    }

    render () {
        const imgSrc = this._ShowRating()
        return (
            <img src={imgSrc} alt=""/>
        );
    }
}