import React, { Component } from 'react'
import ButtonNumber from './ButtonNumber'

export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            entireInput: '',
            currentInput: '',
            next: '',
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
        var result;
        if (event.target.id === 'clear'){
            this.setState({
                entireInput: '',
                currentInput: 0
            });
        } else if (event.target.id === '+' || event.target.id === '-' || event.target.id === '/' || event.target.id === '*'){
            if (this.state.entireInput.includes("=")) {
                this.setState({
                    entireInput: this.state.currentInput + event.target.id,
                    currentInput: event.target.id
                });
            } else {
                this.setState({
                    entireInput: this.state.entireInput + event.target.id,
                    currentInput: event.target.id
                });
            }
        } else if (event.target.id === 'equals'){
            result = eval(this.state.entireInput)
            this.setState({
                entireInput: this.state.entireInput + "=" + result,
                currentInput: result
            });
        } else {
            this.setState({
                entireInput: this.state.entireInput + event.target.id,
                currentInput: event.target.id
            });
        }
    }

    render() {
        return (
            <div className="calculator">
                <div className="calculator-display"></div>
                    <p id="display-top">{this.state.entireInput}</p>
                    <p id="display">{this.state.currentInput}</p>
                <div className="calculator-div">
                    <button id="clear" onClick={this.handleClick}>AC</button>
                    <button id="/" className="symbol" onClick={this.handleClick}>/</button>
                    <button id="*" className="symbol" onClick={this.handleClick}>x</button>
                    <button id="7" onClick={this.handleClick}>7</button>
                    <button id="8" onClick={this.handleClick}>8</button>
                    <button id="9" onClick={this.handleClick}>9</button>
                    <button id="-" className="symbol" onClick={this.handleClick}>-</button>
                    <button id="4" onClick={this.handleClick}>4</button>
                    <button id="5" onClick={this.handleClick}>5</button>
                    <button id="6" onClick={this.handleClick}>6</button>
                    <button id="+" className="symbol" onClick={this.handleClick}>+</button>
                    <button id="1" onClick={this.handleClick}>1</button>
                    <button id="2" onClick={this.handleClick}>2</button>
                    <button id="3" onClick={this.handleClick}>3</button>
                    <button id="0" className="zero" onClick={this.handleClick}>0</button>
                    <button id="." onClick={this.handleClick}>.</button>
                    <button id="equals" className="equals" onClick={this.handleClick}>=</button>
                </div>
            </div>
        )
    }
}
