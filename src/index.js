import React from 'react';
import ReactDOM from 'react-dom';

/**
 * JSX语法的转化过程
 */

const element = <h1 className="greeting">Hello, JSX!</h1>

console.log(element);
ReactDOM.render(element, document.getElementById('root'))


