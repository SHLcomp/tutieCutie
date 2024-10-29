import React from 'react'
import './Similar.scss'
import data from '../assets/dataSimilar.js'
import Item from '../item/item'

const Similar = () => {
  
  return (
    <div className='similar'>
        <h1>Similar items:</h1>
        <hr />
      <div className="container">
          {data.map((item, i) =>{
        return (
            <Item name={item.name} key={i} price={item.price} image={item.image} short_des={item.short_des} id={item.id}/>
        )
      })}
      </div>
    </div>
  )
}

export default Similar
