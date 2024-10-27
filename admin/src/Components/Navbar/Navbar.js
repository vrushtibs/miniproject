import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import navlogo from '../../assets/navlogo.jpeg'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-1'>
            <img src={logo} alt='' className='nav-logo' />
            <h1>WEBSITE</h1>
        </div>
        <div className='nav-2'>
            <img src={navlogo} alt='' className='nav-profile' />
            <i class="fa-solid fa-chevron-down fa-2x"></i>
        </div>
    </div>
  )
}
