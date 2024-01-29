import { NavLink } from 'react-router-dom';

import css from './more-info.module.css';

const MoreInfo = ({ from }) => {
  return (
    <>
      <h3 className={css.title}>Additional information</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="cast" state={{ from }} className={css.link}>
            Cast
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="reviews" state={{ from }} className={css.link}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MoreInfo;
