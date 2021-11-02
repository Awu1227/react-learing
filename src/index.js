import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

let isLoading = true;

const loadData = () => {
  return isLoading ? (<div>loading...</div>) : (<div>数据加载完成~</div>)
}
const title = (<h2>请求数据中{loadData()}</h2>)
ReactDOM.render(title, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
