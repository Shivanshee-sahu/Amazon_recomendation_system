import React from 'react';
import './ProductCard.css'; // optional

function ProductCard({ title, price, rating, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title || "Product"} />
      <div>
        <h4>{title}</h4>
        <p>₹{price}</p>
        <p className='rating'>{"⭐".repeat(Math.round(rating || 0))}</p>
      </div>
    </div>
  );
}

export default ProductCard;
