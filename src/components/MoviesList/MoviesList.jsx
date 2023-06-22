import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item, ItemLink, Alert } from './MoviesList.styled';

const MoviesList = ({ value }) => {
  const location = useLocation();

  return (
    <>
      {value ? (
        <ul>
          {value.map(item => (
            <Item key={item.id}>
              <ItemLink to={`/movies/${item.id}`} state={{ from: location }}>
                {item.title}
              </ItemLink>
            </Item>
          ))}
        </ul>
      ) : (
        <Alert>Enter your query in the search bar</Alert>
      )}
    </>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  value: PropTypes.array.isRequired,
};
