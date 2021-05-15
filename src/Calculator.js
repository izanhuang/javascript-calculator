import React, { Component } from 'react'

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
        var temp;
        var result;
        switch(event.target.id){
            case 'add':
                temp = '+'
                break;
            case 'subtract':
                temp = '-'
                break;
            case 'multiply':
                temp = '*'
                break;
            case 'divide':
                temp = '/'
                break;
            case 'zero':
                temp = '0'
                break;
            case 'one':
                temp = '1'
                break;
            case 'two':
                temp = '2'
                break;
            case 'three':
                temp = '3'
                break;
            case 'four':
                temp = '4'
                break;
            case 'five':
                temp = '5'
                break;
            case 'six':
                temp = '6'
                break;
            case 'seven':
                temp = '7'
                break;
            case 'eight':
                temp = '8'
                break;
            case 'nine':
                temp = '9'
                break;
            case 'decimal':
                temp = '.'
                break;
            case 'equals':
                temp = "="
                break;
            case 'clear':
                temp = "clear"
                break;
            default:
                temp = ''
        }
        if (temp === 'clear'){
            this.setState({
                entireInput: '',
                currentInput: 0
            });
        } else if (temp === '+' || temp === '-' || temp === '/' || temp === '*'){
            if (this.state.entireInput.slice(-1) === temp) {
                this.setState({
                    entireInput: this.state.entireInput + " " + temp,
                    currentInput: temp
                });
            } else if (this.state.entireInput.slice(-2).match( /[\+\*\/-]{2}/ )) {
                this.setState({
                    entireInput: this.state.entireInput.slice(0,-2) + temp,
                    currentInput: temp
                });
            } else if (this.state.entireInput.includes("=")) {
                this.setState({
                    entireInput: this.state.currentInput + temp,
                    currentInput: temp
                });
            } else {
                this.setState({
                    entireInput: this.state.entireInput + temp,
                    currentInput: temp
                });
            }
        } else if (temp === '='){
            result = eval(this.state.entireInput)
            console.log(result)
            this.setState({
                entireInput: this.state.entireInput + "=" + result,
                currentInput: result
            });
        } else if (temp === "" || temp === "0") {
            if (this.state.entireInput.slice(-1) === "0") {
                this.setState({
                    entireInput: this.state.entireInput,
                    currentInput: temp
                });
            } else {
                this.setState({
                    entireInput: this.state.entireInput + temp,
                    currentInput: this.state.entireInput + temp
                });
            }
        } else if (temp === '.'){ // NULL MEANS ADD DOT
            if (this.state.entireInput.match(  /[0-9]+\.[0-9]*$/ )) { 
                //NOT ALLOWED TO ADD DECIMAL POINT, IF THERE WAS A PREVIOUS DECIMAL POINTS FOLLOWED BY ONE OR MORE NUMBERS FOLLOWED BY A MATH FUNCTION
                this.setState({
                    entireInput: this.state.entireInput,
                    currentInput: temp
                });
            } else if (this.state.entireInput.slice(-1).match( /[\+\*\/-]/ )) {
                this.setState({
                    entireInput: this.state.entireInput + '0' + temp,
                    currentInput: temp
                });
            } else {
                this.setState({
                    entireInput: this.state.entireInput + temp,
                    currentInput: this.state.entireInput + temp
                });
            }
        } else {
            this.setState({
                entireInput: this.state.entireInput + temp,
                currentInput: this.state.entireInput + temp
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
                    <button id="divide" className="symbol" onClick={this.handleClick}>/</button>
                    <button id="multiply" className="symbol" onClick={this.handleClick}>x</button>
                    <button id="seven" onClick={this.handleClick}>7</button>
                    <button id="eight" onClick={this.handleClick}>8</button>
                    <button id="nine" onClick={this.handleClick}>9</button>
                    <button id="subtract" className="symbol" onClick={this.handleClick}>-</button>
                    <button id="four" onClick={this.handleClick}>4</button>
                    <button id="five" onClick={this.handleClick}>5</button>
                    <button id="six" onClick={this.handleClick}>6</button>
                    <button id="add" className="symbol" onClick={this.handleClick}>+</button>
                    <button id="one" onClick={this.handleClick}>1</button>
                    <button id="two" onClick={this.handleClick}>2</button>
                    <button id="three" onClick={this.handleClick}>3</button>
                    <button id="zero" className="zero" onClick={this.handleClick}>0</button>
                    <button id="decimal" onClick={this.handleClick}>.</button>
                    <button id="equals" className="equals" onClick={this.handleClick}>=</button>
                </div>
            </div>
        )
    }
}
