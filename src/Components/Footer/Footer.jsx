import React from 'react'

import './Footer.css'
import { FaHome, FaPhoneAlt, FaEnvelope, FaPrint } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='container'>
        <div className='row py-5 text-white'>
        <div className='col-md-4 col-sm-12'>
            <h4 className='text-warning'>SHOP HERE</h4>
            <p>At SHOP HERE, we believe in more than just fashion. We’re committed to ethical practices, sustainable sourcing, and uplifting the communities we work with. Discover our story</p>
        </div>
        <div className='col-md-3 col-sm-12'>
            <h4 className='text-warning'>Quick Links</h4>
            <p>Home</p>
            <p>Shop</p>
            <p>About</p>
            <p>Contact</p>
            <p>Cart</p>
        </div>
        <div className='col-md-3 col-sm-12'>
            <h4 className='text-warning'>Address</h4>
            <FaHome/>Abc Street
            <FaPhoneAlt/>001234567432
            <FaEnvelope/>example@gmail.com
            <FaPrint/>+9012345678
        </div>
        <div className=''></div>
        </div>
      
    </div>
  )
}

export default Footer
