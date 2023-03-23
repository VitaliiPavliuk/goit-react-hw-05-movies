import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState, useRef } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { requestMovies } from 'services/api';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const searchInputRef = useRef();
  const queryValue = searchParams.get('query');

  useEffect(() => {
    if (!queryValue) return;

    const fetchMovies = async queryValue => {
      try {
        setIsLoading(true);

        const fetchedMovies = await requestMovies(queryValue);

        setMovies(fetchedMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies(queryValue);
  }, [queryValue]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchInputRef.current.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={searchInputRef} type="text" placeholder="Search movies" />
        <button type="submit">Search</button>
      </form>

      {isLoading && <Loader />}
      {error !== null && <p>Oops, some error occured... {error}</p>}

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

        {queryValue && movies.length === 0 && (
          <p>
            There is no matching with such movie. Please enter another movie!
          </p>
        )}
      </ul>
    </div>
  );
}

export default Movies;
