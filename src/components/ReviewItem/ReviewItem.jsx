import React from 'react';

const ReviewItem = ({author, content}) => {
  return (
    <li>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  );
}

export default ReviewItem;