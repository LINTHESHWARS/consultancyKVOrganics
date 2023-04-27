import React from 'react';
import './NavbarContact.css';
import logo from '../images/logo.jpg'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="http://localhost:3000">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="http://localhost:3000/contact">Contact</a></li>
      </ul>
      {/* <img src={logo} alt='Logo'/> */}
    </nav>
  );
}

export default Navbar;
