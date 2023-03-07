import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// store
import CartProvider from './store/cart-store/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
