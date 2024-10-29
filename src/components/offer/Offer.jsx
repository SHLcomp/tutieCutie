import React from 'react';
import './Offer.scss';
import person from '../assets/cool person.jpg';




const Offer = () => {
  return (
    <div className='offer'>
      <div className="offer-left">
          {/*  */}        

          <div className="img">
            <img src={person} alt="" />
          </div>



          <div className="text">
          {/* header */}
          <h2>SPECIAL OFFERS</h2>
          <h3>Offers made specially for you!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et delectus vitae laudantium, dolores asperiores vero nobis beatae ducimus sint commodi a alias velit? Eos minima totam magni? Minima, repudiandae.</p>
          </div>


      </div>
      
    </div>
  )
}

export default Offer
