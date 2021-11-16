import React from 'react';
import ReactDOM from 'react-dom';

// 生成随机数
class App extends React.Component {
  state = {
    number: 0
  }

  handleClick = () => {
    this.setState(() => {
      return {
        number: Math.floor(Math.random() * 3)
      }
    })
  }
  // 因为两次生成的随机数可能相同，如果相同，此时，不需要重新渲染
  shouldComponentUpdate(nextProps, nextState) {
    console.log('最新状态：', nextState, ',当前状态：', this.state);
    // return (nextState.number === this.state.number) ? false : true;
    return nextState.number !== this.state.number
  }
  render() {
    console.log('render');
    return (
      <div>
        <h1>随机数：{this.state.number}</h1>
        <button onClick={this.handleClick}>重新生成</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))


