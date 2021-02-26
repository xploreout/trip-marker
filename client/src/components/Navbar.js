import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBeer, FaTimes } from 'react-icons/fa';

const Navbar = (props) => {
  const [menuActive, setMenuActive] = useState(false);

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          ilogo
          <FaBeer />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' onClick={closeMobileMenu}>
            <Link className='nav-links' to='/Map'>
              Map
            </Link>
          </li>
          <li className='nav-item' onClick={closeMobileMenu}>
            <Link className='nav-links' to='/BlogList'>
              Blog
            </Link>
          </li>
          <li className='nav-item' onClick={closeMobileMenu}>
            <Link className='nav-links' to='/contact-us'>
              Contact Us
            </Link>
          </li>
          <li className='nav-item' onClick={closeMobileMenu}>
            <Link className='nav-links' to='/Register'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
