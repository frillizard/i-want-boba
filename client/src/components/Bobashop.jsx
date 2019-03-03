import React from 'react';

const Boba = ({shop}) => {
    return (
      <div>
        <li>
          <a href={shop.url}>
            {shop.name}
          </a>
        </li>
      </div>
    )
}

export default Boba;