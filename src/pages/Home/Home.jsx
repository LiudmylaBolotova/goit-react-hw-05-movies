import { useState, useEffect } from 'react';
import { Title, Items, ItemsLink } from './Home.styled';
import axios from 'axios';
import { BASE_URL, KEY, PARAM_FILMS_DAY } from 'pages/Services';


const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${PARAM_FILMS_DAY}${KEY}`)
      .then(res => setItems(res.data.results))
      .catch(error => error.message);
  }, []);

  return (
    <main>
      <div>
        <Title>Trending today</Title>
        <ul>
          {items.map(item => (
            <Items key={item.id}>
              <ItemsLink to={`/movies/${item.id}`}>{item.title}</ItemsLink>
            </Items>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
