import React from 'react';
import ReactDOM from 'react-dom';

/**
 * react-router-dom的基本使用
 */

// 导入组件
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const First = () => <p>页面一的内容👹</p>
const Second = () => <p>页面二的内容✔</p>
const App = () => (
  <Router>
    <div>
      <h1>React路由基础</h1>
      {/*指定路由入口*/}
      <Link to='/first'>页面一</Link>
      <Link to='/second'>页面二</Link>
      {/*指定路由出口*/}
      <Route path='/first' component={First}></Route>
      <Route path='/second' component={Second}></Route>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))


