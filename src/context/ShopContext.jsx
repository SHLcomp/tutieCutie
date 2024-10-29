import { useState } from 'react';
import React, {createContext} from 'react';
import all_product from '../components/assets/all_products';

export const ShopContext = createContext(null);

  // cart, function creates an empty cart object
  const getDefaultCart = ()=>{
    let cart = {};
    //all product`s length value
    for (let index=0; index < all_product.length+1; index++){
      cart[index] = 0;
    }
     return cart; 
  }



  //creat context provider
  const ShopContextProvider = (props) =>{

  //useState for the cart (has to be first in order)
  const [cartItem, setCartItem] = useState(getDefaultCart());

    //addToCart function
    const addToCart = (itemId)=>{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }
   //removeFromCart function
    const removeFromCart = (itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }
  

  //get total price function

  const getTotalPrice = ()=>{
    let total = 0;
    for (const item in cartItem){
      if (cartItem[item]>0){
        let itemInfo = all_product.find((products)=>products.id === Number(item.id));
        total += itemInfo.price * cartItem[item];
      } return total;
    }
  }




  //context api value
  const contextValue = {all_product, cartItem, addToCart, removeFromCart, getTotalPrice}; //now we can access the cartItem data in any comp


  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;