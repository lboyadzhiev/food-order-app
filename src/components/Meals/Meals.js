import React, { Fragment } from 'react';

// components
import AvailableMeals from './components/AvailableMeals';
import MealsSummary from './components/MealsSummary';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
