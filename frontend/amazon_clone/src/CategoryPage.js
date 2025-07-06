import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './CategoryPage.css';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

function CategoryPage() {

 const [products, setProducts] = useState([]);
useEffect(() => {
    fetch('/amazon.csv')
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: async (result) => {
            const allProducts = result.data;

        const filtered = allProducts.filter((product) => {
  const price = parseFloat(product.discounted_price.replace(/[₹,]/g, ''));
  return !isNaN(price) && price < 299 && product.img_link;
});


          // Shuffle using Fisher-Yates algorithm
          for (let i = filtered.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
          }

          const validProducts = [];

          for (const product of filtered) {
            if (validProducts.length >= 15) break;

            const isValid = await checkImageURL(product.img_link);
            if (isValid) {
              validProducts.push(product);
            }
          }

          setProducts(validProducts);
        },
      });
    });
}, []);

const checkImageURL = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};


  return (
   <div className="category-page">
 <h1>Under ₹299</h1>

  <div className="horizontal-scroll">
  {products.map((product, idx) => {
  console.log(product);
  return (
    <ProductCard
      key={product.product_id || idx}
      title={product.product_name}
      price={product.discounted_price}
      rating={product.rating}
      image={product.img_link}
    />
  );
})}

   
  </div>
</div>

  );
}

export default CategoryPage;
