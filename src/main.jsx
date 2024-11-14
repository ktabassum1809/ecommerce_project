import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import ProductContextProvider from './context/ProductContext';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </HashRouter>
);
