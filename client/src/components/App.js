import React from 'react'
import {BrowserRouter as Router, 
        Route, Switch} from 'react-router-dom';
import PageRenderer from './page-renderer';
import Home from './Home'


const AppHome = (props) => {
  return(
    <Router>
      <Home />
      <Switch>
          <Route path="/:page" component={PageRenderer} />
      </Switch>
    </Router>
   )

 }

export default AppHome