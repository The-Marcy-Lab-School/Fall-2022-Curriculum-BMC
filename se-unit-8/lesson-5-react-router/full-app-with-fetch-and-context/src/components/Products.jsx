import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../context/ProductsContext";

const Products = () => {

  const { products } = useContext(ProductsContext);

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {
          products.map(product => {
            return (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
              </li>
            )
          })
        }

        {/* */}

      </ul>
    </div>
  )
};

export default Products;