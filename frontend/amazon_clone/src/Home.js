import React, { useEffect, useState } from 'react'
import './Home.css'
import Papa from 'papaparse';
import Product from './Product'

function Home() {
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

            // Shuffle using Fisher-Yates algorithm
            for (let i = allProducts.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [allProducts[i], allProducts[j]] = [allProducts[j], allProducts[i]];
            }

            const validProducts = [];

            for (const product of allProducts) {
              if (validProducts.length >= 6) break;

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

  // Function to check if an image URL works
  function checkImageURL(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  }

  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' alt='amazon_con' src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/PD25/Payal/GW-Hero-Pc-01_GOLD._CB790067108_.jpg"/>
 <div className="home_rows">
        {/* Row 1 - 2 products */}
        <div className="home_row">
          {products.slice(0, 2).map((product, index) => (
            <Product
              key={index}
              title={product.product_name}
              price={product.discounted_price}
              actualprice={product.actual_price}
              rating={product.rating}
              image={product.img_link}
            />
          ))}
        </div>

        {/* Row 2 - 3 products */}
        <div className="home_row">
          {products.slice(2, 5).map((product, index) => (
            <Product
              key={index + 2}
              title={product.product_name}
              price={product.discounted_price}
              rating={product.rating}
              image={product.img_link}
            />
          ))}
        </div>

        {/* Row 3 - 1 product */}
        <div className="home_row">
          {products.slice(5, 6).map((product, index) => (
            <Product
              key={index + 5}
              title={product.product_name}
              price={product.discounted_price}
              rating={product.rating}
              image={product.img_link}
            />
          ))}
        </div>
      </div>
        </div>

    </div>
  )
}

export default Home