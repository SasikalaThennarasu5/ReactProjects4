// App.jsx (Frontend-only simulation of E-commerce checkout with fake payment)
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Phone', price: 500 },
    { id: 2, name: 'Laptop', price: 1200 },
    { id: 3, name: 'Headphones', price: 200 },
  ]);
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState('shop'); // 'shop' | 'checkout' | 'confirm'

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {
    setStep('checkout');
  };

  const handleConfirm = () => {
    setCart([]);
    setStep('confirm');
  };

  return (
    <div className="app">
      <h1>React Store</h1>
      {step === 'shop' && (
        <>
          <ProductList products={products} addToCart={addToCart} />
          <Cart cart={cart} onCheckout={handleCheckout} />
        </>
      )}
      {step === 'checkout' && <Checkout cart={cart} onConfirm={handleConfirm} />}
      {step === 'confirm' && <Confirmation />}
    </div>
  );
};

export default App;
