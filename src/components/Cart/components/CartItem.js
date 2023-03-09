import React from 'react';

// styles
import classes from './CartItem.module.css';

const CartItem = ({ name, price, amount, onRemove, onAdd }) => {
  const priceToShow = price.toFixed(2);
  console.log(amount);
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceToShow}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
