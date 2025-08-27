import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import ProductDetails from './ProductDetails';
import CartPage from './CartPage';
import LoginPage from './LoginPage';
import SignupPage from "./Signup";
import { Loading } from "./Loading";
import Alert from "./Alert";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const [token, setToken] = useState(() => localStorage.getItem("token")); // ✅ keep in state
  const [isVerified, setisVerified] = useState(!!token);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type = "error") => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 4000);
  };

  // ✅ Verify token on mount & when token changes
  useEffect(() => {
    if (!token) {
      setisVerified(false);
      setLoading(false);
      return;
    }

    setLoading(true);
    axios.get("https://myeasykart.codeyogi.io/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setUser(response.data.user);
        setisVerified(true);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("token");
        setToken(null);
        setisVerified(false);
        setLoading(false);
      });
  }, [token]); // ✅ runs again when token updates

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  if (loading) {
    return <Loading />;
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
      <div className='flex flex-col bg-gradient-to-r from-blue-200 to-emerald-200 h-full w-screen bg-cover gap-20'>
        
        <Navbar user={user} setUser={setUser} setisVerified={setisVerified} showAlert={showAlert} />

        <main className='mt-16 self-center'>
          <Routes>
            <Route
              path="/login"
              element={
                isVerified
                  ? <Navigate to="/" />
                  : <LoginPage setToken={setToken} setisVerified={setisVerified} setUser={setUser} showAlert={showAlert} />
              }
            />
            <Route
              path="/signup"
              element={
                isVerified
                  ? <Navigate to="/" />
                  : <SignupPage setToken={setToken} setisVerified={setisVerified} setUser={setUser} showAlert={showAlert} />
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
            <Route
              path="/cart"
              element={
                isVerified
                  ? <CartPage cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
                  : <Navigate to="/login" />
              }
            />
            <Route
              path="/"
              element={isVerified ? <Home /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
