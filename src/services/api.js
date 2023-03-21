import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '442842e0e9a8a18a8e446b3595831199';

export const requestTrendingMovies = async () => {
  const searchParams = {
    params: {
      api_key: API_KEY,

      //   q: query,
      //   image_type: 'photo',
      //   orientation: 'horizontal',
      //   page: page,
      //   per_page: PER_PAGE,
    },
  };

  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day`,
    searchParams
  );

  return data.results;
};

// https://api.themoviedb.org/3/search/movie?api_key=442842e0e9a8a18a8e446b3595831199&language=en-US&query=abc&page=1&include_adult=false

export const requestMovies = async query => {
  const searchParams = {
    params: {
      api_key: API_KEY,
      query: query,

      //   image_type: 'photo',
      //   orientation: 'horizontal',
      //   page: page,
      //   per_page: PER_PAGE,
    },
  };

  const { data } = await axios.get(`${BASE_URL}/search/movie`, searchParams);

  return data.results;
};
