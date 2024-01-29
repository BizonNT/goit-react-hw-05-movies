import { NavLink } from 'react-router-dom';

import css from './menu.module.css';

const Menu = () => {
  return (
    <div className={css.container}>
      <ul className={css.menu}>
        <li>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
