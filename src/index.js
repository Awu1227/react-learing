import React from 'react';
import ReactDOM from 'react-dom';

class Baidu extends React.Component {
  handleClick(e) {
    // 阻止浏览器的默认行为
    e.preventDefault();
    console.log("欢迎来到百度~", e);
  }
  render() {
    return (
      <a href="https://www.baidu.com/" onClick={this.handleClick}>百度一下</a>
    )
  }
}
ReactDOM.render(<Baidu />, document.getElementById('root'))


