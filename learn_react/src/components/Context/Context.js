import React from 'react'

class Context extends React.Component {
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
    e.preventDefault()
    alert('你输入了：' + this.state.value)
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
      </form>
    )
  }
}

export default Context
