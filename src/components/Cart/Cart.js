import React, { useContext } from 'react';

// store
import CartContext from '../../store/cart-store/cart-context';

// styles
import classes from './Cart.module.css';

// components
import Modal from '../UI/Modal';

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount?.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={cartCtx.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={cartCtx.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
