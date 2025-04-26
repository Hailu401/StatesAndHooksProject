import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer';

export default class MyCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  allClicksCounter = () => {
    // this.setState((count)=>{return count + 1})
    this.setState((counter)=>{
       return{ count: counter.count + 1}
    })
    console.log("you clicked me");
  };
  render() {
    return (
      <>
        <CounterDisplayer value={{count: this.state.count}} />
        <button onClick={this.allClicksCounter}>Click me</button>
      </>
    );
  }
}
