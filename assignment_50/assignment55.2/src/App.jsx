import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product.jsx'
import Navbar from './Navbar.jsx'
import Tabs from './Tabs.jsx'
import Footer from './Footer.jsx'
import ProductDetails from './ProductDetails.jsx'

function App() {
  return (
    <div className='flex flex-col gap-15'>
      <div className='mb-10'><Navbar /></div>

      <div className='self-center w-4/5 bg-gray-200 shadow-md'><ProductDetails/></div>
      <div className=' flex flex-col self-center bg-white p-6 max-w-6xl'>

        <div className='text-black text-xs border-1 border-gray-300 rounded self-end'>   
        <label for="category"></label>
        <select id="category" name="category">
          <option value="mugs">Mugs</option>
          <option value="tshirts">T-Shirts</option>
          <option value="stickers">Stickers</option>
        </select>
        </div>

        <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-6'>
          <Product
            name=" Black Printed Coffee Mug"
            category="Mug"
            price="$15.00"
            photo="https://images.unsplash.com/photo-1616241673111-508b4662c707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww"
          />
          <Product
            name=" Fathers Day Coffee Mug"
            category="Mug"
            price="$19.00"
            photo="https://images.unsplash.com/photo-1616241673111-508b4662c707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww"
          />
          <Product
            name="Green Printed T-Shirt"
            category="T-Shirts"
            price="$34.00"
            photo="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Product
            name=" Personalised Mug"
            category="Mug"
            price="$15.00"
            photo="https://images.unsplash.com/photo-1616241673111-508b4662c707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww"
          />
          <Product
            name="Printed Brown TShirt"
            category="T-Shirt"
            price="$25.00"
            photo="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Product
            name="Printed Dark Blue T-Shirt"
            category="T-Shirt"
            price="$34.00"
            photo="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Product
            name="Printed Dark Blue T-Shirt"
            category="T-Shirt"
            price="$34.00"
            photo="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Product
            name="Printed Dark Blue T-Shirt"
            category="T-Shirt"
            price="$34.00"
            photo="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
          />
          <Product
            name="Printed Dark Blue T-Shirt"
            category="T-Shirt"
            price="$34.00"
            photo="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>

        <div className='p-4 flex gap-1'>
          <Tabs number="1" color="bg-orange-500" text="text-white-500"/>
          <Tabs number="2" color="bg-white-500" text="text-orange-500"/>
          <Tabs number="&rarr;" color="bg-white-500" text="text-orange-500"/>
        </div>  
      </div>
            <Footer/>
    </div>
  )
}

export default App
