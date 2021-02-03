import React from 'react'
import {Nav, Bars, NavLogo, NavbarContainer, MobileIcon, NavLink, NavMenu, NavBtn, NavBtnLink, NavItem} from './NavBarElement';


const Navbar = ({toggle}) => {
  
  return (
    <>
      <Nav>
        <NavbarContainer>
        <NavLogo to='/'>
          Lgoo
        </NavLogo>
        <MobileIcon onClick={toggle} >
          <Bars/>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to='/Map' activeStyle >
              Map
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink to='/Blog' activeStyle >
              Blog
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink to='/contact-us' activeStyle >
              Contact Us
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink to='/sign-up' activeStyle>
              Sign Up
            </NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Login'>Sign In
          </NavBtnLink>
        </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar

