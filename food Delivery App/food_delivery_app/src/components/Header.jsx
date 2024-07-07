import React from 'react'
import "./Header.css"
import { LOGO_URL } from '../utils/constant'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Header = () => {
  
  return (
    <div className='Header justify-between'>
      <div className='logo-container'>
      <img src={LOGO_URL} alt = "logo" className='logo' />
    </div>
    <div className='nav-items p-10 mr-10'>
      <ul className=''>
        <li><Link to ="/">Home</Link></li>

        <li><Link to ="/about">About</Link></li>
        <li><Link to ="/contact-us">Contact</Link></li>
        <li><Link to ="/cart">Cart</Link></li>
      </ul>
    </div>
    </div>

    
  )
}

export default Header