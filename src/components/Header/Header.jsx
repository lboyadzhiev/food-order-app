import logoImg from '../../assets/logo.jpg';

import classes from './Header.module.css';

export default function Header() {
  return (
    <header className={classes['main-header']}>
      <div className={classes.title}>
        <img src={logoImg} alt='A restaurant' />
        <h1>React Food</h1>
      </div>
      <nav>
        <button>Cart(0)</button>
      </nav>
    </header>
  );
}
