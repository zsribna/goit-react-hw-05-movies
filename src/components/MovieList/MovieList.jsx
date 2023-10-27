import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ trendingMovies }) => {
  return (
    <ul>
      {trendingMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
