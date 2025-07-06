import React from 'react';
import Product from './Product';

function CategoryCard({ products }) {
  return (
    <div className='categoryCard'>
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.product_name}
          price={product.discounted_price}
          rating={product.rating}
          image={product.img_link}
        />
      ))}
    </div>
  );
}

export default CategoryCard;
