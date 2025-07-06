import React, { useState } from 'react';
import './rec.css'; // assuming this contains the styles for `.product`

const Recommendations = () => {
  const [query, setQuery] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRecommendations = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:5000/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      if (response.ok) {
        setRecommendations(data);
      } else {
        setError(data.error || 'Failed to get recommendations');
      }
    } catch (err) {
      setError('Server error');
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="recommendation-container">
  {/* Top section with background image and overlay */}
  <div className="top-section">
    <img alt="main" className="background-img" src="./img1.png" />
    <div className="overlay" />
    <div className="top-content">
      <h2>Get Top Product Recommendations</h2>
      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter product keywords..."
        />
        <button onClick={fetchRecommendations}>Search</button>
      </div>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
    </div>
  </div>

  {/* Recommendation grid */}
  <div className="recommendation-grid">
    {recommendations.map((item, index) => (
      <div key={index} className="product">
        <img src={item.image_url} alt={item.title} />
        <div className="product_info">
          <p>{item.title}</p>
          <p className="product_price">
            <small>₹</small>
            <strong>{item.price}</strong>
          </p>
          <div className="product_rating">
            <p>{'⭐'.repeat(Math.round(item.rating))}</p>
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
    ))}
  </div>
</div>

  );
};

export default Recommendations;
