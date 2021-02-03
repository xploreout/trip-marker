import React, {useState, useEffect} from 'react';
import Navbar from './Navbar'
import Sidebar from './SideBar';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  )
}

export default Home
