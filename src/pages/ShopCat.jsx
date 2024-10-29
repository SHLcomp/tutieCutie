// women men and kids categories
import React from 'react';
import './styles/ShopCat.scss';
import Item from '../components/item/item.jsx';
import all_product from '../components/assets/all_products.jsx';

const ShopCat = (props) => {
  
  return (
    <div>
      <div className="text">
        <h2>The best <span>{props.category}</span> fashion!</h2>
      </div>

      <div className="cat-items">
        {all_product.map((item,i) => {
          if (props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} short_des={item.short_des} />
          }
          else{
            return null;
          }
      })}
      </div>
      
    </div>
  )
}

export default ShopCat;
