import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './ProductDetails.jsx';


import Product from './Product.jsx'
import Navbar from './Navbar.jsx'
import Tabs from './Tabs.jsx'
import Footer from './Footer.jsx'
import ProductList from './ProductList.jsx'
import Home from './Home.jsx'



function App() {
  return (
      <div className='flex flex-col gap-15 '>
        <div className='mb-10'> <Navbar /></div>
        <div className='self-center h-4/5'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          </BrowserRouter>
        </div>
        <div><Footer/></div>
      </div>
  );
}

export default App
