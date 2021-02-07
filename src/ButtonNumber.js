import React, { Component } from 'react'

export default class ButtonNumber extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <button id={this.props.numberID} onClick={this.props.onClick}>{this.props.number}</button>
        )
    }
}
