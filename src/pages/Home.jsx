import React, { useEffect, useState } from 'react';
import { requestTrendingMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);

        const fetchedTrendingMovies = await requestTrendingMovies();

        setTrendingMovies(fetchedTrendingMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today </h1>

      {isLoading && <Loader />}
      {error !== null && <p>Oops, some error occured... {error}</p>}

      <MoviesList movies={trendingMovies} />
    </div>
  );
}

export default Home;
