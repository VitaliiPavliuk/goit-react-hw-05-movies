import React, { useEffect, useState } from 'react';
import { requestTrendingMovies } from 'services/api';

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
    <ul>
      {trendingMovies.length !== 0 &&
        trendingMovies.map(movie => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
    </ul>
  );
};
