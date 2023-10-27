import React from 'react';
const movieImageUrl = 'https://image.tmdb.org/t/p/w300';
const MovieDetailsItem = ({ poster_path, title, overview, genres }) => {
  return (
    <div>
      <div>
        <img
          src={`${movieImageUrl}${poster_path}`}
          alt={`Poster for ${title}`}
        />
      </div>
      <div>
        <h2>{title}</h2>
        <h3>Overview</h3>
        <p>{overview}</p>
        {genres && genres.length > 0 && (
          <div>
            <h4>Genres</h4>
            <ul>
              {genres.map(genre => (
                <li key={genre.name}>{genre.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailsItem;
