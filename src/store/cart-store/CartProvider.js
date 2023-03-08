import React, { useState, useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = state.items.concat(action.item);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [isCartShown, setIsCartShown] = useState(false);
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  const addItemHandler = (item) => {
    dispatchAction({ type: 'ADD_ITEM', item: item });
  };
  const removeItemHandler = (id) => {
    dispatchAction({ type: 'REMOVE_ITEM', id: id });
  };

  const cartContext = {
    isCartShown: isCartShown,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
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
