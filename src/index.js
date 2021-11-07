import React from 'react';
import ReactDOM from 'react-dom';

/**
 * props
 */
const App1 = (props) => {
  console.log(props);
  return (
    <div>
      <p>函数组件props：{props.name }</p>
    </div>
  )
}
class App2 extends React.Component {
  // 推荐使用props作为constructor的参数
  constructor(props) {
    super(props)
    console.log(props);
  }
  render() {
    return (
      <div>
        <p>类组件props:{this.props.name} { this.props.age }</p>
      </div>
    )
  }
}
/**
 * 传递数据
 */
ReactDOM.render(<App2
  name="橙子"
  age={18}
  colors={['red', 'green', 'yellow']}
  fn={() => console.log('这是一个函数')}
  tag={<p>这是一个p标签</p>} />, document.getElementById('root'))


