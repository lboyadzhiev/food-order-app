import React, { useContext } from 'react';

// icon
import CartIcon from '../../../Cart/CartIcon';

// store
import CartContext from '../../../../store/cart-store/cart-context';

// styles
import classes from './HeaderCardButton.module.css';

const HeaderCardButton = () => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  return (
    <button onClick={cartCtx.onShowCart} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
