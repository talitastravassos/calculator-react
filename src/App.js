import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Keypad from './components/Keypad';
import CalculatorProvider from './context/Calculator';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {

  render(){
  return (
    <CalculatorProvider>
        <Header/>
          <div className="App">
              <div className="calculator">
                <Display/>
                <Keypad/>
              </div>
            <Footer/>
          </div>
    </CalculatorProvider>
  );
}
}

export default App;