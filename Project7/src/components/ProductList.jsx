import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} className="product-item">
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;