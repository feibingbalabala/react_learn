import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom'
import  App from './components/App/App'
// import routeConfig from './route/routeConfig';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route
        path="/"
        component={App}>
    </Route>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
