import React from 'react';
import ReactDOM from 'react-dom';


/**
 * render props模式
 */

// 导入图片资源
import img  from "./assets/delete.png"
// 创建Mouse组件
class Mouse extends React.Component {
  // 鼠标位置state
  state = {
    x: 0,
    y: 0
  }

  // 鼠标移动事件的事件处理
  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  // 箭头鼠标移动事件
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }
  render() {
    return (
      this.props.render(this.state)
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>render props 模式</h1>
        <Mouse render={(mouse) => {
          return <p>鼠标位置：x：{mouse.x}，y：{ mouse.y}</p>
        }} />
        <Mouse render={(mouse) => {
          return <img src={img} alt="🐱" style={{
            position: "absolute",
            top: mouse.y,
            left: mouse.x
          }} />
        }} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))


