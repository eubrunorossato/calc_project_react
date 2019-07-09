import React, { Component } from 'react';
import './Calculator.css';
import Button from '../Components/Button'
import Display from '../Components/Display'

export default class Calculator extends Component{

    clearMemory(){
        console.log('limpar')
    }

    setOperation(operation){
        console.log(operation)
    }

    addDigit(n){
        console.log(n)
    }

    render(){
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)
        const clearMemory = () => this.clearMemory()
        return(
            <div className = "calculator">
                <Display value = {10}/>
                <Button label="AC" click={clearMemory}/>
                <Button label="/"/>
                <Button label="7"/>
                <Button label="8"/>
                <Button label="9"/>
                <Button label="*"/>
                <Button label="4"/>
                <Button label="5"/>
                <Button label="6"/>
                <Button label="-" click={setOperation}/>
                <Button label="1"/>
                <Button label="2"/>
                <Button label="3"/>
                <Button label="+"/>
                <Button label="0"/>
                <Button label="."/>
                <Button label="="/>
            </div>
        )
    }
}