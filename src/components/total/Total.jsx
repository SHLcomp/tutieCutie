import React, { useContext } from 'react'
import './Total.scss'
import { ShopContext } from '../../context/ShopContext'

const Total = () => {
  const  {getTotalPrice} = useContext(ShopContext); 
  
  return (
    <div className='total'>
      <h3>Total price is: {getTotalPrice()}</h3>
      <div className="cta">
        <button>Checkout</button>
      </div>
      
    </div>
  )
}

export default Total
