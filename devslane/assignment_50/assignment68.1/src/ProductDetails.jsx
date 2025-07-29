import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { getProductData } from "./api";
import { Loading } from "./Loading";
import { FaCartPlus } from "react-icons/fa6";


function ProductDetails({ addToCart }) {

  const { id: idParam } = useParams();
  const id = parseInt(idParam, 10);
  const [product, setProduct] = useState()

  useEffect(function () {
    const resp = getProductData(id);

    resp.then(function (response) {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="flex gap-4 p-4 bg-gray-50 shadow-md m-5 flex flex-col md:flex-row rounded-xl h-screen bg-white/20 backdrop-blur-xs backdrop-opacity-50">
      <img className="md:w-1/3 rounded object-cover max-h-600px" src={product.thumbnail} alt={product.title} />
      <div className="text-gray-700 flex flex-col items-start space-y-4">
        <h1 className="text-3xl font-extrabold">{product.title}</h1>
        <h3 className="text-xl font-medium">${product.price}</h3>

        <p className='text-left'>
          Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit...
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="number"
            min={1}
            defaultValue={1}
            className="w-16 p-1 border border-gray-300 rounded"
          />

          <div className="group border-2 border-red-400 px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out">
            <button
              onClick={() => {
                console.log("Adding:", product);
                addToCart(product);
              }}
              className="flex items-center gap-2"
            >
              <span className="group-hover:hidden transition-opacity duration-300">Add to Cart</span>
              <span className="hidden group-hover:inline-block w-20 transition-opacity duration-300">
                <FaCartPlus className="w-full"/>
              </span>
            </button>
          </div>

          <Link
            to="/"
            className="border-2 border-red-400 px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out"
          >
            Back
          </Link>

          {/* Preserve space for Previous */}
          {id > 1 ? (
            <Link
              to={`/product/${id - 1}`}
              className="border-2 border-red-400 px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Previous
            </Link>
          ) : (
            <div className="px-4 py-2 invisible border-2 border-transparent rounded-lg">
              Placeholder
            </div>
          )}

          <Link
            to={`/product/${id + 1}`}
            className="border-2 border-red-400 px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out"
          >
            Next
          </Link>
        </div>


      </div>
    </div>
  );
}

export default ProductDetails;
