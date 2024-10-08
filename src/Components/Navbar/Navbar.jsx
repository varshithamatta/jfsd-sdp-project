import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOP HERE</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link>{menu === "home" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/shop'>Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("about")}}><Link style={{ textDecoration: 'none'}} to='/about'>About</Link>{menu === "about" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("contact")}}><Link style={{ textDecoration: 'none'}} to='/contact'>Contact</Link>{menu === "contact" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
