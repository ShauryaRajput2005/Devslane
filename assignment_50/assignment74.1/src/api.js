import axios from "axios";

export function getProductList({ search = "", pageNo = 1 }) {
  const url = search 
    ? "https://dummyjson.com/products/search" 
    : "https://dummyjson.com/products";

  return axios.get(url, {
    params: {
      q: search,
      limit: 30,
      skip: (pageNo - 1) * 30
    }
  });
}

export function getProductData(id) {
  return axios.get("https://dummyjson.com/products/" + id);
}
