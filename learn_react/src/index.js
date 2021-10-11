import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import './index.css';
import HelloWord from './components/helloWord/helloWord';
// import Card from './components/card/card'
import AddButton from './components/addButton/addButton';
import Clock from './components/clock/clock'
import Context from './components/Context/Context'
import Comment from './components/comment/index'
import ThemeContext from './components/themeContext/index'
import TodoList from './components/TodoList/Index';
import ReactRouterDomDemo from './components/ReactRouterDom';
import SecondaryRouting from './components/SecondaryRouting'
import RouterParams from './components/RouterParams';
import RouterSearch from './components/RouterSearch';
import RouterState from './components/RouterState';
import Count from './components/Count';
import CountForRedux from './components/CountForRedux';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // React.StrictMode和es5的严格模式不同，这是检查react用法是否符合最新的，比如有些弃用的api他就会提出警告
  <React.StrictMode>
    <BrowserRouter>
    <div>
      <Link to="/helloword">HelloWord和循环</Link>
    </div>
    {/* <div>
      <Link to="/helloword">props</Link>
    </div> */}
    <div>
      <Link to="/addbutton">事件点击</Link>
    </div>
    <div>
      <Link to="/clock">计时器</Link>
    </div>
    <div>
      <Link to="/context">表单输入</Link>
    </div>
    <div>
      <Link to="/comment">多组件信息交互</Link>
    </div>
    <div>
      <Link to="/themecontext">ThemeContext</Link>
    </div>
    <div>
      <Link to="/TodoList">TodoList</Link>
    </div>
    <div>
      <Link to="/ReactRouterDomDemo">ReactRouterDomDemo</Link>
    </div>
    <div>
      <Link to="/secondaryrouting">二级路由</Link>
    </div>
    <div>
      <Link to="/routerparams">路由中的params</Link>
    </div>
    <div>
      <Link to="/routersearch">路由中的search（和query很像，在react中叫search）</Link>
    </div>
    <div>
      <Link to="/routerstate">路由中的state</Link>
    </div>
    <div>
      <Link to="/count">纯react版本count实现</Link>
    </div>
    <div>
      <Link to="/countforredux">redux版本count实现</Link>
    </div>
      {/*
      <Card
        name="jwy"
        tel={18060031000}
        sex={true}
        tag={['a', 'b', 'c']}
      /> */}
      <div style={{
        padding: "10px",
        border: "1px solid #ddd",
        margin: "20px"
      }}>
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
        <Route path="/secondaryrouting" component={SecondaryRouting}/>
        <Route path="/routerparams" component={RouterParams} />
        <Route path="/routersearch" component={RouterSearch} />
        <Route path="/routerstate" component={RouterState} />
        <Route path="/count" component={Count} />
        <Route path="/countforredux" component={CountForRedux} />
        <Redirect to="/helloword" />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
