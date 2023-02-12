import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchFilms } from 'shared/services/Api';
import styles from './movies.module.css';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const onSubmitHandler = e => {
    e.preventDefault();
    const { searchMovie } = e.currentTarget.elements;
    setSearchParams({ search: searchMovie.value });
  };

  useEffect(() => {
    const query = searchParams.get('search');
    if (!query) {
      return;
    }
    const fetchSearch = async () => {
      try {
        setLoading(true);
        const { results } = await getSearchFilms(query);
        setItems([...results]);
      } catch ({ response }) {
        setError(response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSearch();
  }, [searchParams]);

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input placeholder="search" type="text" name="searchMovie" />
        <button type="submit">Search</button>
      </form>
      {loading && <p>...Load Movies</p>}
      {error && <p>{error}</p>}
      {items && (
        <ul className={styles.list}>
          {items.map(({ id, title }) => (
            <Link
              className={styles.link}
              key={id}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              <li>
                <span>{title}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};
export default Movies;
