import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import SearchMovieDetails from '../../components/SearchMovieDetails/SearchMovieDetails';
import { fetchMovieDetails } from 'Services/services';

import { Container, StyledArrowLeftSquareFill } from './MovieDetails.styled';

const MovieDetails = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [backBtn, setBackBtn] = useState('');
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    if (!backBtn) {
      return;
    }
    setBackBtn(backLinkHref);
  }, [backBtn, backLinkHref]);

  useEffect(() => {
    (async function () {
      try {
        const finedMovieDetails = await fetchMovieDetails(movieId);
        setSearchMovie(finedMovieDetails);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  return (
    <Container>
      <Link to={backLinkHref}>
        <StyledArrowLeftSquareFill size="50" />
      </Link>
      <SearchMovieDetails value={searchMovie} movieId={movieId} />
    </Container>
  );
};

export default MovieDetails;
