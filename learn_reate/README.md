# react

## 安装

准备开发环境

```code
npm install create-react-app -g
```

初始化项目

```code
create-react-app learn_react
```

## 新建helloword组件

react组件以大写开头

```js
// helloword.js
const arr = ['a', 'b', 'c']
function helloWord() {
  return (
    <div>
      hello word
      <ul>
        {
          arr.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
export default helloWord;

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWord from './components/helloWord/helloWord';

ReactDOM.render(
  <React.StrictMode>
    <HelloWord />
  </React.StrictMode>,
  document.getElementById('root')
);
```

## props（组件外部传入的数据）

组件内部的值为可读类型，不可修改

```js
// card.js
function Card(props) {
  const { name, tel, sex, tag } = props
  return (
    <div>
      { name }
      <p>
        电话：{ tel }
      </p>
      <p>
        性别：{ sex ? '男' : '女'}
      </p>
      <ul>
        {
          tag.forEach((item, index) => {
            return <li key={index}>{ item }</li>
          })
        }
      </ul>
    </div>
  )
}
export default Card

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card/card'

ReactDOM.render(
  <React.StrictMode>
    <Card
      name="jwy"
      tel={18060031000}
      sex={true}
      tag={['a', 'b', 'c']}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
```

等价于

```js
import React from "react"

class Card extends React.Component {
  render() {
    const { name, tel, sex, tag } = this.props
    return (
      <div>
        { name }
        <p>
          电话：{ tel }
        </p>
        <p>
          性别：{ sex ? '男' : '女'}
        </p>
        <ul>
          {
            tag.forEach((item, index) => {
              return <li key={index}>{ item }</li>
            })
          }
        </ul>
      </div>
    )
  }
}
```

## state（组件内部的数据）

```js
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
    // 数据更新
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
```

## 生命周期

创建时
compinentDidMount

更新时
componentDidUpdate

1. 有新的props进来
2. setState()
3. forceUpdate

卸载时
componentWillUnmount

```js
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
    console.log(currentState)
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

```

注意

1. 不要直接修改 State
      重新渲染组件

2. State 的更新可能是异步的
      出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
      因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
      要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：

    ```js
      this.setState((state, props) => ({
        counter: state.counter + props.increment
      }));
    ```

## 单项数据流

共享数据通常保存在父级，方便排插bug

```js
// index.js
import React from 'react'
import CommentList from './commentList'
import CommentInput from './commentInput'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentList: ['123']
    }
    this.addComment = this.addComment.bind(this)
    this.delComment = this.delComment.bind(this)
  }
  addComment(value) {
    this.setState({
      commentList: [...this.state.commentList, value]
    })
  }
  delComment(idx) {
    this.state.commentList.splice(idx, 1)
    this.setState({
      commentList: this.state.commentList
    })
  }
  render() {
    return (
      <div>
        <CommentList
          commentList={ this.state.commentList }
          onDelComment={ this.delComment }
        />
        <CommentInput
          commentLength={ this.state.commentList.length }
          onAddComment={ this.addComment }
        />
      </div>
    )
  }
}

export default Comment
```

```js
// commentList.js
import React from 'react'

class commentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentList: props.commentList || []
    }
  }
  delComment(idx) {
    this.props.onDelComment(idx)
  }
  render() {
    return (
      <div>
        <div>评论列表</div>
        <ul>
          {
            this.props.commentList.map((item, index) => {
              return (
                <li key={ index }>
                  { item }
                  <span
                    style={{
                      cursor: 'pointer',
                      padding: '0 0 0 20px'
                    }}
                    onClick={ () => { this.delComment(index) } }
                  >删除</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default commentList

```

```js
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

```

## context

把想用的数据用ThemeContext.Provider包裹，ThemeContext.Consumer中就可以取到想要的数据

```js
// index.js

import React from 'react'
import ThemeContext from './context'
import Bar from './bar'
const theme = {
  light: {
    calssNames: 'btn light',
    bgColor: '#eee',
    color: '#000'
  },
  dark: {
    calssNames: 'btn dark',
    bgColor: '#222',
    color: '#fff'
  }
}

class themeContext extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light'
    }
  }
  changeTheme(theme) {
    this.setState({
      theme: theme
    })
  }
  render() {
    return (
      <ThemeContext.Provider value={theme[this.state.theme]}>
        <div>
          <div onClick={ () => { this.changeTheme('dark') } }>深色主题</div>
          <div onClick={ () => { this.changeTheme('light') } }>浅色主题</div>
          <Bar />
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default themeContext

```

```js
// content.js
import React from 'react'

const ThemeContext = React.createContext()

export default ThemeContext

```

```js
// bar.js

import React from 'react'

import ThemeContext from './context'

class bar extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {}
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {
          (theme) => {
            return (
              <div
                style={{
                  backgroundColor: theme.bgColor,
                  color: theme.color
                }}
              >
                <div className={ theme.calssNames }>样式</div>
              </div>
            )
          }
        }
      </ThemeContext.Consumer>
    )
  }
}

export default bar

```