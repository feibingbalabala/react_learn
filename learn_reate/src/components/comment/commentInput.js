import React from 'react'

class commentInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handlerChange = this.handlerChange.bind(this)
    this.handlerSubmit = this.handlerSubmit.bind(this)
  }
  handlerChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  handlerSubmit(e) {
    this.props.onAddComment(this.state.value)
    this.setState({
      value: ''
    })
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={ this.handlerSubmit }>
        <div>
          <label>留言：</label>
        </div>
        <div>
          <input
            placeholder="请输入内容"
            onChange={ this.handlerChange }
            value={ this.state.value }
          />
        </div>
        <div>
          <button type="submit">提交</button>
        </div>
        <div>已经有{ this.props.commentLength }条留言</div>
      </form>
    )
  }
}

export default commentInput
