import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';

export default function Header() {
  return (
    <header>
      <Link to="" className='logo'>
        <img src={Logo} alt="routeMate Logo" />
        <span>Routemate</span>
      </Link>
      <div className='navigation'>
        <NavLink to="/" className='link' >Home</NavLink>
        <NavLink to="/products" className='link'>Products</NavLink>
        <NavLink to="/contact" className='link'>Contacts</NavLink>
      </div>
    </header>
  );
}

