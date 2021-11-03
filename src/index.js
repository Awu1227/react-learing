import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 函数组件
 */
// function Hello() {
//   return (
//     <h2>我是第一个函数组件！</h2>
//   )
// }
const Hello = () => <h2>我是第一个函数组件！</h2>
ReactDOM.render(<Hello />, document.getElementById('root'))

