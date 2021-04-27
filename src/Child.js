import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  constructor() {
    super()
    this.state = {
      color: 
    }
  }

  render() {
    return (
      <div
        className="child"
        style={{backgroundColor: this.props.color}}
        onClick={this.props.handleColorChange}
      ></div>
    )
  }
}

export default Child
