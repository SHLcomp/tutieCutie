import React from 'react';
import './Hero.scss';
import person from '../assets/cool person2.jpg';




const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
          {/*  */}
          <div className="text">
          {/* header */}
          <h2>NEW ARRIVALS ONLY</h2>
          <h3>Collections or everyone</h3>
          <button>Explore</button>
          </div>
          

          <div className="img">
            <img src={person} alt="" />
          </div>


      </div>
      
    </div>
  )
}

export default Hero
