import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestCastById } from 'services/api';
import avatar from '../img/avatar.webp';

function Cast() {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchCastById = async movieId => {
      try {
        setIsLoading(true);

        const fetchedCastById = await requestCastById(movieId);

        setCast(fetchedCastById);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCastById(movieId);
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error !== null && <p>Oops, some error occured... {error}</p>}

      <ul>
        {cast.length !== 0 &&
          cast.map(actor => {
            return (
              <li key={actor.id}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                  />
                ) : (
                  <img src={avatar} alt="" />
                )}

                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Cast;
