import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieByName } from 'api/servises';

import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import Movie from 'components/Movie/Movie';

const MoviePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieList, setMovieList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchList = async () => {
      try {
        setLoading(true);
        const fetch = await getMovieByName(query);
        setMovieList(fetch.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchList();
    }
  }, [query]);

  const onHandleSubmit = searchField => {
    setSearchParams({ query: searchField });
    setMovieList([]);
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && <Movie movieList={movieList} onSubmit={onHandleSubmit} />}
    </>
  );
};

export default MoviePage;
