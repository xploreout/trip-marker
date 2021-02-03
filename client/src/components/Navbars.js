import React, {useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [menuActive, setMenuActive] = useState(false);
  const navList = [
    {
      path: '/BlogList',
      title: 'Blog',
    },
    {
      path: '/App',
      title: 'Map',
    },
    {
      path: '/contact-us',
      title: 'Contact Us',
    }
  ]

  return(
    <nav>
      
    <div className="nav-wrapper" >
      <div className={`${menuActive && 'active'}`}>
      <a href="#" className="brand-logo">Logo</a>
      <a href="#" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>

      <ul id="nav-mobile" className="right hide-on-med-and-down">
          {navList.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
      </ul>
      </div>
    </div>
    <i
        className='ionicons icon ion-ios-menu'
        onClick={() => {
          setMenuActive(!menuActive);
          setTimeout(() => {
            setMenuActive(false);
          }, 5000);
        }}
      />
  </nav>
   )

 }

export default Navbar