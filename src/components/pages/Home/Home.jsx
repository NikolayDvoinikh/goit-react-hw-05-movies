import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendMovies } from 'shared/services/Api';

const Home = () => {
  const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        // setLoading(true);
        const { results } = await getTrendMovies();
        setItems([...results]);
        console.log(results);
      } catch ({ response }) {
        setError(response.data.message);
      }
      // finally {
      // setLoading(false)
      // }
    };
    fetchTrendMovies();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {items.map(({ id, title }) => (
          <Link key={id} to={id}>
            <li>
              <h2>{title}</h2>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
export default Home;
