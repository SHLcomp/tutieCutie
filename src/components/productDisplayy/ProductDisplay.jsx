import React, { useContext } from 'react' 
import { ShopContext } from '../../context/ShopContext.jsx';
import './ProductDisplay.scss';
import Similar from '../similarItems/Similar.jsx'



const ProductDisplay = (props) => {
  const {product} = props;
  //cart
  const {addToCart} = useContext(ShopContext);
  
  return (
    <div>
        <div className="chosen-item">
        <div className="left">
          <img src={product.image} alt='' />
          <div className="img-info">
            
          </div>
        </div>


        <div className="right">
          <div className="item-info">
            
          <h1>{product.name}</h1>
          <h4>${product.price}</h4>
          <p>{product.long_des}</p>

          <div className="item-ctas">
            <h3>Available in:</h3>
            <div className="sizes">
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
            </div>
            <button className="add-to-cart" onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
          </div>


          </div>
        </div>
      </div>



      <Similar />
    </div>
  )
}

export default ProductDisplay;
