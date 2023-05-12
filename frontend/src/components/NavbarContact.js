import React from 'react';
import './NavbarContact.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="http://localhost:3000">Home</a></li>
        <li><a href="http://localhost:3000/product">Product</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="http://localhost:3000/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
