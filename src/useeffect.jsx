import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from './CartContext'; // sahi path

function FetchDataExample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useContext(CartContext); // context ka function

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) throw new Error('Network response not ok');
        return response.json();
      })
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {products.slice(0, 6).map(product => (
        <div key={product.id} style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '15px',
          width: '200px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <img 
            src={product.image} 
            alt={product.title} 
            style={{ width: '100px', height: '100px', objectFit: 'contain', margin: '0 auto' }} 
          />
          <h4 style={{ fontSize: '14px', minHeight: '40px' }}>{product.title}</h4>
          <p style={{ color: 'green', fontWeight: 'bold' }}>${product.price}</p>
          <button 
            onClick={addToCart} // click pe context wala function call
            style={{ padding: '8px 12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default FetchDataExample;
