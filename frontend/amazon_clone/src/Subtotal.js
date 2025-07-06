import React from 'react';
import './Subtotal.css';
import { NumericFormat } from 'react-number-format';

function Subtotal() {
  return (
    <div className='subtotal'>
      <NumericFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={250.96}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
