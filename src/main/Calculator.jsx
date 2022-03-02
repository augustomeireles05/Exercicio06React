import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/Button/Button'

import Display from '../components/Display/Display'

class Calculator extends Component {


    state = {
        displayValue: '0', //Criei um estado inicial para o display para zero
        numA: null,
        numB: null,
    }



    clearMemory = () => {
        console.log("limpar tela")
        // Mudando a classe de um estado:
        this.setState({displayValue: 0})
    }

    setOperation = (operation) => {
        // console.log("setando operação", operation)
        // Mudando a classe de um estado:
        // this.setState({displayValue: operation})
        console.log(this.state.numA, this.state.numB)

        if (operation == "+") {
            let result = parseFloat(this.state.numA + this.state.numB);
            this.setState({displayValue: result})
        } else if (operation == "-") {
            let result = parseFloat(this.state.numA - this.state.numB);
            this.setState({displayValue: result})
        } else if (operation == "*") {
            let result = parseFloat(this.state.numA * this.state.numB);
            this.setState({displayValue: result})
        } else if (operation == "/") {
            let result = parseFloat(this.state.numA / this.state.numB);
            this.setState({displayValue: result})
        }

    }

    addDigit = (digit) => {

        if (this.state.numA == null) {
            this.setState({numA: parseInt(digit)})
            return
        }
  
        this.setState({numB: parseInt(digit)})

        // console.log("adicionando digito", digit)
        // Mudando a classe de um estado:

        this.setState({displayValue: digit})
        
    }


    render() {
        return (

            <div className="calculator">
                {/* Calculadora component */}

                <Display value={this.state.displayValue}/>
                
                <Button label="AC" triple clear={this.clearMemory}/>

                <Button label="/" operation click={this.setOperation} />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />

                <Button label="*" operation click={this.setOperation} />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />

                <Button label="-" operation click={this.setOperation} />
                <Button label="3" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="1" click={this.addDigit} />

                <Button label="+" operation click={this.setOperation} />
                <Button label="0" double click={this.addDigit} />
                <Button label="." click={this.addDigit} />
                <Button label="=" operation click={this.setOperation} />
            </div>
        )
    }
}


export default Calculator