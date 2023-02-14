import { useState, useEffect } from 'react';
import { Link, useLocation, useParams, Outlet } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, KEY, IMG_URL, MOVIE, PARAMS_LANGUAGE } from 'pages/Services';


import {
  Container,
  PrimaryTitle,
  SecondaryTitle,
  Img,
  Text,
  Section,
  SectionLinks,
  LinksDetails,
  StyledArrowLeftSquareFill,
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
          `${BASE_URL}${MOVIE}${movieId}?${KEY}${PARAMS_LANGUAGE}`
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
        <StyledArrowLeftSquareFill size='50'/>
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

          <SectionLinks>
            <SecondaryTitle>Additional information</SecondaryTitle>

            <ul>
              <li>
                <LinksDetails to={`/movies/${movieId}/cast`}>Cast</LinksDetails>
              </li>
              <li>
                <LinksDetails to={`/movies/${movieId} /reviews`}>
                  Reviews
                </LinksDetails>
              </li>
            </ul>
            <Outlet />
          </SectionLinks>
        </>
      )}
    </Container>
  );
};

export default MovieDetails;
