import React, { useContext } from 'react';
import { CalculatorContext } from '../context/Calculator';

const Keypad = (props) => {

  const { onClick } = useContext(CalculatorContext)

  return (
    <div className="button keypad">
        <button className="btn" name="CE" id="back" onClick={e => onClick(e.target.name)}>CE</button>
        <button className="btn" id="clear" name="C" onClick={e => onClick(e.target.name)}>C</button><br/>


        <button className="btn" id="seven" name="7" onClick={e => onClick(e.target.name)}>7</button>
        <button className="btn" id="eight" name="8" onClick={e => onClick(e.target.name)}>8</button>
        <button className="btn" id="nine" name="9" onClick={e => onClick(e.target.name)}>9</button>
        <button className="btn" id="subtract" name="-" onClick={e => onClick(e.target.name)}>-</button><br/>

        <button className="btn" id="four" name="4" onClick={e => onClick(e.target.name)}>4</button>
        <button className="btn" id="five" name="5" onClick={e => onClick(e.target.name)}>5</button>
        <button className="btn" id="six" name="6" onClick={e => onClick(e.target.name)}>6</button>
        <button className="btn" id="add" name="+" onClick={e => onClick(e.target.name)}>+</button><br/>


        <button className="btn" id="one" name="1" onClick={e => onClick(e.target.name)}>1</button>
        <button className="btn" id="two" name="2" onClick={e => onClick(e.target.name)}>2</button>
        <button className="btn" id="three" name="3" onClick={e => onClick(e.target.name)}>3</button>
        <button className="btn" id="multiply" name="*" onClick={e => onClick(e.target.name)}>x</button><br/>

        <button className="btn" name="(" id="parent1" onClick={e => onClick(e.target.name)}>(</button>
        <button className="btn" id="decimal" name="." onClick={e => onClick(e.target.name)}>.</button>
        <button className="btn" name=")" id="parent2" onClick={e => onClick(e.target.name)}>)</button>

        <button className="btn" id="zero" name="0" onClick={e => onClick(e.target.name)}>0</button>
        <button className="btn" id="divide" name="/" onClick={e => onClick(e.target.name)}>÷</button><br/>
        <button className="btn" id="equals" name="=" onClick={e => onClick(e.target.name)}>=</button>


    </div>
  )
}

export default Keypad

