import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import InstagramContextProvider from './context/InstagramContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <InstagramContextProvider>
        <App />
    </InstagramContextProvider>
)
