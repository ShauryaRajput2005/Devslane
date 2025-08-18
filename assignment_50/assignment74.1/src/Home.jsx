import { useState, useEffect } from "react";
import _ from "lodash";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductList from "./ProductList.jsx";
import Tabs from "./Tabs.jsx";
import { getProductList } from "./api.js";

function Home() {
    const [prolist, setProlist] = useState([]);
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("default");
    const [totalPages, setTotalPages] = useState(1);

    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const currentPage = parseInt(searchParams.get("page")) || 1;
    const currentQuery = searchParams.get("search") || "";
    const currentSort = searchParams.get("sort") || "default";

    // Sync state with URL
    useEffect(() => {
        setQuery(currentQuery);
        setSort(currentSort);
    }, [currentQuery, currentSort]);

    // Fetch products
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await getProductList({ search: currentQuery, pageNo: currentPage });
                setProlist(response.data.products);
                setTotalPages(Math.ceil(response.data.total / response.data.limit));
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProducts();
    }, [currentQuery, currentPage]);

    // Handle search
    function handleChange(event) {
        const newQuery = event.target.value.toLowerCase();
        setQuery(newQuery);

        const params = new URLSearchParams(location.search);
        params.set("search", newQuery);
        params.set("page", 1);
        params.set("sort", sort);
        navigate(`?${params.toString()}`);
    }

    // Handle sort
    function handleSort(event) {
        const newSort = event.target.value;
        setSort(newSort);

        const params = new URLSearchParams(location.search);
        params.set("sort", newSort);
        params.set("search", query);
        params.set("page", currentPage);
        navigate(`?${params.toString()}`);
    }

    // Sort products locally
    const sortedData = _.orderBy(
        prolist,
        [
            (item) => {
                if (sort === "Price-low" || sort === "Price-high") return item.price;
                if (sort === "name") return item.title.toLowerCase();
                return 0;
            },
        ],
        [sort === "Price-low" || sort === "name" ? "asc" : "desc"]
    );

    return (
        <div className="flex flex-col self-center p-6 max-w-6xl">
            {/* Search & Sort */}
            <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-72 px-4 rounded-full bg-gray-100 text-gray-700 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm transition duration-200"
                    value={query}
                    onChange={handleChange}
                />
                <select
                    value={sort}
                    onChange={handleSort}
                    className="w-44 px-4 rounded-md bg-gray-100 text-gray-700 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
                >
                    <option value="default">Default</option>
                    <option value="name">Name</option>
                    <option value="Price-low">Price: Low to High</option>
                    <option value="Price-high">Price: High to Low</option>
                </select>
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-6">
                <ProductList products={sortedData} />
            </div>

            {/* Pagination Tabs */}
            {totalPages > 1 && (
                <div className="p-4 flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <Link
                            key={i + 1}
                            to={`?page=${i + 1}&search=${query}&sort=${sort}`}
                            className={currentPage === i + 1 ? "pointer-events-none" : ""}
                        >
                            <Tabs number={i + 1} isActive={currentPage === i + 1} />
                        </Link>
                    ))}
                    {currentPage < totalPages && (
                        <Link to={`?page=${currentPage + 1}&search=${query}&sort=${sort}`}>
                            <Tabs number="→" isActive={false} />
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;
