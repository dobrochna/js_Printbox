import React from "react";
import XButton from "./XButton.jsx";

export default class ColorFilter extends React.Component {

    _showColors () {
        return (
            this.props.colors.map((color) => {
                return (
                    <ColorBox
                        key={color.name}
                        colorNumber={color.colorNumber}
                    />
                )
            })
        );
    }

    render () {
        return (
            <div className="ColorFilter">
                <h3>Color</h3>
                <p>Choose color(s):</p>
                <XButton/>
                {this._showColors()}
                <svg width="1.1cm" height="1.1cm">
                    <path transform="scale(0.5) translate(25,20)" fill="black" d="M22,44c-3.309,0-6-2.665-6-5.941V28H5.941C2.665,28,0,25.309,0,22s2.665-6,5.941-6H16V5.941C16,2.665,18.691,0,22,0  s6,2.665,6,5.941V16h10.059C41.335,16,44,18.691,44,22s-2.665,6-5.941,6H28v10.059C28,41.335,25.309,44,22,44z M5.941,18  C3.805,18,2,19.832,2,22s1.805,4,3.941,4H18v12.059C18,40.195,19.832,42,22,42s4-1.805,4-3.941V26h12.059C40.195,26,42,24.168,42,22  s-1.805-4-3.941-4H26V5.941C26,3.805,24.168,2,22,2s-4,1.805-4,3.941V18H5.941z" />
                </svg>
                <p>or</p>
                <p>Use colors from your logo</p>
                <button>UPLOAD LOGO</button>
            </div>
        )
    }
}

class ColorBox extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isChecked: this.props.isChecked
        };
    }
    _setColor() {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }

    render () {
        return (
            <svg className="ColorBox" width="1.1cm" height="1.1cm" onClick={this._setColor.bind(this)}>
                <path transform="scale(0.95)" stroke={this.state.isChecked ? "rgb(255, 255, 255)" : this.props.colorNumber} strokeWidth="4px" strokeLinecap="butt" strokeLinejoin="miter" fill={this.props.colorNumber}
                      d="M4.000,2.000 L40.000,2.000 C41.105,2.000 42.000,2.895 42.000,4.000 L42.000,40.000 C42.000,41.104 41.105,42.000 40.000,42.000 L4.000,42.000 C2.895,42.000 2.000,41.104 2.000,40.000 L2.000,4.000 C2.000,2.895 2.895,2.000 4.000,2.000 Z"/>
                <path className="Yes" transform="scale(0.5) translate(20, 20)" fill={this.state.isChecked ? "rgb(255, 255, 255)" : this.props.colorNumber} d="M39.329,5.629c-0.927,0-1.819,0.209-2.651,0.622c-10.119,4.997-16.997,14.53-20.585,20.624   l-6.626-4.694c-1.019-0.723-2.218-1.105-3.465-1.105c-1.944,0-3.776,0.947-4.899,2.532C-0.81,26.307-0.17,30.06,2.53,31.972   l8.174,5.791c1.797,1.273,3.86,1.946,5.967,1.946c0.74,0,1.484-0.084,2.214-0.25c2.853-0.649,5.348-2.567,6.845-5.262   c2.614-4.71,8.204-13.207,16.262-17.187c1.438-0.709,2.512-1.936,3.026-3.454c0.515-1.518,0.407-3.146-0.303-4.583   C43.696,6.91,41.633,5.629,39.329,5.629z M42.176,12.592c-0.258,0.759-0.795,1.373-1.514,1.728   c-8.789,4.34-14.772,13.404-17.557,18.42c-1.083,1.951-2.864,3.333-4.888,3.794c-1.976,0.448-4.045,0.011-5.78-1.219l-8.174-5.79   c-1.35-0.956-1.67-2.832-0.714-4.182c0.562-0.793,1.479-1.267,2.452-1.267c0.622,0,1.221,0.191,1.73,0.553l9.34,6.616l0.812-1.462   c3.122-5.615,9.887-15.789,20.122-20.843c0.417-0.206,0.861-0.311,1.322-0.311c1.153,0,2.186,0.641,2.695,1.672   C42.379,11.02,42.433,11.834,42.176,12.592z" />
            </svg>
        )
    }
}


