import React, { useContext } from 'react';

// store
import CartContext from '../../../../store/cart-store/cart-context';

// styles
import classes from './MealItem.module.css';

// components
import MealItemForm from './MealItemForm';

const MealItem = ({ id, name, description, price }) => {
  const priceToShow = `$ ${price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceToShow}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
