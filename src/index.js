import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  // constructor() {
  //   super()
  //   // 初始化state
  //   this.state = {
  //     count: 10
  //   }
  // }
  // 简洁语法初始化state
  state = {
    count: 10
  }
  render() {
    return (
      <div>
        <h3>计数器：{this.state.count}</h3>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>点我+1</button>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'))


