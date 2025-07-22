import { useEffect, useState } from 'react';
import Product from './Product.jsx';
import { getProductList } from './api.js';

function ProductList({ products }) {
  const [prolist,setprolist]=useState([])
  useEffect(function(){
    const response =getProductList();
    response.then(function(response){
      setprolist(response.data.products)
    })
  },[])
  return (
    <>
      {prolist.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          name={item.title}
          category={item.category}
          price={item.price}
          photo={item.thumbnail}
          rating={item.rating}
        />
      ))}
    </>
  );
}

export default ProductList;
