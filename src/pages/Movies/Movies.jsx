import { useState, useEffect, Suspense } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import SearchBar from './../../components/SearchBar/SearchBar';
import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader';
import { fetchMovie } from 'Services/services';

const Movies = () => {
  const [listItems, setListItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('name') ?? '';

  const updateQueryName = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const controller = new AbortController();

    (async function () {
      try {
        const finedMovies = await fetchMovie(queryName, {
          signal: controller.signal,
        });
        setListItems(finedMovies);
      } catch (error) {
        console.log(error.message);
      }
    })();

    if (!queryName) {
      return;
    }

    return () => {
      controller.abort();
    };
  }, [queryName]);

  return (
    <>
      <SearchBar value={queryName} onChangeForm={updateQueryName} />
      <MoviesList value={listItems} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movies;
