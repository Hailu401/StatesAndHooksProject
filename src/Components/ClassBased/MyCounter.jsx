import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer';


export default class MyCounter extends Component {
  // question 1
  constructor() {
    super();
    this.state = {
      count: 0,
      even: 0
      
    };
  }
  allClicksCounter = () => {
    this.setState((counter) => {
      return { count: counter.count + 1 };
    });
    // console.log("you clicked me");
    // question 2
    this.setState((prevState) => {
      if (prevState.count % 2 === 0) {
        return { even: prevState.count };
      }
    });
  };
  

 
  render() {
    return (
      <>
        <div className="container">
          <h3>Question 1 & 2</h3>
          <button className="btn" onClick={this.allClicksCounter}>
            Click me
          </button>

          <CounterDisplayer value={{ count: this.state.count }} />
          <EvenCounterDisplayer even={{ even: this.state.even}} />
        </div>
      </>
    );
  }
}
