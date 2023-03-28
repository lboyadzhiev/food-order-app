import React, { useContext, useState } from 'react';

// store
import CartContext from '../../store/cart-store/cart-context';

// service
import { createOrder } from '../../services/api';
// styles
import classes from './Cart.module.css';

// components
import Modal from '../UI/Modal';
import CartItem from './components/CartItem';
import Checkout from './components/Checkout';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const [isCheckedOut, setIsCheckout] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `${cartCtx.totalAmount?.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const onConfirmHandler = async (data) => {
    setIsSubmiting(true);

    await createOrder('https://test-66f91.firebaseio.com/orders.json', {
      user: data,
      orderedItems: cartCtx.items,
    });

    setIsSubmiting(false);
    setDidSubmit(true);
  };

  const cartItemAdd = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  // content
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

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckedOut && <Checkout onConfirm={onConfirmHandler} />}
      {!isCheckedOut && modalActions}
    </React.Fragment>
  );
  const isSubmitingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = <p>Successfully send the order!</p>;

  return (
    <Modal onClose={cartCtx.onHideCart}>
      {!isSubmiting && !didSubmit && cartModalContent}
      {isSubmiting && isSubmitingModalContent}
      {!isSubmiting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
