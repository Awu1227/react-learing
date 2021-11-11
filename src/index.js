import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 高阶组件
 */

// 创建高阶组件
function withMouse(WrapedComponent) {
  // 该组件的状态逻辑
  class Mouse extends React.Component {
    // 鼠标状态
    state = {
      x: 0,
      y: 0
    }
    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    // 控制鼠标状态的逻辑
    componentDidMount() {
      window.addEventListener("mousemove", this.handleMouseMove, false);
    }
    componentWillUnmount() {
      window.removeEventListener("mousemove",this.handleMouseMove)
    }
    render() {
      console.log('Position:', this.props);
      return <WrapedComponent {...this.state} {...this.props}></WrapedComponent>
    }
  }
  // 设置displayName
  Mouse.displayName = `WithMouse${getDisplayName(WrapedComponent)}`
  return Mouse
}

function getDisplayName(WrapedComponent) {
  return WrapedComponent.displayName || WrapedComponent.name || 'Component'
}
// 用来测试高阶组件
const Position = props => {
  return (
    <p>
      鼠标当前位置：（x：{props.x}, y：{ props.y }）
    </p>
  )
}

// 获取增强后的组件
const MousePositon = withMouse(Position)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        {/*渲染增强后的组件 */}
        <MousePositon a="1"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))


