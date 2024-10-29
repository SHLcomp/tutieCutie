import React from 'react';
// import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import all_product from '../components/assets/all_products.jsx'; //or refernece it via context
import Breadcrum from '../components/breadcrum/Breadcrum.jsx'
import ProductDisplay from '../components/productDisplayy/ProductDisplay.jsx'

const Product = () => {
  // const {all_product} = useContext(ShopContext); //referencing via context
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product;
