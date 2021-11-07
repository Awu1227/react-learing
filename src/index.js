import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"
class App extends React.Component {
  // 初始化状态
  state = {
    clocks: [
      { id: 1, time: '6：00', content: '起床啦！！！'},
      { id: 2, time: '7：00', content: '吃饭啦~'},
      { id: 3, time: '8：00', content: '学习啦~'},
    ],
    // 闹钟时间
    usertime : '',
    // 提示内容
    userContent : ''
  }

  // 处理文本框事件
  handleForm = e => {
    const {value, name} = e.target
    this.setState({
      [name]: value
    })
  }
  // 是否渲染列表
  renderList() {
    return this.state.clocks.length ? (
      <ul>
      {this.state.clocks.map(item => (
        <li key={item.id}>
          <div>
          <h3>时间：{item.time}</h3>
          <p>提示内容：{item.content}</p>
          </div>
          <button id={item.id} className="deleteBtn" onClick={this.deleteClock}></button>
          </li>
      ))}
    </ul>
    ) : (
      <div>没有闹钟，快去设置吧~</div>
    )
  }
  // 增加闹钟
  addClock = () => {
    let { clocks, usertime, userContent } = this.state
    if (!usertime || !userContent) {
      alert("请输入闹钟时间或闹钟信息!")
    } else {
      // 将评论信息添加到state中
      const newClocks = [{
        id: Math.random(),
        time: usertime,
        content: userContent,
      }, ...clocks]
      this.setState({
        clocks: newClocks,
        usertime: '',
        userContent: ''
      })

    }
  }
  // 删除闹钟
  deleteClock = e => {
    const id = Number(e.target.id)
    const {clocks} = this.state
    const newClocks = clocks.filter(item => item.id !== id)
    this.setState({
      clocks: newClocks
    })
  }
  render() {
    const {usertime, userContent} = this.state
    return (
      <div className="app">
        <div>
        <input className="user" type="text" placeholder="请输入闹钟时间" value={usertime} name="usertime" onChange={this.handleForm}/>
        <textarea className="user-comment" placeholder="请输入提示内容" value={userContent} name="userContent" onChange={this.handleForm}></textarea>
          <button className="btn-setting"onClick={this.addClock}>设置闹钟</button>
        </div>
        {/* 通过条件渲染决定渲染什么内容 */}
        {this.renderList()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))


