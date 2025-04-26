import React, { Component } from 'react'

export default class CounterDisplayer extends Component {
    
  render() {
    // console.log(this.props);
let {count} = this.props.value
    // console.log(valueCount);

    return (
      <>
        <h1>Count:{count}</h1>
      </>
    );
  }
}
