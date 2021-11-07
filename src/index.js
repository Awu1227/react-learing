import React from 'react';
import ReactDOM from 'react-dom';

// 导入prop-Types包
import PropTypes from 'prop-types';

function App(props) {
    const arr = props.colors
    const lis = arr.map((item, index) => <li key={index}>{item}</li>);
  return (
      <div>
      <ul>{lis}</ul>
      <p>此处显示props的默认值：{ props.pageSize}</p>
      </div>

    )
}
// 添加props校验
// 属性a的类型： 数值（number）
// 属性fn的类型： 函数（func）并且为必填项
// 属性tag的类型： React元素（element）
// 属性filter的类型： 对象（{area: '上海', price: 1999}）
App.propTypes = {
  colors: PropTypes.array,
  a: PropTypes.number,
  fn: PropTypes.func.isRequired,
  tag: PropTypes.element,
  filter: PropTypes.shape({
    area: PropTypes.string,
    price: PropTypes.number
  })
}

// 添加props的默认值
App.defaultProps = {
  pageSize: 10
}

ReactDOM.render(<App colors={["red","green","blue"]} />, document.getElementById('root'))


