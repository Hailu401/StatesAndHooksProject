import React, { Component } from 'react'

export default class CounterDisplayer extends Component {
    
  render() {
    // console.log(this.props);
let {count} = this.props.value
    

    return (
      <>
        <div>
          <h1>All clicks counter : {count}</h1>

          {/* <h1>All clicks counter : {this.props.count}</h1> */}
        </div>
      </>
    );
  }
}
