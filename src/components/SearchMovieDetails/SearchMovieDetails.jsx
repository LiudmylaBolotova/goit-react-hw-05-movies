import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { IMG_URL } from '../../Services/services';
import PropTypes from 'prop-types';
import {
  PrimaryTitle,
  SecondaryTitle,
  Img,
  Text,
  Section,
  SectionLinks,
  LinksDetails,
} from './SearchMovieDetails.styled';

const SearchMovieDetails = ({ value, movieId }) => {
  return (
    <>
      {value && (
        <>
          <Section>
            <Img src={`${IMG_URL}${value.poster_path}`} alt={value.title} />
            <div>
              <PrimaryTitle>{value.title}</PrimaryTitle>
              <Text>User Score: {value.vote_average}</Text>
              <SecondaryTitle>Overview</SecondaryTitle>
              <Text>{value.overview}</Text>
              <SecondaryTitle>Genres</SecondaryTitle>
              <Text>
                {value.genres &&
                  value.genres.map(genre => genre.name).join(', ')}
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
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </SectionLinks>
        </>
      )}
    </>
  );
};

export default SearchMovieDetails;

SearchMovieDetails.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  movieId: PropTypes.string.isRequired,
};
