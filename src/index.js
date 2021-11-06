import React from 'react';
import ReactDOM from 'react-dom';


class Hello extends React.Component {
  constructor() {
    super()
    this.txtRef = React.createRef()
  }
  getTxt = () => {
    console.log( "文本框的值=>"+ this.txtRef.current.value);
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.txtRef}></input><br />
        <button onClick={this.getTxt}>点我获取文本框的值</button>
      </div>
    )
  }
}
ReactDOM.render(<Hello />, document.getElementById('root'))


