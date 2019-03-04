import React from 'react';
import Bobashop from './Bobashop.jsx';

const BobashopList = ({locations}) => {
  return (
    <div className='list-wrapper'>
      {locations.map((shop, i) => {
        return <Bobashop key={i} shop={shop}/>
      })}
    </div>
  );
}

export default BobashopList