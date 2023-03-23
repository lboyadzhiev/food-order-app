import React, { useContext, useState } from 'react';

// store
import CartContext from '../../store/cart-store/cart-context';

// styles
import classes from './Cart.module.css';

// components
import Modal from '../UI/Modal';
import CartItem from './components/CartItem';
import Checkout from './components/Checkout';

const Cart = () => {
  const [isCheckedOut, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount?.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const cancelHandler = () => {
    setIsCheckout(false);
  };

  const cartItemAdd = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAdd.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={cartCtx.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={cartCtx.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckedOut && <Checkout />}
      {!isCheckedOut && modalActions}
    </Modal>
  );
};

export default Cart;
