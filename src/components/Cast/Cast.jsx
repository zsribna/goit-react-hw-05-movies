import CastItem from '../CastItem/CastItem';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/getTrendingMovies';

const Cast = () => {
  const { id } = useParams();

  const [castData, setCastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Something went wrong! Try again later'
  );

  useEffect(() => {
    if (!id) return;
    async function fetchCastData() {
      try {
        setIsLoading(true);
        const cast = await getCast(id);

        setCastData(cast);
      } catch (error) {
        setHasError(true);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCastData();
  }, [id]);

  return (
    <div>
      {hasError && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {castData === null && (
        <div>
          <p>No cast available</p>
        </div>
      )}
      {castData && castData.length > 0 && (
        <ul>
          {castData.map(actor => {
            return (
              <CastItem
                key={actor.id}
                character={actor.character}
                name={actor.name}
                profile_path={actor.profile_path}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
