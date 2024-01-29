import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';

import { getMovieById } from 'api/servises';

import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import MovieCart from 'components/MovieCart/MovieCart';
import Button from 'components/Button/Button';
import MoreInfo from 'components/MoreInfo/MoreInfo';

import css from './movie-details.module.css';

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieDetail, setMovieDetail] = useState([]);

  const { movieId } = useParams();

  const location = useLocation();
  const from = location.state?.from || '/';

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const data = await getMovieById(movieId);
        setMovieDetail(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  const goBack = () => navigate(from);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && (
        <>
          <div className={css.container}>
            <Button onClick={goBack} title="Go Back" />
            <MovieCart movieDetail={movieDetail} />
          </div>
          <div className={css.container}>
            <MoreInfo from={from} />
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
