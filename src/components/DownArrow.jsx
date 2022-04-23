import React, { Component } from 'react'
import downArrow from './svg/downArrow.svg'

export default class DownArrow extends Component {
  render() {
    return (
      <div className="DownArrow">
          <img src={downArrow} alt="down Arrow"/>
      </div>
    )
  }
}
