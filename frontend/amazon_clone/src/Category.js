import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import CategoryCard from './CategoryCard';
import './Category.css'; // Make sure to style this

function Category() {
  const [categoryProducts, setCategoryProducts] = useState({
    Electronics: [],
    Books: [],
    Clothing: [],
    'Home & Kitchen': [],
  });

  useEffect(() => {
    fetch('/amazon.csv')
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            const validProducts = result.data.filter(
              (item) => item.img_link && item.category
            );

            const grouped = {
              Electronics: [],
              Books: [],
              Clothing: [],
              'Home & Kitchen': [],
            };

            for (let item of validProducts) {
              const category = item.category.trim();
              if (grouped[category] && grouped[category].length < 5) {
                grouped[category].push(item);
              }
            }

            setCategoryProducts(grouped);
          },
        });
      });
  }, []);

  return (
    <div className='Category'>
      <h1>Shop by Category</h1>
      <div className='category_container'>
        {Object.entries(categoryProducts).map(([categoryName, items]) => (
          <div className='category_item' key={categoryName}>
            <img
              src='https://m.media-amazon.com/images/I/61b1+1+8b2L._AC_SY200_.jpg'
              alt={categoryName}
            />
            <p>{categoryName}</p>
            <CategoryCard products={items} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
 