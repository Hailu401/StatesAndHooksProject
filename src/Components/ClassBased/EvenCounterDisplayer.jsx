import React, { Component } from "react";

export default class EvenCounterDisplayer extends Component {

    
  render() {
    let { even } = this.props.even;
    return (
      <>
        <div>
          <h1>Even clicks Counter : {even} </h1>
        </div>
      </>
    );
  }
}
