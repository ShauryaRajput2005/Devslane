import './index.css';

function ProductDetails() {
    return (
        <div className="flex gap-4 p-4 ">
            <img
                className="w-1/3 rounded object-cover"
                src="https://images.unsplash.com/photo-1616241673111-508b4662c707?w=600&auto=format&fit=crop&q=60"
                alt="Coffee Mug"
            />
            <div className="text-gray-700 flex flex-col items-start space-y-4">
                <h1 className="text-3xl font-extrabold">Black Printed Coffee Mug</h1>
                <h3 className="text-xl font-medium">$15.00</h3>
                <p className='text-left'>
                    Neque porro quisquam est, qui dolore ipsum quia
                    dolor sit amet, consectetur adipisci velit, sed quia
                    non incidunt lores ta porro ame. numquam eius
                    modi tempora incidunt lores ta porro ame.
                </p>
                <div className="flex gap-2">
                    <input type="number" defaultValue={1} className="w-16 p-1 border border-gray-300 rounded" />
                    <div className='border-2 border-red-400 p-2 bg-red-400 rounded-lg'>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
