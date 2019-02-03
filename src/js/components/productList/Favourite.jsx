import React from "react";


export default class Favourite extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isFavourite: this.props.isFavourite
        };
    }

    _setFavourite() {
        this.setState({
            isFavourite: !this.state.isFavourite
        });
    }

    render () {
        return (
            <div className="Favourite">
                <svg onClick={this._setFavourite.bind(this)} width="0.5cm" height="0.5cm">
                    <path fill={this.state.isFavourite ? "rgb(229, 57, 53)" : "rgb(218, 218, 218)"}
                          d="M16.662,9.219 L16.987,9.501 L9.498,15.988 L2.013,9.498 L2.337,9.218 C0.936,8.332 -0.000,6.780 -0.000,5.000 C-0.000,2.239 2.238,-0.000 5.000,-0.000 C6.991,-0.000 8.696,1.172 9.500,2.856 C10.304,1.172 12.009,-0.000 14.000,-0.000 C16.761,-0.000 19.000,2.239 19.000,5.000 C19.000,6.780 18.063,8.333 16.662,9.219 Z"/>
                </svg>
            </div>
        );
    }
}





