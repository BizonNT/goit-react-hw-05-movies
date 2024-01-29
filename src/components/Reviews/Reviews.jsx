import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviewsById } from 'api/servises';

import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

import css from './reviews.module.css';

const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const { results } = await getReviewsById(movieId);
        setReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  const elements = reviews.map(({ author, content, id }) => (
    <li key={id} className={css.item}>
      <h3 className={css.title}>Author : {author}</h3>
      <p className={css.text}>{content}</p>
    </li>
  ));

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {reviews.length ? (
        <ul className={css.container}>{elements}</ul>
      ) : (
        <div className={css.note}>We don't have any review for this movie</div>
      )}
    </>
  );
};

export default Reviews;
