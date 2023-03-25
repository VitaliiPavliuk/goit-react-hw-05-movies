import React from 'react';
import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.length !== 0 &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ).isRequired,
};
