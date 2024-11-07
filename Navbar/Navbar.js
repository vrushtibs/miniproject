import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef(); 
  

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='Logo' height={50} width={50} />
        <p>WEBSITE</p>
      </div>
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => {setMenu("shop")}}>
          <Link style={{textDecoration:'none'}} to='/'>Shop</Link>
          {menu==="shop"?<hr/>:<></>}
        </li>
        <li onClick={() => {setMenu("cameras")}}>
          <Link style={{textDecoration:'none'}} to='/cameras'>Cameras</Link>
          {menu==="cameras"?<hr/>:<></>}
        </li>
        <li onClick={() => {setMenu("headphones")}}>
          <Link style={{textDecoration:'none'}} to='/headphones'>Headphones</Link>
          {menu==="headphones"?<hr/>:<></>}
        </li>
        <li onClick={() => {setMenu("speakers")}}>
          <Link style={{textDecoration:'none'}} to='/speakers'>Speakers</Link>
          {menu==="speakers"?<hr/>:<></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<button className='logout' onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<div className='login'> 
        <Link to='/login'>
          <i class="fa-solid fa-user fa-2x"></i>
        </Link>
        <p>Login</p>
      </div>}
        
        <div className='login'>
          <Link to='/cart'>
            <i class="fa-solid fa-cart-shopping fa-2x"></i>
          </Link>
          <p>Cart</p>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar