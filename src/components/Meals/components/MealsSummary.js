import React from 'react';

// styles
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicous lunch of dinner at home
      </p>
      <p>
        All our meals are cooked wiht high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
