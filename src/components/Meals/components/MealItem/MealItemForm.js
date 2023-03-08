import React, { useRef, useState } from 'react';

// styles
import classes from './MealItemForm.module.css';

// components
import Input from '../../../UI/Input';

const MealItemForm = ({ id, onAddToCart }) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const convertedAmount = Number(enteredAmount);

    if (
      enteredAmount.trim().length === 0 ||
      convertedAmount < 1 ||
      convertedAmount > 5
    ) {
      setIsAmountValid(false);
      return;
    }

    onAddToCart(convertedAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>Please entered a valid amount (1-5)!</p>}
    </form>
  );
};

export default MealItemForm;
