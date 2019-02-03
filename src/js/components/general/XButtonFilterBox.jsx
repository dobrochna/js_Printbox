import React from "react";

export default class XButtonFilterBox extends React.Component {

    render() {
        return (
            <div className="Xbutton">
                <img src="images/XButton.svg"
                     /*onClick={this.props.onSelectFilterValue.bind(this, this.props.index, this.props.filterType)}*//>
            </div>
        )
    }
}