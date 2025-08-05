import Product from './Product.jsx'

function ProductList({ products }) {
  return (
    <>
      {products.map((item, index) => (
        <Product
          key={index}
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