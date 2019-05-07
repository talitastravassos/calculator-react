import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';
import CalculatorProvider from './context/Calculator';

class App extends Component {

  render(){
  return (
    <CalculatorProvider>
      <div className="App">
        <div className="calculator">
          <Display/>
          <Keypad/>
        </div>
      </div>
    </CalculatorProvider>
  );
}
}

export default App;