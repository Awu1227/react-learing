import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 组件生命周期
 */
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.warn('生命周期钩子函数：constructor');
  }
 handleClick = () => {
    this.setState({ count: this.state.count + 1})
  } 
  componentDidMount() {
    const title = document.getElementsByTagName('h1')
    console.log(title[0]);
    console.warn('生命周期钩子函数：componentDidMount');
  }
  render() {
    // 不用在render中调用setState
    console.warn('生命周期钩子函数：render');
    return (
      <div>
        {this.state.count > 3 ? (
          <p>豆豆被打死了</p>
        ) : (
          <Counter count={this.state.count} />
      )}
      <button onClick={ this.handleClick}>+1</button>
      </div>
    )
  }
}
class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>当前计数器的值: {this.props.count }</h1>
    </div>
     )
  }
  
  componentDidUpdate(prevProps) {
    // console.log('上一次的props: ', prevProps, ', 当前的props: ', this.props);
    if (prevProps.count !== this.props.count) {
      this.setState({count: this.props.count})
    }
  }

  componentWillUnmount() {
    console.warn("Counter组件已被卸载！");
  }
 }

ReactDOM.render(<App />, document.getElementById('root'))


