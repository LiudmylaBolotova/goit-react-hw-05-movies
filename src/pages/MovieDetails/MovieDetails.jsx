import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, KEY, IMG_URL } from 'pages/Services';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import {
  Container,
  PrimaryTitle,
  SecondaryTitle,
  Img,
  Text,
  Section,
  LinkCast,
  LinkReviews,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [backBtn, setBackBtn] = useState('');
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!backBtn) {
      return;
    }
    setBackBtn(backLinkHref);
  }, [backBtn, backLinkHref]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `${BASE_URL}/movie/${movieId}?${KEY}&language=en-US`
        );
        setSearchMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <Container>
      <Link to={backLinkHref}>
        <BsFillArrowLeftSquareFill />
      </Link>

      {searchMovie && (
        <>
          <Section>
            <Img
              src={`${IMG_URL}${searchMovie.poster_path}`}
              alt={searchMovie.title}
            />
            <div>
              <PrimaryTitle>{searchMovie.title}</PrimaryTitle>
              <Text>User Score: {searchMovie.vote_average}</Text>
              <SecondaryTitle>Overview</SecondaryTitle>
              <Text>{searchMovie.overview}</Text>
              <SecondaryTitle>Genres</SecondaryTitle>
              <Text>
                {searchMovie.genres &&
                  searchMovie.genres.map(genre => genre.name).join(', ')}
              </Text>
            </div>
          </Section>

          <div>
            <ul>
              <li>
                <LinkCast />
              </li>
              <li>
                <LinkReviews />
              </li>
            </ul>
          </div>
        </>
      )}
    </Container>
  );
};

export default MovieDetails;
