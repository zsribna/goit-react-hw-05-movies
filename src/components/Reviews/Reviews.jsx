import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from '../../services/getTrendingMovies';
import ReviewItem from '../ReviewItem/ReviewItem';

const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Something went wrong! Try again later'
  );

  useEffect(() => {
    if (!id) return;
    async function fetchReviews() {
      try {
        setIsLoading(true);
        const reviews = await getReview(id);
        setReviews(reviews);
      } catch (error) {
        setHasError(true);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews();
  }, [id]);

  return (
    <>
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
      {reviews.length === 0 ? (
        <p>No reviews for this movie found</p>
      ) : (
        <ul>
          {reviews.map(author => (
            <ReviewItem
              key={author.id}
              author={author.author}
              content={author.content}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
