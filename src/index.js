import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const title = React.createElement('h1', null, 'Hello React!',<App/>)
ReactDOM.render(title, document.getElementById('root'))

reportWebVitals();
