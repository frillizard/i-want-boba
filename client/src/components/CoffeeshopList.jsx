import React from 'react';
import Coffeeshop from './Coffeeshop.jsx';

const CoffeeshopList = ({locations}) => {
  return (
    <div>
      <ul>
        {locations.map((shop, i) => {
          return <Coffeeshop key={i} shop={shop}/>
        })}
      </ul>
    </div>
  );
}

export default CoffeeshopList