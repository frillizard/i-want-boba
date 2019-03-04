import React from 'react';

const Boba = ({shop}) => {
    return (
      <div className='list-item'>
        <div className='list-item-wrapper'>
          <div><img src={shop.image_url} className="list-item-image"/></div>
          <div className='list-item-container'>
            <div className='list-item-title'>{shop.name}</div>
            <div>{shop.rating}</div>
            <div>Based on {shop.review_count} reviews</div>
            <a href={shop.url}>View on Yelp</a>
          </div>
        </div>
      </div>
    )
}

export default Boba;