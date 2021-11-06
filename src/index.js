import React from 'react';
import ReactDOM from 'react-dom';


class Home extends React.Component {
  state = {
    txt: '',
    content: '',
    city: 'bj',
    isChecked: true,
  }
  handleChange = e => {
    this.setState({
      txt: e.target.value,
    })
  }
  handleContent = e => {
    this.setState({
      content: e.target.value,
    })
  }
  handleCity = e => {
    this.setState({
      city: e.target.value,
    })
  }
  handleChecked = e => {
    this.setState({
      isChecked: e.target.checked
    })
  }
  render() {
    return (
      <div>
        {/*文本框*/}
        <input type="text" value={this.state.txt} onChange={this.handleChange}></input><br/>
        <em>文本框的内容：{this.state.txt}</em>
        <hr/>
        {/*富文本框*/}
        <textarea value={this.state.content} onChange={this.handleContent}></textarea><br />
        <em>富文本框的内容：{this.state.content}</em>
        <hr />
        {/*下拉框*/}
        <select value={this.state.city} onChange={this.handleCity}>
          <option value='bj'>北京</option>
          <option value='sh'>上海</option>
          <option value='gz'>广州</option>
          <option value='sz'>深圳</option>
        </select><br />
        <em>下拉框的内容：{this.state.city}</em>
        <hr />
        {/*复选框*/}
        <label htmlFor="sex">
        <input type="checkbox" id="sex" checked={this.state.isChecked} onChange={this.handleChecked}/>男
        </label><br />
        <em>复选框是否选中：{ console.log(this.state.isChecked) }</em>
      </div>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'))


