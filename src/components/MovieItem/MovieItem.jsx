import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ id, title, location }) => {
  return (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  );
};

export default MovieItem;
