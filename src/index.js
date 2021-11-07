import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
  state = { message: '我是父组件' }
  // 定义方法，接收数据
  getMessage = data => {
    console.log("子组件传递的数据为：", data);
    this.setState({
      message: data
    })
  }
  render() {
    return (
      <div>
        {this.state.message}
        <Child name={this.state.message} getMsg={this.getMessage}/>
      </div>
    )
  }
}

class Child extends React.Component {
  state = {
    childMsg: "学习React"
  }
  handleClick = () => {
    this.props.getMsg(this.state.childMsg)
  }
  render() {
    return (
      <button onClick={this.handleClick}>点击我传递数据到父组件</button>
    )
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'))


