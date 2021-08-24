import React from 'react'

class AddButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
    // 如果在调用时选择箭头函数则不需要这行
    this.add = this.add.bind(this)
  }
  add() {
    this.setState({
      num: this.state.num + 1
    })
  }
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.add}
        >
          { this.state.num }
        </button>
        或者使用尖头函数
        <button
          type="button"
          onClick={() => { this.add() }}
        >
          { this.state.num }
        </button>
      </div>
    )
  }
}
export default AddButton
