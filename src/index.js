import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.PureComponent {
  state = {
    obj: {
      number: 0
    }
  }
  handleClick = () => {
    // 错误演示：直接修改原始对象中属性的值
    // const newObj = this.state.obj
    // newObj.number = Math.floor(Math.random() * 3)
    // 正确！创建新数据
    const newObj = {...this.state.obj, number: Math.floor(Math.random() * 3)}
    this.setState(() => {
      return {
        obj: newObj
      }
    })
  }
  render() {
    console.log('render~');
    return (
      <div>
        <h1>计数器：{this.state.obj.number}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))


