import { useParams } from "react-router-dom"
import Fallback from "./Fallback"
import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";

const Product = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find(product => product.id === Number(id));

  if (!product) return <Fallback />
  
  return (
    <div className='product'>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <div>
        {
          product.images.map((image, i) => {
            return <img key={i} src={image} />
          })
        }
      </div>
    </div>
  )
}

export default Product;