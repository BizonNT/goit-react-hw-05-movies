import { useState, useEffect } from 'react';
import { getTrendingMovie } from 'api/servises';

import Loader from 'components/Loader/Loader';
import Home from 'components/Home/Home';
import Error from 'components/Error/Error';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        setLoading(true);
        const { results } = await getTrendingMovie();
        setMovieList(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchList();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {movieList.length && <Home movieList={movieList} />}
    </>
  );
};

export default HomePage;
