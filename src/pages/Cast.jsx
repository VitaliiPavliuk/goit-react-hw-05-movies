import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestCastById } from 'services/api';
import avatar from '../img/avatar.webp';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchCastById = async movieId => {
      try {
        const fetchedCastById = await requestCastById(movieId);
        console.log(fetchedCastById);
        setCast(fetchedCastById);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCastById(movieId);
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
  );
};
