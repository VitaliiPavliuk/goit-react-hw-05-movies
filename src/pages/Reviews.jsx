import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestReviewsById } from 'services/api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchReviewsById = async movieId => {
      try {
        const fetchedReviewsById = await requestReviewsById(movieId);
        console.log(fetchedReviewsById);
        setReviews(fetchedReviewsById);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviewsById(movieId);
  }, [movieId]);

  //   useEffect(() => {
  //     const fetchCourses = async () => {
  //       try {
  //         setIsLoading(true);
  //         const fetchedCourses = await requestCourses();
  //         setCourses(fetchedCourses);
  //       } catch (error) {
  //         setError(error.message);
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     };

  //     fetchCourses();
  //   }, []);

  return (
    <div>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h5>{review.author}</h5>
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
};
