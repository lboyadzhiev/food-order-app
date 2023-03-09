import React, { useContext, useEffect, useState } from 'react';

// icon
import CartIcon from '../../../Cart/components/CartIcon';

// store
import CartContext from '../../../../store/cart-store/cart-context';

// styles
import classes from './HeaderCardButton.module.css';

const HeaderCardButton = () => {
  const cartCtx = useContext(CartContext);
  const [bumpButton, setBumpButton] = useState(false);

  const btnClasses = `${classes.button} ${bumpButton ? classes.bump : ''} `;

  const { items } = cartCtx;

  const cartItems = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBumpButton(true);

    const timer = setTimeout(() => {
      setBumpButton(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={cartCtx.onShowCart} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={classes.badge}>{cartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
