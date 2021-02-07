import React, { Component } from 'react'
import ButtonNumber from './ButtonNumber'

export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            entireInput: '',
            currentInput: '',
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
        var temp;
        var symbol;
        switch(event.target.id){
            case 'add':
                temp = "+"
                symbol = "+"
                break;
            case 'eight':
                temp ='8';
                break;
            case 'seven':
                temp = '7'
                break;
           case 'clear':
                temp = '0';
                break;

        }
        // if (event.target.id === "equals"){
        //     if (symbol === "+") {
        //         this.setState({
        //             entireInput: this.state.currentInput + temp,
        //             currentInput: temp
        //         });
        //     } else {
        //         this.setState({
        //             entireInput: this.state.currentInput + temp.toString,
        //             currentInput: temp
        //         });
        //     }
        // } else {
            console.log(this.state.currentInput, temp, this.state.entireInput)
            this.setState({
                entireInput: this.state.currentInput + temp,
                currentInput: temp
            });
        // }
    }
    render() {
        return (
            <div id="calculator-container">
                <p>{this.state.entireInput}</p>
                <p id="display">{this.state.currentInput}</p>
                <div class="grid-container">
                    <button id="clear" onClick={this.handleClick}>AC</button>
                    <button id="divide">/</button>
                    <button id="multiply">x</button>
                    <button id="seven" onClick={this.handleClick}>7</button>
                    <button id="eight" onClick={this.handleClick}>8</button>
                    <button id="nine" onClick={this.handleClick}>9</button>
                    <button id="subtract">-</button>
                    <button id="four" onClick={this.handleClick}>4</button>
                    <button id="five" onClick={this.handleClick}>5</button>
                    <button id="six" onClick={this.handleClick}>6</button>
                    <button id="add" onClick={this.handleClick}>+</button>
                    <button id="one" onClick={this.handleClick}>1</button>
                    <button id="two" onClick={this.handleClick}>2</button>
                    <button id="three" onClick={this.handleClick}>3</button>
                    <button id="zero" onClick={this.handleClick}>0</button>
                    <button id="decimal">.</button>
                    <button id="equals" onClick={this.handleClick}>=</button>
                </div>
            </div>
        )
    }
}
