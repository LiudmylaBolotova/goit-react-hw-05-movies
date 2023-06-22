import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Title, Items, ItemsLink } from './Home.styled';
import { fetchDaysFilms } from 'Services/services';

const Home = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    (async function () {
      try {
        const finedDaysFilms = await fetchDaysFilms();
        setItems(finedDaysFilms);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <ul>
        {items.map(item => (
          <Items key={item.id}>
            <ItemsLink to={`/movies/${item.id}`} state={{ from: location }}>
              {item.title}
            </ItemsLink>
          </Items>
        ))}
      </ul>
    </main>
  );
};

export default Home;
