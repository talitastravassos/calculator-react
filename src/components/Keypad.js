import React, { useContext } from 'react';
import { CalculatorContext } from '../context/Calculator';

const Keypad = (props) => {

  const { onClick } = useContext(CalculatorContext)

  return (
    <div className="button">
        <button name="(" onClick={e => onClick(e.target.name)}>(</button>
        <button name="CE" onClick={e => onClick(e.target.name)}>CE</button>
        <button name=")" onClick={e => onClick(e.target.name)}>)</button>
        <button id="clear" name="C" onClick={e => onClick(e.target.name)}>C</button><br/>


        <button id="one" name="1" onClick={e => onClick(e.target.name)}>1</button>
        <button id="two" name="2" onClick={e => onClick(e.target.name)}>2</button>
        <button id="three" name="3" onClick={e => onClick(e.target.name)}>3</button>
        <button id="add" name="+" onClick={e => onClick(e.target.name)}>+</button><br/>


        <button id="four" name="4" onClick={e => onClick(e.target.name)}>4</button>
        <button id="five" name="5" onClick={e => onClick(e.target.name)}>5</button>
        <button id="six" name="6" onClick={e => onClick(e.target.name)}>6</button>
        <button id="subtract" name="-" onClick={e => onClick(e.target.name)}>-</button><br/>

        <button id="seven" name="7" onClick={e => onClick(e.target.name)}>7</button>
        <button id="eight" name="8" onClick={e => onClick(e.target.name)}>8</button>
        <button id="nine" name="9" onClick={e => onClick(e.target.name)}>9</button>
        <button id="multiply" name="*" onClick={e => onClick(e.target.name)}>x</button><br/>


        <button id="decimal" name="." onClick={e => onClick(e.target.name)}>.</button>
        <button id="zero" name="0" onClick={e => onClick(e.target.name)}>0</button>
        <button id="equals" name="=" onClick={e => onClick(e.target.name)}>=</button>
        <button id="divide" name="/" onClick={e => onClick(e.target.name)}>÷</button><br/>
    </div>
  )
}

export default Keypad

