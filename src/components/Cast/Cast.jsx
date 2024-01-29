import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoImage from 'images/no_image.png';

import { getCastById } from 'api/servises';

import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

import css from './cast.module.css';

const Cast = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [castList, setCastList] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchCast = async () => {
      try {
        setLoading(true);
        const { cast } = await getCastById(movieId);
        setCastList(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  const elements = castList.map(
    ({ cast_id, original_name, character, profile_path }) => {
      const url = profile_path
        ? `https://image.tmdb.org/t/p/w500${profile_path}`
        : NoImage;
      return (
        <li key={cast_id} className={css.item}>
          <img src={url} alt={original_name} className={css.poster} />
          <h3 className={css.title}>Name: {original_name}</h3>
          <p className={css.text}>Character: {character}</p>
        </li>
      );
    }
  );

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {castList.length ? (
        <ul className={css.container}>{elements}</ul>
      ) : (
        <div className={css.note}>
          We don't have any additional information for this movie
        </div>
      )}
    </>
  );
};

export default Cast;
