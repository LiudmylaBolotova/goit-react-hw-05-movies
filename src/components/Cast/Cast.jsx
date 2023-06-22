import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast, IMG_URL } from 'Services/services';
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
    (async function () {
      try {
        const finedCast = await fetchCast(movieId);
        setCastActors(finedCast);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

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
                  />
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
