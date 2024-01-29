import SearcForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';

import css from './movie.module.css';

const Movie = ({ onSubmit, ...movieList }) => {
  return (
    <div className={css.container}>
      <SearcForm onSubmit={onSubmit} />
      <MovieList {...movieList} />
    </div>
  );
};

export default Movie;
