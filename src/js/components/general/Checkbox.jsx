import React from "react";

export default class Checkbox extends React.Component {

    render () {
        return (
            <div className="Checkbox">
                <form>
                    {this.props.onSelectFilterValue &&
                    <div className="Box" onClick={this.props.onSelectFilterValue.bind(this, this.props.index, this.props.filterType)}>
                        {this.props.checked && <img src="images/XButtonCheckBox.svg"/>}
                        {!this.props.checked}
                    </div>}
                    <img className="CheckBoxImage" src={this.props.imgSrc}/>
                    <label>{this.props.label}</label>
                    <label className="productCount">{this.props.productCount}</label>
                </form>
            </div>
        )
    }
}