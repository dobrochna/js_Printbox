import React from "react";

export default class DisplayMode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSet4: true,
            isSet3: false,
            isSet2: false
        }
    }

    _setView4 () {
        this.setState({
            isSet4: true,
            isSet3: false,
            isSet2: false
        });
    }

    _setView3 () {
        this.setState({
            isSet3: true,
            isSet4: false,
            isSet2: false
        });
    }

    _setView2 () {
        this.setState({
            isSet2: true,
            isSet3: false,
            isSet4: false
        });
    }

    render () {
        const backSet = "#AFCED0";
        const backNotSet = "white";
        return (
            <div className="DisplayMode">
                <svg onClick={this._setView4.bind(this)} width="29" height="29">
                    <g transform="scale(0.5)">
                        <rect x="0" y="0" fill={this.state.isSet4 ? backSet : backNotSet} width="58" height="58"/>
                        <g>
                            <rect x="29" y="5" fill={this.state.isSet4 ? backSet : backNotSet} width="12" height="48"/>
                            <path fill="#26B99A" d="M42,54H28V4h14V54z M30,52h10V6H30V52z"/>
                        </g>
                        <g>
                            <rect x="17" y="5" fill={this.state.isSet4 ? backSet : backNotSet} width="12" height="48"/>
                            <path fill="#26B99A" d="M30,54H16V4h14V54z M18,52h10V6H18V52z"/>
                        </g>
                        <g>
                            <rect x="5" y="5" fill={this.state.isSet4 ? backSet : backNotSet} width="12" height="48"/>
                            <path fill="#26B99A" d="M18,54H4V4h14V54z M6,52h10V6H6V52z"/>
                        </g>
                        <g>
                            <rect x="41" y="5" fill={this.state.isSet4 ? backSet : backNotSet} width="12" height="48"/>
                            <path fill="#26B99A" d="M54,54H40V4h14V54z M42,52h10V6H42V52z"/>
                        </g>
                    </g>
                </svg>
                <svg onClick={this._setView3.bind(this)} width="29" height="29">
                    <g transform="scale(0.5)">
                        <rect fill={this.state.isSet3 ? backSet : backNotSet} width="58" height="58"/>
                        <g>
                            <rect x="37" y="5" fill={this.state.isSet3 ? backSet : backNotSet} width="16" height="12"/>
                            <path fill="#26B99A" d="M54,18H36V4h18V18z M38,16h14V6H38V16z"/>
                        </g>
                        <g>
                            <rect x="37" y="17" fill={this.state.isSet3 ? backSet : backNotSet} width="16" height="12"/>
                            <path fill="#26B99A" d="M54,30H36V16h18V30z M38,28h14V18H38V28z"/>
                        </g>
                        <g>
                            <rect x="37" y="29" fill={this.state.isSet3 ? backSet : backNotSet} width="16" height="12"/>
                            <path fill="#26B99A" d="M54,42H36V28h18V42z M38,40h14V30H38V40z"/>
                        </g>
                        <g>
                            <rect x="37" y="41" fill={this.state.isSet3 ? backSet : backNotSet} width="16" height="12"/>
                            <path fill="#26B99A" d="M54,54H36V40h18V54z M38,52h14V42H38V52z"/>
                        </g>
                        <g>
                            <rect x="21" y="5" fill={this.state.isSet3 ? backSet : backNotSet} width="16" height="12"/>
                            <path fill="#26B99A" d="M38,18H20V4h18V18z M22,16h14V6H22V16z"/>
                        </g>
                        <g>
                            <rect x="21" y="17" fill={this.state.isSet3 ? backSet : backNotSet} width="16" height="12"/>
                            <path fill="#26B99A" d="M38,30H20V16h18V30z M22,28h14V18H22V28z"/>
                        </g>
                        <g>
                            <rect x="21" y="29" fill={this.state.isSet3 ? backSet : backNotSet} width="16" height="12"/>
                            <path fill="#26B99A" d="M38,42H20V28h18V42z M22,40h14V30H22V40z"/>
                        </g>
                        <g>
                            <rect x="21" y="41" fill={this.state.isSet3 ? backSet : backNotSet} width="16" height="12"/>
                            <path fill="#26B99A" d="M38,54H20V40h18V54z M22,52h14V42H22V52z"/>
                        </g>
                        <g>
                            <rect x="5" y="5" fill={this.state.isSet3 ? backSet : backNotSet} width="16" height="12"/>
                            <path fill="#26B99A" d="M22,18H4V4h18V18z M6,16h14V6H6V16z"/>
                        </g>
                        <g>
                            <rect x="5" y="17" fill={this.state.isSet3 ? backSet : backNotSet} width="16" height="12"/>
                            <path fill="#26B99A" d="M22,30H4V16h18V30z M6,28h14V18H6V28z"/>
                        </g>
                        <g>
                            <rect x="5" y="29" fill={this.state.isSet3 ? backSet : backNotSet} width="16" height="12"/>
                            <path fill="#26B99A" d="M22,42H4V28h18V42z M6,40h14V30H6V40z"/>
                        </g>
                        <g>
                            <rect x="5" y="41" fill={this.state.isSet3 ? backSet : backNotSet} width="16" height="12"/>
                            <path fill="#26B99A" d="M22,54H4V40h18V54z M6,52h14V42H6V52z"/>
                        </g>
                    </g>
                </svg>
                <svg onClick={this._setView2.bind(this)} width="29" height="29">
                    <g transform="scale(0.5)">
                        <rect fill={this.state.isSet2 ? backSet : backNotSet} width="58" height="58"/>
                        <g>
                            <rect x="5" y="5" fill={this.state.isSet2 ? backSet : backNotSet} width="48" height="48"/>
                            <path fill="#26B99A" d="M54,54H4V4h50V54z M6,52h46V6H6V52z"/>
                        </g>
                        <g>
                            <line fill="#556080" x1="29" y1="5" x2="29" y2="53"/>
                            <path fill="#26B99A" d="M29,54c-0.552,0-1-0.447-1-1V5c0-0.553,0.448-1,1-1s1,0.447,1,1v48C30,53.553,29.552,54,29,54z"/>
                        </g>
                        <g>
                            <line fill="#556080" x1="5" y1="29" x2="53" y2="29"/>
                            <path fill="#26B99A" d="M53,30H5c-0.552,0-1-0.447-1-1s0.448-1,1-1h48c0.552,0,1,0.447,1,1S53.552,30,53,30z"/>
                        </g>
                    </g>
                </svg>
            </div>
        )
    }

}