import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 编程式导航
 */
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Login extends React.Component {
  handleClick = () => {
    // 使用编程式导航实现路由导航
    this.props.history.push('/home')
  }
  render() {
    return (
      <div>
        <p>登录页面</p>
        <button onClick={this.handleClick}>登录</button>
      </div>
    )
  }
}

const Home = props => {
  const handleClick = () => {
    props.history.go(-1)
  }
  return (
    <div>
    <h2>我是后台首页</h2>
    <button onClick={handleClick}>返回登录页面按钮</button>
  </div>
  )
}

const App = () => (
  <Router>
  <div>
      <h1>编程式导航</h1>
      <Link to="/login">去登录页面:</Link>
      <Route path="/login" component={Login}></Route>
      <Route path="/home" component={Home}></Route>
  </div>
  </Router>

)

ReactDOM.render(<App />, document.getElementById('root'))


