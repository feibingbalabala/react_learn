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

## 高阶函数-函数柯里化

如果一个函数满足下面两个规范任何一个就是高阶函数
1、若A函数，接收的参数是一个函数，那么A就可以称为高阶函数
2、若A函数，调用的返回值依然是一个函数，那么A就可以称为高阶函数

常见的高阶函数：promise、setTimeout、arr.map()

```js
import React from 'react'

class demo extends React.Component{
  
  saveFormData = (dataType) => {
    return (e) => {
      this.setState({[dataType]: e.target.value})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {username, password} = this
    console.log(`username: ${username.value},password: ${password.value}`)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        用户名<input onChange={this.saveFormData('username')} type='text' name='username' />
        密码<input onChange={this.saveFormData('password')} type='password' name='password' />
        <button>登录</button>
      </form>
    )
  }
}
export default demo
```

函数的柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式

## 生命周期

![生命周期](./README_IMG/react_shenminzhouqi.webp)

初始化阶段：由ReactDom.render()触发--初次渲染

1. construct()
2. getDerivedStateFromProps
3. render()
4. componentDidMount()

根新阶段：由组件内部this.setState()或父组件重新render()

1. getDerivedStateFromProps
2. shouldCompinentUpdate()
3. render()
4. getSnapshostBeforeUpdate
5. componentDidUpdate()

卸载组件：由ReactDom.unmountComponentAtNode()触发

1. compinentWillUnmount()

tip: 


1. 挂载时componentDidMount

组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染

2. 更新时componentDidUpdate

组件更新完毕后，react只会在第一次初始化成功会进入componentDidmount,之后每次重新渲染后都会进入这个生命周期，这里可以拿到prevProps和prevState，即更新前的props和state。

3. 卸载时componentDidUnmount

在此处完成组件的卸载和数据的销毁。

clear你在组建中所有的setTimeout,setInterval移除所有组建中的监听 removeEventListener

## key

当状态中的数据发生变化时，react会根据新数据生成新的虚拟dom，随后react进行新的虚拟dom和旧的虚拟dom的diff比较，规则如下：

1. 旧的虚拟dom中找到了新的虚拟dom中相同的key，若虚拟dom的内容没有变，直接使用之前的真实dom；若虚拟dom中内容变了，则生成新的真实dom，随后替换调页面中之前的真实dom。
2. 旧的虚拟dom中未找到与新的虚拟dom相同的key，根据数据创建新的虚拟dom，随后渲染到页面。

用index作为key可能会引发的问题：

1. 若对数据进行：逆序添加、逆序删除等破坏顺序的操作，会产生没有必要的真实dom更新更新，界面效果没有问题，但效率低。
2. 如果结构中包括输入类的dom：会产生错误DOM更新，界面有问题。
3. 如果不存在对数据的逆序添加、逆序删除等破坏顺序的操作，仅用于渲染列表展示，用index就没有任何问题。

## 脚手架

```js
ReactDOM.render(
  // React.StrictMode和es5的严格模式不同，这是检查react用法是否符合最新的，比如有些弃用的api他就会提出警告
  <React.StrictMode>
    <app />
  </React.StrictMode>,
  document.getElementById('root')
);
```

### src

reportWebVitals.js: 是性能测试的js用的是web-vitals这个库

setupTests.js: 是测试用的js用的是jest-dom这个库

### public

index.html: 主页面

manifest.json: 应用加壳的配置文件

robots.txt: 爬虫协议文件

export default: 默认暴露

export: 分别暴露
