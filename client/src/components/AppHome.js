import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import { UserContext } from './context/UserContext';
import Register from './Register';
import Login from './Login';
import Map from './Map';
import ViewBlog from './ViewBlog';
import ContactUs from './ContactUs';

const AppHome = (props) => {
  const [userAuth, setUserAuth] = useState({});

  const providerValue = useMemo(
    () => ({ userAuth, setUserAuth }, [userAuth, setUserAuth])
  );

  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={Map} />
      <Route path='/register-login' component={Register} />
      <Route path='/contact-us' component={ContactUs} />
      <UserContext.Provider value={providerValue}>
        <Route path='/login' component={Login} />
        <Route path='/blog' component={ViewBlog} />
      </UserContext.Provider>
    </Router>
  );
};

export default AppHome;
