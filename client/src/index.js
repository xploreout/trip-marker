import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHome from './components/AppHome';

import './assets/scss/base.scss';
import 'antd/dist/antd.css';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AppHome />
  </React.StrictMode>,
  document.getElementById('root')
);
