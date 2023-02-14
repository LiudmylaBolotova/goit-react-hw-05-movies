import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  BASE_URL,
  KEY,
  MOVIE,
  PARAMS_CREDITS,
  PARAMS_LANGUAGE,
  IMG_URL,
} from 'pages/Services';

import {
  ListActors,
  ItemActor,
  SecondaryTitle,
  Text,
  Card,
  ImgActor,
} from './Cast.styled';

const Cast = () => {
  const [castActors, setCastActors] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const res = await axios.get(
          `${BASE_URL}${MOVIE}${movieId}${PARAMS_CREDITS}${KEY}${PARAMS_LANGUAGE}`
        );
        setCastActors(res.data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [castActors, movieId]);

  return (
    <>
      {castActors && (
        <ListActors>
          {castActors.map(item => {
            return (
              <ItemActor key={item.cast_id}>
                <Card>
                  <SecondaryTitle>{item.name}</SecondaryTitle>
                  <Text>{item.character}</Text>
                </Card>
                {item.profile_path ? (
                  <ImgActor
                    src={`${IMG_URL}${item.profile_path}`}
                    alt={item.name}
                    width={200}
                  />
                ) : (
                  <img
                    src="https://via.placeholder.com/200x300"
                    alt="Not found"
                  ></img>
                )}
              </ItemActor>
            );
          })}
        </ListActors>
      )}
    </>
  );
};

export default Cast;
