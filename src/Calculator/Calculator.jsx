/**
 * Importing the packages, classes, styles, and fixtures
 */
import React from 'react'
import {
    Container,
    CalculatorBody,
    CalculatorScreen,
    CalculatorOperation,
    CalculatorTyped,
    CalculatorRow,
    CalculatorButton,
} from './styled'
import { configData } from './fixture'
/**
 * Calculator class definition
 */
class Calculator extends React.Component {
    /**
     * State initialization
     */
    state = {
        answer: 0,
        typed: 0
    }
    /**
     * Eval calculation of expression in a string format
     */
    eval = (resultInString) => {
        const eValFunc = eval
        return eValFunc(resultInString)
    }
    /**
     * Handle click for every button in the calculator
     */
    handleClick = (event) => {
        const value = event.currentTarget.innerHTML
        if(value === 'C') {
            this.resetButton()
        } else if (value > 0 && value < 10) {
            this.setState({
                typed: (this.state.typed === 0 ? value : this.state.typed + value),
                answer: (this.state.answer === 0 ? value : this.state.answer + value)
            })
        } else if (value === '=') {
            const result = this.eval(this.state.answer)
            this.setState({
                typed: result,
                answer: result
            })
        } else {
            this.setState({ 
                answer: this.state.answer + value,
                typed: 0
            })
        }
    }
    /**
     * Reset function to reset the calculator
     */
    resetButton = () => {
        this.setState({
            typed: 0,
            answer: 0
        })
    }
    /**
     * renderButton() -> To render the calculator buttons 
     */
    renderButton = (data) => {
        return(
            <CalculatorButton onClick={this.handleClick}>{data}</CalculatorButton>
        )
    }
    /**
     * Class default render method
     */
    render() {
        return (
            <Container>
                <CalculatorBody>
                    <CalculatorScreen>
                        <CalculatorOperation>{this.state.answer}</CalculatorOperation>
                        <CalculatorTyped>{this.state.typed}</CalculatorTyped>
                    </CalculatorScreen>
                    <CalculatorRow>
                        {configData.map(this.renderButton)}
                    </CalculatorRow>
                </CalculatorBody>
            </Container>
        )
    }
}

/**
 * exporting the calculator to access anywhere
 */
export { Calculator }
export default { Calculator }
