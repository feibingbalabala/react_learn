import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWord from './components/helloWord/helloWord';
import Card from './components/card/card'
import AddButton from './components/addButton/addButton';
import Clock from './components/clock/clock'
import Context from './components/Context/Context'
import Comment from './components/comment/index'
import ThemeContext from './components/themeContext/index'
import TodoList from './components/TodoList/Index';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // React.StrictMode和es5的严格模式不同，这是检查react用法是否符合最新的，比如有些弃用的api他就会提出警告
  <React.StrictMode>
    <HelloWord />
    <Card
      name="jwy"
      tel={18060031000}
      sex={true}
      tag={['a', 'b', 'c']}
    />
    <AddButton />
    <Clock />
    <Context />
    <Comment />
    <ThemeContext />
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
