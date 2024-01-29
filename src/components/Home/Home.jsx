import MovieList from 'components/MovieList/MovieList';

import css from './home.module.css';

const Home = ({ ...movieList }) => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending Today</h1>
      <MovieList {...movieList} />
    </div>
  );
};

export default Home;
