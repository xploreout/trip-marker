import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageRenderer from './page-renderer';
import Navbar from './Navbar';

const AppHome = (props) => {
  return (
    <Router>
      <Navbar />
      <Route path='/:page' component={PageRenderer} />
    </Router>
  );
};

export default AppHome;
