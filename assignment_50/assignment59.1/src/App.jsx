import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import ProductDetails from './ProductDetails';
import CartPage from './CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, delta) => {
    setCartItems(cartItems
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col ">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="mt-16 mb-24 justify-center-items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/product/:id"
              element={<ProductDetails addToCart={addToCart} />}
            />

            <Route path="/cart" element={
              <CartPage
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
