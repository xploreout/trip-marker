import React, {useState } from 'react';
import { Link } from 'react-router-dom';


/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  const [menuActive, setMenuActive] = useState(false);

  return(
    <nav>
      
    <div className="nav-wrapper" >
      <div className={`${menuActive && 'active'}`}>
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/App">App</Link></li>
        <li><Link to="/BlogList">Blog</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/Login">Login</Link></li>
      </ul>
      </div>
    </div>
    <i
        className='ionicons icon ion-ios-menu'
        onClick={() => {
          setMenuActive(!menuActive);
          console.log('here====')
          setTimeout(() => {
            setMenuActive(false);
          }, 5000);
        }}
      />
  </nav>
   )

 }

export default Navbar