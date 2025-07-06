import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch,FaShoppingBasket,FaLightbulb  } from 'react-icons/fa';
import './Header.css'
function Header() {
  return (
  <div className='header'>
    <Link to='/'>
<img className='main_image' alt='amazon' src='./logo.png'/>
</Link>
<div className='header_search'>
    <input className='headerSearch_In' placeholder='Search Amazon.in' type='text'></input>
    <FaSearch className="header_search_icon" />
</div>
<div className='header_nav'>
 <Link to='/recommendations'>
  <div className='header_option_bulb'>
     <FaLightbulb className='bulb'></FaLightbulb>
     <div className='header_option'>
        <span className='one'>Recommendations</span>
        <span className='two'>For You</span>
</div>
    </div>
    </Link>
    <div className='header_option'>
        <span className='one'>Hello Guest</span>
        <Link to='/login' id='sign'>
        <span className='two' >Sign In</span>
</Link>
    </div>
     <div className='header_option'>
        <span className='one'>Return</span>
        <span className='two'>&Orders</span>

    </div>

 <div className='header_option'>
        <span className='one'>Your</span>
        <span className='two'>Prime</span>

    </div>
    <div className='header_option_basket'>
      <Link to='/checkout'>
           <FaShoppingBasket className='header_basket_icon' />
      </Link>
     
        <span className='header_basket_count'>0</span>
        </div>
</div>
  </div>
  )
}

export default Header