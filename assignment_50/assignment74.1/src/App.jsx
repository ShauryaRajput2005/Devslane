
import { useState, useEffect } from "react";
import { Form, useFormik } from 'formik';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import ProductDetails from './ProductDetails';
import CartPage from './CartPage';
import LoginPage from './LoginPage';
import axios from "axios";
import { Loading } from "./Loading";
import SignupPage from "./Signup";
import Alert from "./Alert";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isVerified, setisVerified] = useState(null);

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [alert, setAlert] = useState(null)


  const token = localStorage.getItem("token");

  const showAlert = (message, type = "error") => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 4000);
  };

  useEffect(() => {
    console.log("Token on mount:", token);
    if (token) {
      axios.get("https://myeasykart.codeyogi.io/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log('User data fetched:', response.data.user);
          setUser(response.data.user);
          setisVerified(true);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setisVerified(false);
        });
    } else {
      setLoading(false);
      setisVerified(false);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);



  if (loading) {
    return <Loading />
  }
  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      showAlert("Quantity updated!", "success");
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      showAlert("Item added to cart!", "success");
    }
  };

  const updateQuantity = (id, delta) => {
    setCartItems(cartItems
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity + delta } : item
      )
      .filter(item => item.quantity > 0)
    );
    showAlert("Cart updated", "success");
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    showAlert("Item removed from cart", "error");
  };

  return (
    <BrowserRouter>
      {alert && <Alert message={alert.message} type={alert.type} />}
      <div className='flex flex-col bg-[url("https://plus.unsplash.com/premium_photo-1673029926917-40a9e3336b5b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover gap-20' >
        {/* Fixed Navbar */}
        <Navbar user={user} setUser={setUser} setisVerified={setisVerified}/>

        {/* Main Content */}
        <main className='mt-16 self-center'>
          <Routes>
            <Route
              path="/login"
              element={
                isVerified
                  ? <Navigate to="/" /> 
                  : <LoginPage
                    setisVerified={setisVerified}
                    setUser={setUser}
                    showAlert={showAlert}
                  />
              }
            />
            <Route
              path="/signup"
              element={
                isVerified
                  ? <Navigate to="/" /> 
                  : <SignupPage
                    setisVerified={setisVerified}
                    setUser={setUser}
                    showAlert={showAlert}
                  />
              }
            />

            <Route
              path="/product/:id"
              element={
                isVerified
                  ? <ProductDetails addToCart={addToCart} />
                  : <Navigate to="/login" />
              }
            />
            <Route path="/" element={isVerified
              ? (
                <Home />
              )
              : <Navigate to="/login" />} />
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
