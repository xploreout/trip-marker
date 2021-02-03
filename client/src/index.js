import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import './assets/scss/base.scss';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

