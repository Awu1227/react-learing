import React from 'react';
import ReactDOM from 'react-dom';

// children 属性

// 组件子节点
class App extends React.Component {
  render() {
    return (
      <div>
        组件标签的子节点：{this.props.children}
      </div>
    )
  }
}
const Child = () => {
  return <button>我是button组件</button>
}

ReactDOM.render(<App><Child /></App>, document.getElementById('root'))

/*JSX子节点
class App extends React.Component {
  render() {
    return (
      <div>
        组件标签的子节点：{this.props.children}
      </div>
    )
  }
}

ReactDOM.render(<App><p>我是子节点,一个p标签</p></App>, document.getElementById('root'))
 */


/*文本节点
class App extends React.Component {
  render() {
    return (
      <div>
        组件标签的子节点：<em>{this.props.children}</em>
      </div>
    )
  }
}

ReactDOM.render(<App>我是子节点</App>, document.getElementById('root'))
*/


