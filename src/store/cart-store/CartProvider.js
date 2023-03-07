import React, { useState } from 'react';

import CartContext from './cart-context';

const CartProvider = (props) => {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  const addItem = () => {};
  const removeItem = () => {};

  const cartContext = {
    isCartShown: isCartShown,
    items: [],
    totalAmount: 0,
    addItem: addItem,
    removeItem: removeItem,
    onShowCart: showCartHandler,
    onHideCart: hideCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
