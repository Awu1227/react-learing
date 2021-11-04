import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  state = {
    count: 10
  }
  onIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h3>计数器：{this.state.count}</h3>
        <button onClick={this.onIncrement}>点我+1</button>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'))


