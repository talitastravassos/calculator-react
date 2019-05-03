import React, { Component } from 'react'

export const CalculatorContext = React.createContext({});

export default class CalculatorProvider extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            result: "0"
        }
    }
    
    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    };

    reset = () => {
        this.setState({
            result: 0
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            if (this.state.result == 0){
                this.setState({
                    result: button
                })
            } else {
                this.setState({
                    result: this.state.result + button
                })
            }
        }
    };

    render() {

        const value = {
            ...this.state,
            calculate: this.calculate,
            reset: this.reset,
            backspace: this.backspace,
            onClick: this.onClick
        }

        return (
            <CalculatorContext.Provider value={value}>
              {this.props.children}
            </CalculatorContext.Provider>
        )
  }
}
