import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  state = {
    count: 1
  }
  handleClick = () => {
    // 此处，更新state
    // 注意：异步更新数据的！！！
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // 推荐语法
    // 注意：这种语法也是异步更新state的！
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    })
    this.setState((state, props) => {
      console.log('第二次调用：',state);
      return {
        count: state.count + 1
      }
    },
      // 状态更新后并且重新渲染后，立即执行
      () => {
        console.log('状态更新完成：', this.state.count);
        console.log(document.getElementById('title').innerText);
        document.title = '更新后的count为：' + this.state.count
    })
    console.log("count =>", this.state.count);
  }
  render() {
    return (
      <div>
        <h1 id="title">计数器{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))


