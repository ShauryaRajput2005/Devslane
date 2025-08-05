import Product from './Product.jsx';

function ProductList({ products }) {
  return (
    <>
      {products.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          name={item.name}
          category={item.category}
          price={item.price}
          photo={item.photo}
        />
      ))}
    </>
  );
}

export default ProductList;
