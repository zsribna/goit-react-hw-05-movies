import React from 'react';

const baseImageUrl = 'https://image.tmdb.org/t/p/w200';

const CastItem = ({ character, name, profile_path }) => {
  const imageUrl = profile_path ? `${baseImageUrl}${profile_path}` : '';

  return (
    <li>
      <img src={imageUrl} alt="" />
      <p>Actor's name: {name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastItem;
