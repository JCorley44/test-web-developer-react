import React from 'react'
import './Navbar.css'
import logo from "../../assets/leaselabs_logo_fullstack_rgb.png"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='navbar-links'>
        <div className='navbar-link'>Home</div>
        <div className='navbar-link'>Our Work</div>
        <div className='navbar-link'>About Us</div>
        <div className='navbar-link'>Contact Us</div>
        <div className='navbar-link-specials'>Specials</div>
      </div>
    </div>
  )
}

export default Navbar