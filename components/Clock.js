import React, { Component } from 'react'

class Clock extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { time } = this.props

    return (
      <div>{ time.toTimeString() }</div>
    )
  }
}

export default Clock
