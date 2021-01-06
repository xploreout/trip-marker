import React from 'react'
import App from './App'
import Navigation from './Navigation'
import {BrowserRouter as Router, 
        Route} from 'react-router-dom';
import PageRenderer from './page-renderer';

/**
* @author
* @function AppHome
**/

const AppHome = (props) => {


  return(
    <Router>
    <Navigation user={{firstName: 'Jon', lastName: 'Doe'}}/>

    <Route path="/:page" component={PageRenderer} />
    </Router>

   )

 }

export default AppHome