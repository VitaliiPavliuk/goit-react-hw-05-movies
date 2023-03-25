import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList';
import { SearchMoviesForm } from 'components/SearchMoviesForm/SearchMoviesForm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { requestMovies } from 'services/api';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

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
    setSearchParams({ query: event.currentTarget.elements.query.value });
  };

  return (
    <div>
      <SearchMoviesForm handleSubmit={handleSubmit} />

      {isLoading && <Loader />}
      {error !== null && <p>Oops, some error occured... {error}</p>}

      <MoviesList movies={movies} />

      {queryValue && movies.length === 0 && (
        <p>There is no matching with such movie. Please enter another movie!</p>
      )}
    </div>
  );
}

export default Movies;
