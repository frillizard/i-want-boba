import React from 'react';

const halfCheck = (rating) => {
  return rating % 1 > 0 ? `rating-${Math.floor(rating)}-half` : `rating-${rating}`;
}

const Boba = ({shop}) => {
    return (
      <div className='list-item'>
        <div className='list-item-wrapper'>
          <div><img src={shop.image_url} className="list-item-image"/></div>
          <div className='list-item-container'>
            <div className='list-item-title'>{shop.name}</div>
            <div className='rating-container'>
              <img className={`${halfCheck(shop.rating)}`}/>
              {shop.review_count} reviews
            </div>
            <div>{`${shop.location.city}, ${shop.location.state}`}</div>
            <div>
              <a href={shop.url} target='_blank'>More info on Yelp</a>
            </div>
            <div>
              <a href={`https://www.google.com/maps/search/?api=1&query=${shop.coordinates.latitude}, ${shop.coordinates.longitude}`} target='_blank'>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Boba;