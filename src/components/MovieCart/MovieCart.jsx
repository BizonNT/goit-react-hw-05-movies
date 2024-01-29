import NoImage from 'images/no_image.png';

import css from './movie-cart.module.css';

const MovieCart = ({
  movieDetail: {
    title,
    poster_path,
    overview,
    release_date,
    vote_average,
    genres = [],
  },
}) => {
  const dateYear = new Date(release_date);
  const year = dateYear.getFullYear();
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : NoImage;
  const genre = genres.map(({ name }) => name).join(' - ');

  return (
    <div className={css.container}>
      <img className={css.poster} src={`${posterUrl}`} alt={title} />
      <div className={css.list}>
        <h1 className={css.title}>
          {title} ({year})
        </h1>
        <p className={css.text}>
          User score: {Math.trunc(vote_average * 10)} %
        </p>
        <h2 className={css.item}>Overview:</h2>
        <p className={css.text}>{overview}</p>
        <h3 className={css.item}>Genres:</h3>
        <p className={css.text}>{genre}</p>
      </div>
    </div>
  );
};
export default MovieCart;
