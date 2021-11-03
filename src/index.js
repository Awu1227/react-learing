import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
/**
 * 样式处理
 */
const title = (
  <h1 style={{ color: 'red', backgroundColor: 'skyblue'}}>
    JSX的样式处理~
  </h1>
)
ReactDOM.render(title, document.getElementById('root'))

reportWebVitals();
