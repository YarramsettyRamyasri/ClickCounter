import React, { Component } from 'react'
import UpdatedComponent from './WithCount'

class ClickCounter extends Component {
    
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <button onClick={incrementCount}>Click{count}</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)