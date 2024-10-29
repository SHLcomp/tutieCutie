import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './Navbar.scss';
//logo and icons
import logo from '../assets/logo1.jpg';
import cart from '../assets/cart.jpg';
const Navbar = () => {
   const itemCounter = 0;
  //  useState to change the state of the hr (underline)
   const [menu, setMenu] = useState("shop");
  return (
    <div>


      <nav className="nav">
        <img src={logo} alt="logo"/>
        <h1 className='brand-title'>TutieCutie<span>Bow</span> </h1>
        <ul>
          {/* adding an onclick arrow function to each link item to apply useState */}
          <li><a onClick={()=> {setMenu("shop")}} href="#!" className="a"><Link style={{textDecoration:"none"}} className='a' to="" >Shop</Link>{menu === "shop"? <hr />: "" }</a></li>
          <li><a onClick={()=> {setMenu("mens")}} href="#!" className="a"><Link style={{textDecoration:"none"}} className='a' to="/mens" >Men</Link> {menu === "mens"? <hr />:""}</a></li>
          <li><a onClick={()=> {setMenu("womens")}} href="#!" className="a"><Link style={{textDecoration:"none"}} className='a' to="/womens" >Women</Link> {menu === "womens"? <hr />:"" }</a></li>
          <li><a onClick={()=> {setMenu("kids")}} href="#!" className="a"><Link style={{textDecoration:"none"}} className='a' to="/kids" >Kids</Link> {menu === "kids"? <hr />: "" }</a></li>
        </ul>



        {/* cart counter and icon */}

        {/* login ul */}
        
        <div className='login'>
          <Link to="/login"><button>Login</button></Link>
          {/* cart icon */}
          <Link to="/cart"><img className='cart-icon' src={cart} alt="" /></Link>
          {/* cart counter */}
          <div className="cart-count">{itemCounter}</div>

        </div>
      </nav>









    </div>
  )
};

export default Navbar;
