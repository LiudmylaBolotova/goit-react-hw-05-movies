import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../pages/SharedLayout/SharedLayout';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails';
import NotFound from 'pages/NotFound';
// import { Cast } from 'pages/Cast';
// import { Reviews } from 'pages/Reviews';

// import { Container, Header, Logo, Link } from './App.styled';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}/>
            <Route path="movies/:movieId" element={<MovieDetails />} >
            {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
