import React, { useContext } from 'react';
import { CalculatorContext } from '../context/Calculator';


const Display = props => {

    const { result } = useContext(CalculatorContext)

  return (
    <div className="result">
        <p>{result}</p>
    </div>
  )
}

export default Display

