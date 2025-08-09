import { useState, useEffect } from 'react'
import Product from './Product.jsx'
import Navbar from './Navbar.jsx'
import Tabs from './Tabs.jsx'
import Footer from './Footer.jsx'
import ProductList from './ProductList.jsx'
import { getProductList } from './api.js'



function Home() {

    const [prolist, setprolist] = useState([])
    useEffect(function () {
        const response = getProductList();
        response.then(function (response) {
            setprolist(response.data.products)
        })
    }, [])

    useEffect(() => {
        setFilteredData(prolist);
    }, [prolist]);


    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [sort, setSort] = useState('default');



    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setQuery(query);

        const filtered = prolist.filter(item =>
            (item.title ?? "").toLowerCase().includes(query)
        );


        setFilteredData(filtered);
    }

    function handleSort(event) {
        const sortValue = event.target.value;
        setSort(sortValue);

        let sorted = [...filteredData];

        if (sortValue === 'Price-low') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'Price-high') {
            sorted.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'name') {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else {
            sorted = [...prolist];
        }

        setFilteredData(sorted);
    }
    useEffect(() => {
        console.log("Product List updated:", prolist);
    }, [prolist]);


    return (


        <div className=' flex flex-col self-center  p-6 max-w-6xl '>


            <div className='text-black text-sm  rounded w-full flex justify-between  flex flex-col md:flex-row gap-5  '>

                <input type="text" className="w-72 px-4 rounded-full bg-gray-100 text-gray-700 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm transition duration-200" placeholder='Search' onChange={handleChange} />

                <div className="w-44 px-4  rounded-md bg-gray-100 text-gray-700 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200">
                    <label htmlFor="category"></label>
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
    )
}



export default Home;