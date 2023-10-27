import axios from 'axios';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTNkN2JiMGI5M2ZlMDM3MmQ4YTZkNDJkOGE5NGNhOCIsInN1YiI6IjY1MmFmZjY3ZWE4NGM3MDBhZWYyOGFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JoJ09IKYIcQbLxtX-lIS9ov1ytunDzmtILtaCy1xGqw';

const authAxios = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await authAxios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
  );

  return data;
};

export const getMovie = async movieId => {
  const { data } = await authAxios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`
  );

  return data;
};

export const getCast = async movieId => {
  const { data } = await authAxios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`
  );
  return data.cast;
};

export const getReview = async movieId => {
  const { data } = await authAxios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`
  );

  return data.results;
};

export const getMovieSearch = async movieName => {
  const { data } = await authAxios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}`
  );

  return data.results;
};
