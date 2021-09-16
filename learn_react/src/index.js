import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './index.css';
import HelloWord from './components/helloWord/helloWord';
import Card from './components/card/card'
import AddButton from './components/addButton/addButton';
import Clock from './components/clock/clock'
import Context from './components/Context/Context'
import Comment from './components/comment/index'
import ThemeContext from './components/themeContext/index'
import TodoList from './components/TodoList/Index';
import ReactRouterDomDemo from './components/ReactRouterDom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // React.StrictMode和es5的严格模式不同，这是检查react用法是否符合最新的，比如有些弃用的api他就会提出警告
  <React.StrictMode>
    <BrowserRouter>
    <p>
      <Link to="/helloword">HelloWord和循环</Link>
    </p>
    {/* <p>
      <Link to="/helloword">props</Link>
    </p> */}
    <p>
      <Link to="/addbutton">事件点击</Link>
    </p>
    <p>
      <Link to="/clock">计时器</Link>
    </p>
    <p>
      <Link to="/context">表单输入</Link>
    </p>
    <p>
      <Link to="/comment">多组件信息交互</Link>
    </p>
    <p>
      <Link to="/themecontext">ThemeContext</Link>
    </p>
    <p>
      <Link to="/TodoList">TodoList</Link>
    </p>
    <p>
      <Link to="/ReactRouterDomDemo">ReactRouterDomDemo</Link>
    </p>
      {/*
      <Card
        name="jwy"
        tel={18060031000}
        sex={true}
        tag={['a', 'b', 'c']}
      /> */}
      <Route path="/helloword" component={HelloWord} />
      {/* <Route
        path="/helloword"
        component={Card}
      /> */}
      <Route path="/addbutton" component={AddButton} />
      <Route path="/clock" component={Clock} />
      <Route path="/context" component={Context} />
      <Route path="/comment" component={Comment} />
      <Route path="/themecontext" component={ThemeContext} />
      <Route path="/TodoList" component={TodoList} />
      <Route path="/ReactRouterDomDemo" component={ReactRouterDomDemo} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
