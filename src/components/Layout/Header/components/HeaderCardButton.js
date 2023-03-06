import React from 'react';

// icon
import CartIcon from '../../../Card/CartIcon';

// styles
import classes from './HeaderCardButton.module.css';

const HeaderCardButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCardButton;
