import { useState, useEffect } from "react";
import ProductsContext from "./ProductsContext";
import { handleFetch } from '../utils.jsx';

const ProductsProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function doFetch() {
      const data = await handleFetch('https://dummyjson.com/products')
      setProducts(data.products);
    }
    doFetch();
  }, []);

  const contextValues = { products } // this object is returned by useContext(ProductsContext)

  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider;