import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendMovies } from 'shared/services/Api';
import styles from './home.module.css';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        setLoading(true);
        const { results } = await getTrendMovies();
        setItems([...results]);
      } catch ({ response }) {
        setError(response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendMovies();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      {loading && <p>...Load Movies</p>}
      {error && <p>{error}</p>}
      <ul>
        {items.map(({ id, title }) => (
          <Link className={styles.link} key={id} to={`/movies/${id}`}>
            <li>
              <span className={styles.title}>{title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
export default Home;
