import React from 'react';
import ReactDOM from 'react-dom';


class Home extends React.Component {
  state = {
    txt: '',
    content: '',
    city: 'bj',
    isChecked: true,
  }
 
  handleForm = e => {
    // 获取DOM对象
    const target = e.target
    // 根据类型获取值
    const value = target.type === 'checkbox' ? target.checked : target.value
    // 获取name
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        {/*文本框*/}
        <input type="text" name="txt" value={this.state.txt} onChange={this.handleForm}></input><br/>
        <em>文本框的内容：{this.state.txt}</em>
        <hr/>
        {/*富文本框*/}
        <textarea name="content" value={this.state.content} onChange={this.handleForm}></textarea><br />
        <em>富文本框的内容：{this.state.content}</em>
        <hr />
        {/*下拉框*/}
        <select name="city" value={this.state.city} onChange={this.handleForm}>
          <option value='bj'>北京</option>
          <option value='sh'>上海</option>
          <option value='gz'>广州</option>
          <option value='sz'>深圳</option>
        </select><br />
        <em>下拉框的内容：{this.state.city}</em>
        <hr />
        {/*复选框*/}
        <label htmlFor="sex">
        <input name="isChecked" type="checkbox" id="sex" checked={this.state.isChecked} onChange={this.handleForm}/>男
        </label><br />
        <em>复选框是否选中：{ console.log(this.state.isChecked) }</em>
      </div>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'))


