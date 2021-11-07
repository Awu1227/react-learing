import React from 'react';
import ReactDOM from 'react-dom';

// 父组件
class Counter extends React.Component {
  // 提供共享数据
  state = {
    count: 0
  }
  // 提供修改状态的方法
  countIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <Child1 count={this.state.count}/>
        <Child2 countIncrement={this.countIncrement}/>
      </div>
    )
  }
}

const Child1 = (props) => {
  return <h1>计数器：{ props.count}</h1>
}

const Child2 = (props) => {
  function handleClick() {
    props.countIncrement()
  }
  return <button onClick={handleClick}>+1</button>
}
ReactDOM.render(<Counter />, document.getElementById('root'))


