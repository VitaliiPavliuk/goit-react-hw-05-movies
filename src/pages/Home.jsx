import React, { useEffect, useState } from 'react';
import { requestTrendingMovies } from 'services/api';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const fetchedTrendingMovies = await requestTrendingMovies();
        setTrendingMovies(fetchedTrendingMovies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
  }, []);

  console.log(trendingMovies);

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
      <h1>Trending today </h1>
      <ul>
        {trendingMovies.length !== 0 &&
          trendingMovies.map(movie => {
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
