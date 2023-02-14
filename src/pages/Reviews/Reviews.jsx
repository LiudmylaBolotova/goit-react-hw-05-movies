import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  BASE_URL,
  KEY,
  MOVIE,
  PARAMS_REVIEWS,
  PARAMS_LANGUAGE,
} from 'pages/Services';

import { Section, SecondaryTitle, Text } from './Reviews.styled';

const Reviews = () => {
  const [reviewsText, setReviewsText] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const res = await axios.get(
          `${BASE_URL}${MOVIE}${movieId}${PARAMS_REVIEWS}${KEY}${PARAMS_LANGUAGE}&page=1`
        );
        setReviewsText(res.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId, reviewsText]);

  return (
    <div>
      {/* {!reviewsText && <p>We don't have any reviews for this movie.</p>} */}
      {reviewsText &&
        reviewsText.map(item => (
          <Section key={item.author}>
            <SecondaryTitle>{item.author}</SecondaryTitle>
            <Text>{item.content}</Text>
          </Section>
        ))}
    </div>
  );
};

export default Reviews;
