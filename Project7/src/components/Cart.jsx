import React from 'react';

const Cart = ({ cart, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Cart is empty.</p>}
      {cart.map((item, index) => (
        <p key={index}>{item.name} - ${item.price}</p>
      ))}
      <h3>Total: ${total}</h3>
      {cart.length > 0 && <button onClick={onCheckout}>Proceed to Checkout</button>}
    </div>
  );
};

export default Cart;
