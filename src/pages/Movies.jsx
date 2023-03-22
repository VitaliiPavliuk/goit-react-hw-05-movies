import { Searchbar } from 'components/Searchbar/Searchbar';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { requestMovies } from 'services/api';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') return;

    const fetchMovies = async query => {
      try {
        const fetchedMovies = await requestMovies(query);
        setMovies(fetchedMovies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies(query);
  }, [query]);

  const handleSetQuery = searchQuery => {
    setQuery(searchQuery);
  };

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
      <Searchbar onSubmit={handleSetQuery} />

      <ul>
        {movies.length !== 0 &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
