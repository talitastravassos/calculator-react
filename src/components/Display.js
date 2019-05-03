import React, { useContext } from 'react';
import { CalculatorContext } from '../context/Calculator';


const Display = props => {

    const { result } = useContext(CalculatorContext)

  return (
    <div id="display" className="result">
        <p>{result}</p>
    </div>
  )
}

export default Display

