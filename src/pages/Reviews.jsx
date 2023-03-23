import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestReviewsById } from 'services/api';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchReviewsById = async movieId => {
      try {
        setIsLoading(true);

        const fetchedReviewsById = await requestReviewsById(movieId);

        setReviews(fetchedReviewsById);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviewsById(movieId);
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error !== null && <p>Oops, some error occured... {error}</p>}

      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h5>Author: {review.author}</h5>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
}

export default Reviews;
