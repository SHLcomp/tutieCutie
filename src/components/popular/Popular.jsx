import React from 'react'
import Item from '../item/item.jsx';
import '../popular/popular.scss';
import popular_data from '../assets/data';

const Popular = () => {
  return (
    <div>
      <div className="popular">
        <h1>Popular Items:</h1>
        <hr />

        <div className="container">
            <div className="popular-items">
          {popular_data.map((item, i) =>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} short_des={item.short_des}/>
          })}
          
        </div>
        </div>
      



      </div>
    </div>
  )
};

export default Popular;
