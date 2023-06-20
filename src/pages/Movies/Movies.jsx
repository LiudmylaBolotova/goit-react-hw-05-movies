import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

import { ImSearch } from 'react-icons/im';
import { BASE_URL, KEY, PARAM_SEARCH_MOVIE } from 'pages/Services';
import {
  Item,
  ItemLink,
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  Alert,
} from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [ListItems, setListItems] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    if (!query) {
      return;
    }

    axios
      .get(
        `${BASE_URL}${PARAM_SEARCH_MOVIE}${KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
        { signal: controller.signal }
      )
      .then(res => {
        setListItems(res.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });

    return () => {
      controller.abort();
    };
  }, [query]);

  const onSubmitForm = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.elements.query.value;
    if (query.trim() === '') {
      return alert('Enter your request!');
    }
    setQuery(query);
    form.reset();
  };

  return (
    <>
      <SearchBar>
        <SearchForm onSubmit={onSubmitForm}>
          <SearchFormButton type="submit">
            <ImSearch />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput type="text" name="query" placeholder="Search film" />
        </SearchForm>
      </SearchBar>
      {ListItems.length > 0 ? (
        <ul>
          {ListItems.map(item => (
            <Item key={item.id}>
              <ItemLink to={`/movies/${item.id}`}>{item.title}</ItemLink>
            </Item>
          ))}
        </ul>
      ) : (
        <Alert>Enter your query in the search bar</Alert>
      )}
      <Outlet />
    </>
  );
};

export default Movies;
