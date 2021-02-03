import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SideBarElement'

const Sidebar = ({isOpen, toggle}) => {
  console.log(isOpen)
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}> 
          <Icon onClick={toggle} >  
            <CloseIcon/>
          </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='Map' onClick={toggle} >
              iMap
            </SidebarLink>
            <SidebarLink to='Blog' onClick={toggle}>
              BLog
            </SidebarLink>
            <SidebarLink to='Signup' onClick={toggle}>
              Sign Up
            </SidebarLink>
            <SidebarLink to='contact-us' onClick={toggle}>
              Contact Us
            </SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
            <SidebarRoute to='/Login'>
              Login
            </SidebarRoute>
          </SidebarBtnWrap>
        </SidebarWrapper>

      </SidebarContainer>
    </>
  )
}

export default Sidebar
