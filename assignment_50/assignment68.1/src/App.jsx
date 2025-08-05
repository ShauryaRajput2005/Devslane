
import { useState } from "react";
import { Form, useFormik } from 'formik';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import ProductDetails from './ProductDetails';
import CartPage from './CartPage';
import LoginPage from './LoginPage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isVerified,setisVerified]=useState(false)

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
      <div className='flex flex-col bg-[url("https://plus.unsplash.com/premium_photo-1673029926917-40a9e3336b5b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover gap-20' >
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className='mt-16 self-center bg-white/20 backdrop-blur-xs backdrop-opacity-50'>
          <Routes>
            <Route path="/login" element={<LoginPage setisVerified={setisVerified} />} />
            <Route path="/" element={ isVerified ? <Home />: <Navigate to="/login" />}/>
             <Route
              path="/product/:id"
              element={
                isVerified
                  ? <ProductDetails addToCart={addToCart} />
                  : <Navigate to="/login" />
              }
            />

            <Route
              path="/cart"
              element={
                isVerified
                  ? (
                    <CartPage
                      cartItems={cartItems}
                      updateQuantity={updateQuantity}
                      removeFromCart={removeFromCart}
                    />
                  )
                  : <Navigate to="/login" />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
