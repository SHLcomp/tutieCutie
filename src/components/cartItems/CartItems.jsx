import React, { useContext } from 'react';
import './CartItems.scss';
import { ShopContext } from '../../context/ShopContext';

const CartItems = () => {
  const {all_product, cartItem, removeFromCart, getTotalPrice} = useContext(ShopContext);
  return (
    <div className='cartItems'>


      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
      </div>
      <hr />
    
    <div className="items">

        {all_product.map((e)=>{
          if (cartItem[e.id]>0){
            return (
              <div>
                <div className='item'>
                {/*  the invisible format */}
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.price}</p>
                <button className='items-quantity'>{cartItem[e.id]}</button>
                <p>${e.price*cartItem[e.id]}</p>
                <i onClick={()=>{removeFromCart(e.id)}} className="fa-solid fa-trash"></i> 
              </div>  
              <hr />
              </div>
              
                
            )
          } return null;
        })}
        {/* invisible
        <div className="item">
          <img src="" alt="" />
          <p></p>
          <p></p>
          <button className='items-quantity'>0</button>
          <p>$</p>
          <i onClick={()=>{removeFromCart()}} class="fa-solid fa-trash"></i>
        </div> */}



      </div>



      <div className='total'>
      <h3>Total price is: {getTotalPrice()}</h3>
      <div className="cta">
        <button>Checkout</button>
      </div>
      
    </div>
    
    </div>

  )
}

export default CartItems
