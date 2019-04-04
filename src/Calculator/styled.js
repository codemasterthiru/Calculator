/**
 * importing the styled from styled-components to render the html tags
 */
import styled from 'styled-components'

const Container = styled.div`
    width: 400px;
    margin: auto;
`
const CalculatorBody = styled.div`
    margin: auto;
    min-height: 400px;
    border: solid 1px #3A4655;
    box-shadow: 0 8px 50px -7px black;
`
const CalculatorScreen = styled.div`
    background: #3A4655;
    height: 150px;
    padding: 20px;
`
const CalculatorOperation = styled.div`
    text-align: right;
    color: #727B86;
    font-size: 21px;
    padding-bottom: 10px;
    border-bottom: dotted 1px;
`
const CalculatorTyped = styled.div`
    margin-top: 20px;
    font-size: 45px;
    text-align: right;
    color: #fff;
`
const CalculatorRow = styled.div`
    background: #3C4857;
`
const CalculatorButton = styled.div`
    width: 15%;
    background: #425062;
    color: #fff;
    padding: 20px;
    display: inline-block;
    font-size: 25px;
    text-align: center;
    vertical-align: middle;
    margin-right: -4px;
    border-right: solid 2px #3C4857;
    border-bottom: solid 2px #3C4857;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #3cc5a6;
    }
`

/**
 * exporting the const variable styles to use as jsx elements,
 * in the required place.
 */
export {
    Container,
    CalculatorBody,
    CalculatorScreen,
    CalculatorOperation,
    CalculatorTyped,
    CalculatorRow,
    CalculatorButton,
}