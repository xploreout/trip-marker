import React from 'react'
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaTimesCircle} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 99;
  display: grid;
  align-items: center;
  width: 100%;
  height: 100%;
  background: teal;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen})=> (isOpen ? '100%' : '0')};
  top: ${({ isOpen })=> (isOpen ? '0' : '-100%')};
  top:0;
`;


export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimesCircle)`
  color: #fff;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 70px);
  text-align: center;

  @media screen and (max 480px){
    grid-template-rows: repeat(6, 50px)
  }
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  color:  #fff;
  cursor: pointer;

  &.hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer
  transition: all 0.2s ease-in-out;
  text-decoration: none:

  &.hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
    background: #fff;
  }
`;
