import React, { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import { requestMovieById } from 'services/api';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieById = async movieId => {
      try {
        const fetchedMovieById = await requestMovieById(movieId);
        console.log(fetchedMovieById);
        setMovie(fetchedMovieById);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieById(movieId);
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
        <h5>Additional Information</h5>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>

        <Routes>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Routes>
      </div>
    </div>
  );
};
