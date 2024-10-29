import React from 'react'
import './Breadcrum.scss'
import { Link } from 'react-router-dom';

const Breadcrum = (props) => {
  const {product} = props;
  return (
     
    <div className='breadcrum'>

    <p>  Home/<Link style={{textDecoration: "none"}} to={`/`}>Shop</Link>/<Link style={{textDecoration: "none"}} to={`/${product.category}`}>{product.category}</Link>/<Link style={{textDecoration: "none"}} to={`/product/${product.id}`}>{product.name}</Link></p>
    </div>
  )
}

export default Breadcrum
