import React from 'react';

const CartContext = React.createContext({
  isCartShown: false,
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  onShowCart: () => {},
  onHideCart: () => {},
});

export default CartContext;
