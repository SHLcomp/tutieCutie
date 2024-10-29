// home page
import React from 'react';
import Hero from '../components/Hero/Hero.jsx';
import Popular from '../components/popular/Popular.jsx';
import Collection from '../components/collections/Collections.jsx';
import Offer from '../components/offer/Offer.jsx';



const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <Collection />
    </div>
  )
};

export default Shop;
