import React from 'react'
import './product.css'
function Product({title, price,actualprice, rating, image}) {
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className='actual_price'>
          <small>$</small>
          <strong>{actualprice}</strong>
        </p>
        <div className='product_rating'>
          <p>{'⭐'.repeat(Math.round(rating))}</p>
        </div>
      </div>
      <img src={image} alt="product_image" />
      <button>Add to Basket</button>
    </div>
  )
}

export default Product