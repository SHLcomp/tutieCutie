import React from 'react'
import './item.scss'
import { Link } from 'react-router-dom'

const item = (props) => {
  return (
    <div>
      <div className="item">
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <div className="item-info">
          <h4>{props.name}</h4>
          <p>{props.short_des}</p>
          <h5>${props.price}</h5>
        </div>

        <div className="item-btns">
          <button>Add to cart</button>  
          <i class="fa-solid fa-heart"></i>
        </div>
        
      </div>
    </div>
  )
}

export default item
