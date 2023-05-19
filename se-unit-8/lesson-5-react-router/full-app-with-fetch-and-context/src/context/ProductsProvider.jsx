import { useState, useEffect } from "react";
import ProductsContext from "./ProductsContext";

const handleFetch = async (url, options) => {
  try {
    const res = await fetch(url, options)
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
}

const ProductsProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function doFetch() {
      const data = await handleFetch('https://dummyjson.com/products')
      setProducts(data.products);
    }
    doFetch();
  }, []);

  const contextValues = {
    products
  }

  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  )

}

export default ProductsProvider;