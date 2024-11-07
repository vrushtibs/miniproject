import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt='' height={70} width={70}/>
            <p>WEBSITE</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icons'>
            <div className='footer-icons-container'>
                <i class="fa-brands fa-instagram fa-2x"></i>
            </div>
            <div className='footer-icons-container'>
                <i class="fa-brands fa-whatsapp fa-2x"></i>
            </div>
            <div className='footer-icons-container'>
                <i class="fa-regular fa-envelope fa-2x"></i>
            </div>
            <div className='footer-icons-container'>
                <i class="fa-brands fa-youtube fa-2x"></i>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>&copy; 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer