import React from 'react';
import ReactDOM from 'react-dom';

/**
 * React事件处理
 */
// class Hello extends React.Component {
//   handleClick() {
//     console.log('你好，类组件！');
//   }
//   render() {
//     return (
//       <button onClick = {this.handleClick}>我是类组件！</button>
//     )
//   }
// }
function Hello() {
  function handleClick() {
    console.log('你好，函数组件！');
  }
  
  return (<button onClick={handleClick}>我是函数组件！</button>)
}

ReactDOM.render(<Hello />, document.getElementById('root'))

