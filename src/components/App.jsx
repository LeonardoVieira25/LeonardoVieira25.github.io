import React, { Component } from 'react'
import Title from './Title'
import DownArrow from './DownArrow'

export default class App extends Component {
  render() {
    return (
        <div className="App">
            <Title />
            <DownArrow />
        </div>
    )
  }
}
