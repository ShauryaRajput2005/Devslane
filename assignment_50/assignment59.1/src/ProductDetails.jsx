import { useParams } from "react-router-dom";
import prolist from "./data";
import { Link } from 'react-router-dom';

function ProductDetails( {addToCart}) {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = prolist.find(p => p.id === productId);

  if (!product) return <div className="p-4">Product not found.</div>;

  return (
    <div className="flex gap-4 p-4 bg-gray-50 shadow-md m-5 flex flex-col md:flex-row rounded-xl h-screen">
      <img className="md:w-1/3 rounded object-cover max-h-600px" src={product.photo} alt={product.name} />
      <div className="text-gray-700 flex flex-col items-start space-y-4">
        <h1 className="text-3xl font-extrabold">{product.name}</h1>
        <h3 className="text-xl font-medium">{product.price}</h3>
        <p className='text-left'>
          Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit...
        </p>
        <div className="flex gap-5">
          <input type="number" min={1} defaultValue={1} className="w-16 p-1 border border-gray-300 rounded" />
          <div className="border-2 border-red-400 p-2 bg-red-400 text-white rounded-lg hover:bg-red-500 hover:scale-105 transition-transform ease-in-out duration-200">
            <button
              onClick={() => {
                console.log("Adding:", product);  // ✅ Check if this prints
                addToCart(product);
              }}
            >
              Add to Cart
            </button>



          </div>
          <Link to='/' className="border-2 border-red-400 p-2 bg-red-400 text-white rounded-lg hover:bg-red-500 hover:scale-105 transition-transform ease-in-out duration-200">Back</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
