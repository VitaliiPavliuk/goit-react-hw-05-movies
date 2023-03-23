import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams, Link, Routes, Route, useLocation } from 'react-router-dom';

import { requestMovieById } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { MovieWrapper } from './MovieDetails.styled';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieById = async movieId => {
      try {
        setIsLoading(true);

        const fetchedMovieById = await requestMovieById(movieId);

        setMovie(fetchedMovieById);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieById(movieId);
  }, [movieId]);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      {isLoading && <Loader />}
      {error !== null && <p>Oops, some error occured... {error}</p>}

      <Link to={backLinkHref}>Go back</Link>
      <MovieWrapper>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt=""
          />
        )}
        <div>
          {movie.release_date && (
            <h3>
              {movie.title} ({movie.release_date.split('-')[0]})
            </h3>
          )}
          {movie.vote_average && (
            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          )}

          <h4>Overview</h4>
          <p>{movie.overview}</p>

          <h4>Genres</h4>
          {movie.genres && <p>{movie.genres.map(genre => `${genre.name} `)}</p>}
        </div>
      </MovieWrapper>

      <h5>Additional Information</h5>
      <ul>
        <li>
          <Link state={{ from: location.state?.from }} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link state={{ from: location.state?.from }} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MovieDetails;
