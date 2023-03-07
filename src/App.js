import React, { Fragment, useContext } from 'react';

// store
import CartContext from './store/cart-store/cart-context';

// components
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      {cartCtx.isCartShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
