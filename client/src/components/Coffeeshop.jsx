import React from 'react';

const Coffee = ({shop}) => {
    return (
      <div>
        <li>
          <div>
            {shop.name}
          </div>
        </li>
      </div>
    )
}

export default Coffee;