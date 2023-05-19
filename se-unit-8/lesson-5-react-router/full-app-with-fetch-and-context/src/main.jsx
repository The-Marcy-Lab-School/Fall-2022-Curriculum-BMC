import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'; 
import ProductsProvider from './context/ProductsProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>
)
