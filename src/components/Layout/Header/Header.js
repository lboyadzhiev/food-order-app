import React, { Fragment } from 'react';

// styles
import classes from './Header.module.css';
// image
import mealsImage from '../../../assets/meals.jpg';

// components
import HeaderCardButton from './components/HeaderCardButton';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='table fool of meals' />
      </div>
    </Fragment>
  );
};

export default Header;
