import React, { Component } from 'react'

export default class CounterDisplayer extends Component {
    
  render() {
    // console.log(this.props);
let {count} = this.props.value
    // console.log(valueCount);

    return (
      <>
        <div className="">
          <h1>All clicks counter : {count}</h1>
          
        </div>
      </>
    );
  }
}
