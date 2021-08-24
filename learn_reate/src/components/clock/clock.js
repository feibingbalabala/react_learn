import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 3000)
  }
  componentDidUpdate(currentProps, currentState) {
    // console.log(currentState)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
        <div>当前时间</div>
        { this.state.date.toLocaleTimeString() }
      </div>
    )
  }
}

export default Clock
