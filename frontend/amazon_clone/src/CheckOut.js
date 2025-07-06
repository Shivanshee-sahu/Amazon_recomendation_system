import React from 'react';
import './CheckOut.css';
import Subtotal from './Subtotal';

function CheckOut() {
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          className='checkout_ad'
          src='https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg'
          alt='Empty Cart'
        />
        <hr />
        <div>
          <h2 className='checkout_title'>Your Shopping Basket</h2>
          {/* Map your basket items here */}
        </div>
      </div>

      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckOut;
