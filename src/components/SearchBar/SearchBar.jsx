import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import {
  Search,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';

const SearchBar = ({ value, onChangeForm }) => {
  const onSubmitForm = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (value.trim() === '') {
      return alert('Enter your request!');
    }

    form.reset();
  };

  return (
    <Search>
      <SearchForm onSubmit={onSubmitForm}>
        <SearchFormButton type="submit">
          <ImSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          type="text"
          placeholder="Search films"
          value={value}
          onChange={e => onChangeForm(e.target.value)}
        />
      </SearchForm>
    </Search>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeForm: PropTypes.func.isRequired,
};
