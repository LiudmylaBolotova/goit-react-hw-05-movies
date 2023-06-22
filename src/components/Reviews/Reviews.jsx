import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'Services/services';

import { Section, SecondaryTitle, Text, Alert } from './Reviews.styled';

const Reviews = () => {
  const [reviewsText, setReviewsText] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    (async function () {
      try {
        const finedReviews = await fetchReviews(movieId);
        setReviewsText(finedReviews);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      {reviewsText.length > 0 ? (
        reviewsText.map(item => (
          <Section key={item.author}>
            <SecondaryTitle>{item.author}</SecondaryTitle>
            <Text>{item.content}</Text>
          </Section>
        ))
      ) : (
        <Alert>We don't have any reviews for this movie.</Alert>
      )}
    </>
  );
};

export default Reviews;
