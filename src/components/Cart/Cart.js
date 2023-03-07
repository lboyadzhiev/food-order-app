import React, { useContext } from 'react';

// store
import CartContext from '../../store/cart-store/cart-context';

// styles
import classes from './Cart.module.css';

// components
import Modal from '../UI/Modal';

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={cartCtx.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={cartCtx.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
