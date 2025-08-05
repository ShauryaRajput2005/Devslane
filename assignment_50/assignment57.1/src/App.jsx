import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product.jsx'
import Navbar from './Navbar.jsx'
import Tabs from './Tabs.jsx'
import Footer from './Footer.jsx'
import ProductList from './ProductList.jsx'


const prolist = [
  {
    name: " Black Printed Coffee Mug",
    category: "Mug",
    price: "$15.00",
    photo: "https://images.unsplash.com/photo-1616241673111-508b4662c707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww"
  },
  {
    name: "Fathers Day Coffee Mug",
    category: "Mug",
    price: "$19.00",
    photo: "https://images.unsplash.com/photo-1616241673111-508b4662c707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww"
  },
  {
    name: "Green Printed T-Shirt",
    category: "T-Shirts",
    price: "$34.00",
    photo: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: " Personalised Mug",
    category: "Mug",
    price: "$15.00",
    photo: "https://images.unsplash.com/photo-1616241673111-508b4662c707?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww"
  },
  {
    name: "Printed Brown T-Shirt",
    category: "T-Shirt",
    price: "$25.00",
    photo: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Printed Dark Blue T-Shirt",
    category: "T-Shirt",
    price: "$34.00",
    photo: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Printed Dark Blue T-Shirt",
    category: "T-Shirt",
    price: "$34.00",
    photo: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Printed Dark Blue T-Shirt",
    category: "T-Shirt",
    price: "$34.00",
    photo: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Printed Dark Blue T-Shirt",
    category: "T-Shirt",
    price: "$34.00",
    photo: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
  }
]


function App() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(prolist);
  const [sort, setSort] = useState('default');

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setQuery(query);

    const filtered = prolist.filter(item =>
      item.name.toLowerCase().includes(query)
    );

    setFilteredData(filtered);
  }

  function handleSort(event) {
    const sortValue = event.target.value;
    setSort(sortValue);

    let sorted = [...filteredData]; // create a shallow copy

    if (sortValue === 'Price-low') {
      sorted.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    } else if (sortValue === 'Price-high') {
      sorted.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    } else if (sortValue === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sorted = [...prolist]; // reset to original order
    }

    setFilteredData(sorted);
  }

  return (
    <div className='flex flex-col gap-15'>
      <div className='mb-10'><Navbar /></div>

      <div className=' flex flex-col self-center bg-white p-6 max-w-6xl'>


        <div className='text-black text-sm  rounded w-full flex justify-between'>

          <input type="text" className="border-2 border-gray-200 shadow-sm bg-gray-100 w-1/3 rounded-4xl focus:bg-white  transition-transform duration-200 ease-in-out hover:scale-105" placeholder='Search' onChange={handleChange} />


          <div className="border-2 border-gray-200 shadow-sm bg-gray-100   focus:bg-white  transition-transform duration-200 ease-in-out hover:scale-105">
            <label for="category"></label>
            <select id="category" name="category" value={sort} onChange={handleSort}>
              <option value="default">Default</option>
              <option value="name">Name</option>
              <option value="Price-low">Price:Low to High</option>
              <option value="Price-high">Price:Hight to Low</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-6'>
          <ProductList products={filteredData} />
        </div>

        <div className='p-4 flex gap-1'>
          <Tabs number="1" color="bg-orange-500" text="text-white-500 " />
          <Tabs number="2" color="bg-white-500" text="text-orange-500" />
          <Tabs number="&rarr;" color="bg-white-500" text="text-orange-500" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
