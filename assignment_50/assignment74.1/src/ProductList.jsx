import Product from './Product.jsx';

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p className="text-gray-500 text-center w-full">No products found.</p>;
  }

  return (
    <>
      {products.map((item) => {
    

        return (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
            photo={item.thumbnail}
            rating={item.rating}
          />
        );
      })}
    </>
  );
}

export default ProductList;
