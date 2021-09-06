# react_learn

## tip

引入ts后腰注意下载ts的react,react-dom

react事件都是事件委托

## 非受控组件\受控组件

表单中所有输入类的dom，现用现取称为非受控组件

```js
import React from 'react'

class demo extends React.Component{
  
  handleSubmit = (e) => {
    e.preventDefault()
    const {username, password} = this
    console.log(`username: ${username.value},password: ${password.value}`)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        用户名<input ref={c => this.username = c} type='text' name='username' />
        密码<input ref={c => this.password = c} type='password' name='password' />
        <button>登录</button>
      </form>
    )
  }
}
export default demo
```

表单中随着我的输入修改state状态，称为受控组件(可以减少ref的使用)

```js
import React from 'react'

class demo extends React.Component{
  state = {
    username: '',
    password: ''
  }

  saveUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  savePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const {username, password} = this.state
    console.log(`username: ${username},password: ${password}`)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        用户名<input onChange={this.saveUsername} type='text' name='username' />
        密码<input onChange={this.savePassword} type='password' name='password' />
        <button>登录</button>
      </form>
    )
  }
}
export default demo
```
