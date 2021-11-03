import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 类组件
 */
class Hello extends React.Component {
  render() {
    return (
      <em>我是一个类组件!</em>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'))

