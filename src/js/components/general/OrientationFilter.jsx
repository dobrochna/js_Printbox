import React from "react";
import XButton from "./XButton.jsx";

export default class OrientationFilter extends React.Component {

    render () {
        return (
            <div className="OrientationFilter">
                <h3>Orientation</h3>
                <XButton />
                <div>
                    <svg onClick={this.props.onSelectFilterValue.bind(this, 0, this.props.orientation[0].filterType)} width="1.2cm" height="0.8cm">
                        <path  fill={this.props.orientation[0].isChecked ? "rgb(255, 255, 139)" : "rgb(218, 218, 218)"}
                               d="M2.000,-0.000 L43.000,-0.000 C44.104,-0.000 45.000,0.895 45.000,2.000 L45.000,28.000 C45.000,29.104 44.104,30.000 43.000,30.000 L2.000,30.000 C0.895,30.000 -0.000,29.104 -0.000,28.000 L-0.000,2.000 C-0.000,0.895 0.895,-0.000 2.000,-0.000 Z"/>
                        <path className="Yes" transform="scale(0.5) translate(25, 10)" fill={this.props.orientation[0].isChecked ? "rgb(255, 255, 255)" : "rgb(218, 218, 218)"} d="M39.329,5.629c-0.927,0-1.819,0.209-2.651,0.622c-10.119,4.997-16.997,14.53-20.585,20.624   l-6.626-4.694c-1.019-0.723-2.218-1.105-3.465-1.105c-1.944,0-3.776,0.947-4.899,2.532C-0.81,26.307-0.17,30.06,2.53,31.972   l8.174,5.791c1.797,1.273,3.86,1.946,5.967,1.946c0.74,0,1.484-0.084,2.214-0.25c2.853-0.649,5.348-2.567,6.845-5.262   c2.614-4.71,8.204-13.207,16.262-17.187c1.438-0.709,2.512-1.936,3.026-3.454c0.515-1.518,0.407-3.146-0.303-4.583   C43.696,6.91,41.633,5.629,39.329,5.629z M42.176,12.592c-0.258,0.759-0.795,1.373-1.514,1.728   c-8.789,4.34-14.772,13.404-17.557,18.42c-1.083,1.951-2.864,3.333-4.888,3.794c-1.976,0.448-4.045,0.011-5.78-1.219l-8.174-5.79   c-1.35-0.956-1.67-2.832-0.714-4.182c0.562-0.793,1.479-1.267,2.452-1.267c0.622,0,1.221,0.191,1.73,0.553l9.34,6.616l0.812-1.462   c3.122-5.615,9.887-15.789,20.122-20.843c0.417-0.206,0.861-0.311,1.322-0.311c1.153,0,2.186,0.641,2.695,1.672   C42.379,11.02,42.433,11.834,42.176,12.592z" />

                    </svg>
                    <label>{this.props.orientation[0].label}</label>
                </div>
                <div>
                    <svg onClick={this.props.onSelectFilterValue.bind(this, 1, this.props.orientation[1].filterType)} width="0.8cm" height="1.20cm">
                        <path fill={this.props.orientation[1].isChecked ? "rgb(255, 255, 139)" : "rgb(218, 218, 218)"}
                              d="M2.000,-0.000 L28.000,-0.000 C29.105,-0.000 30.000,0.895 30.000,2.000 L30.000,43.000 C30.000,44.105 29.105,45.000 28.000,45.000 L2.000,45.000 C0.895,45.000 -0.000,44.105 -0.000,43.000 L-0.000,2.000 C-0.000,0.895 0.895,-0.000 2.000,-0.000 Z"/>
                        <path className="Yes" transform="scale(0.5) translate(10, 25)" fill={this.props.orientation[1].isChecked ? "rgb(255, 255, 255)" : "rgb(218, 218, 218)"} d="M39.329,5.629c-0.927,0-1.819,0.209-2.651,0.622c-10.119,4.997-16.997,14.53-20.585,20.624   l-6.626-4.694c-1.019-0.723-2.218-1.105-3.465-1.105c-1.944,0-3.776,0.947-4.899,2.532C-0.81,26.307-0.17,30.06,2.53,31.972   l8.174,5.791c1.797,1.273,3.86,1.946,5.967,1.946c0.74,0,1.484-0.084,2.214-0.25c2.853-0.649,5.348-2.567,6.845-5.262   c2.614-4.71,8.204-13.207,16.262-17.187c1.438-0.709,2.512-1.936,3.026-3.454c0.515-1.518,0.407-3.146-0.303-4.583   C43.696,6.91,41.633,5.629,39.329,5.629z M42.176,12.592c-0.258,0.759-0.795,1.373-1.514,1.728   c-8.789,4.34-14.772,13.404-17.557,18.42c-1.083,1.951-2.864,3.333-4.888,3.794c-1.976,0.448-4.045,0.011-5.78-1.219l-8.174-5.79   c-1.35-0.956-1.67-2.832-0.714-4.182c0.562-0.793,1.479-1.267,2.452-1.267c0.622,0,1.221,0.191,1.73,0.553l9.34,6.616l0.812-1.462   c3.122-5.615,9.887-15.789,20.122-20.843c0.417-0.206,0.861-0.311,1.322-0.311c1.153,0,2.186,0.641,2.695,1.672   C42.379,11.02,42.433,11.834,42.176,12.592z" />
                    </svg>
                    <label>{this.props.orientation[1].label}</label>
                </div>

            </div>
        )
    }
}