import {FaBars} from 'react-icons/fa';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import styled from 'styled-components'

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor:pointer;
    color: #fff;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const Nav = styled.nav`
  background: teal;
  opacity: 0.7;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;


export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
margin-right: -22px;
white-space: nowrap;
text-align: center;

@media screen and (max-width: 768px) {
  display: none;
}
`

export const NavItem = styled.li`
  height: 80px;
  list-style: none;
`;

export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
    border-bottom: 3px solid #01bf71; 
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,75%);
    cursor: pointer;
    font-size: 1.8rem;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  width: 100vw;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  padding: 10px 22px;
  // background: #256ce1;
  background: #01bf71;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  // margin-left: 24px;
  &.hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;  
  }
`