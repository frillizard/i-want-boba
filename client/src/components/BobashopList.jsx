import React from 'react';
import Bobashop from './Bobashop.jsx';

const BobashopList = ({locations}) => {
  return (
    <div>
      <ul>
        {locations.map((shop, i) => {
          return <Bobashop key={i} shop={shop}/>
        })}
      </ul>
    </div>
  );
}

export default BobashopList