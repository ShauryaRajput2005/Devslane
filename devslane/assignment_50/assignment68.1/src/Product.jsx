import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ProductDetails from "./ProductDetails";


function Product({ id, name, category, price, photo ,rating }) {
  return (
    <div className="bg-gray-100 flex flex-col rounded shadow-md w-full max-w-sm h-100 overflow-hidden bg-white/20 backdrop-blur-xs backdrop-opacity-50 transition-transform  duration-200 ease-in-out hover:scale-101">
      <div className="w-full h-3/5">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start gap-2 px-2 h-2/5">
        <p className="text-gray-400 text-xl">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
          <p className="text-black text-lg font-bold leading-tight break-words line-clamp-2">
            {name}
          </p>
          <p> Rating : {rating} </p>
          <p className="text-black text-sm font-semibold">{price}</p>
          <Link to={`/product/${id}`} className="bg-orange-500 text-white px-4 py-1 rounded-md shadow hover:bg-orange-600 hover:scale-115 transition duration-200 ease-in-out flex items-center gap-1">Details
          </Link>
      
      </div>
    </div>
  )
}

export default Product
