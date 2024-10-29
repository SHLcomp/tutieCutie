import React from 'react'
import Item from '../item/item.jsx';
import '../collections/Collections.scss';
import collection_data from '../assets/data.js';

const Collection = () => {
  return (
    <div>
      <div className="collection">
        <h1>Collection Items:</h1>
        <hr />

        <div className="container">
            <div className="collection-items">
          {collection_data.map((item, i) =>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} short_des={item.short_des}/>
          })}
          
        </div>
        </div>
      



      </div>
    </div>
  )
};

export default Collection;
