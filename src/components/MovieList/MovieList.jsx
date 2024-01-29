import { Link, useLocation } from 'react-router-dom';

import css from './movie-list.module.css';

const MovieList = ({ movieList }) => {
  const location = useLocation();
  const elements = movieList.map(({ id, title }) => (
    <li key={id} className={css.item}>
      <Link
        to={`/movies/${id}`}
        className={css.link}
        state={{ from: location }}
      >
        {title}
      </Link>
    </li>
  ));

  return (
    <>
      <ul className={css.list}>{elements}</ul>
    </>
  );
};

export default MovieList;
