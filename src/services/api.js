import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '442842e0e9a8a18a8e446b3595831199';

export const requestTrendingMovies = async () => {
  const searchParams = {
    params: {
      api_key: API_KEY,
    },
  };

  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day`,
    searchParams
  );

  return data.results;
};

export const requestMovies = async query => {
  const searchParams = {
    params: {
      api_key: API_KEY,
      query: query,
    },
  };

  const { data } = await axios.get(`${BASE_URL}/search/movie`, searchParams);

  return data.results;
};

export const requestMovieById = async movieId => {
  const searchParams = {
    params: {
      api_key: API_KEY,
    },
  };

  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}`,
    searchParams
  );

  return data;
};

export const requestCastById = async movieId => {
  const searchParams = {
    params: {
      api_key: API_KEY,
    },
  };

  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits`,
    searchParams
  );

  return data.cast;
};

export const requestReviewsById = async movieId => {
  const searchParams = {
    params: {
      api_key: API_KEY,
    },
  };

  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews`,
    searchParams
  );

  return data.results;
};
