import React, { useEffect, useState } from 'react';
import { requestTrendingMovies } from 'services/api';
import { Link } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

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
}

export default Home;
