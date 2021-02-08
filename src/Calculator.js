import React, { Component } from 'react'
import ButtonNumber from './ButtonNumber'


export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            entireInput: '',
            currentInput: '',
            currentValue: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
        var temp;
        var symbol;
        switch(event.target.id){
            case 'clear':
                temp = '0';
                break;
            case 'zero':
                temp = '0';
                break;
            case 'one':
                temp = '1';
                break;
            case 'two':
                temp = '2';
                break;
            case 'three':
                temp = '3';
                break;
            case 'four':
                temp = '4';
                break;
            case 'five':
                temp = '5';
                break;
            case 'six':
            temp = '6';
            break;
            case 'seven':
                temp = '7'
                break;
            case 'eight':
                temp ='8';
                break;
            case 'nine':
                temp = '9'
                break;
            case 'decimal':
                temp = '.'
                break;
            case 'add':
                temp = "+"
                symbol = "+"
                break;
             case 'subtract':
                temp = "-"
                symbol = "-"
                break;
             case 'multiply':
                temp = "*"
                symbol = "*"
                break;
             case 'divide':
                temp = "/"
                symbol = "/"
                break;
            default:
                temp = "="
        }
            if (event.target.id === 'clear'){
                this.setState({
                    entireInput: '',
                    currentInput: 0
                });
            } else if (event.target.id === 'equals'){
                const numRegex = /-?[0-9]+\.?\d+|[0-9]+/g;
                const symRegex = /[/*+-]/g;
                const keysArray = this.state.entireInput.match(numRegex);
                const firstValue = keysArray[0];
                const secondValue = keysArray[1]
                const match1 = this.state.entireInput.match(symRegex);
                const operator = match1.pop();
                //const ans = calculate(firstValue, operator, secondValue);
                let result = ''
                if (operator === '+'){
                    console.log(firstValue, secondValue)
                    console.log(parseFloat(firstValue) + " + " + parseFloat(secondValue))
                    result = parseFloat(firstValue) + parseFloat(secondValue)
                } else if (operator === '-') {
                    console.log(firstValue, secondValue)
                    console.log(parseFloat(firstValue) + " - " + parseFloat(secondValue))
                    result = parseFloat(firstValue) - parseFloat(secondValue)
                } else if (operator === '*') {
                    console.log(firstValue, secondValue)
                    console.log(parseFloat(firstValue) + " * " + parseFloat(secondValue))
                    result = parseFloat(firstValue) * parseFloat(secondValue)
                } else if (operator === '/') {
                    console.log(firstValue, secondValue)
                    console.log(parseFloat(firstValue) + " / " + parseFloat(secondValue))
                    result = parseFloat(firstValue) / parseFloat(secondValue)
                } 
                this.setState({
                    entireInput: this.state.entireInput + temp + result,
                    currentInput: result
                });
            } else {
               
                    this.setState({
                        entireInput: this.state.entireInput + temp,
                        currentInput: temp
                    });
                
            }
            
        // }
    }
    // calculate(n1, operator, n2){
    //     let result = ''
    //     if (operator === '+'){
    //         result = n1 + n2
    //     } else if (operator === '-') {
    //         result = n1 - n2
    //     } else if (operator === '*') {
    //         result = n1 * n2
    //     } else if (operator === '/') {
    //         result = n1 / n2
    //     } 
    //     return result;
    // }
    render() {
        return (
            <div className="calculator">
                <div className="calculator-display"></div>
                    <p>{this.state.entireInput}</p>
                    <p id="display">{this.state.currentInput}</p>
                <div className="calculator-keys">
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
                    <button id="zero" onClick={this.handleClick}>0</button>
                    <button id="decimal" onClick={this.handleClick}>.</button>
                    <button id="equals" className="symbol" onClick={this.handleClick}>=</button>
                </div>
            </div>
        )
    }
}
