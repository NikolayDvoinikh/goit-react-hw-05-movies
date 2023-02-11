import { Link } from 'react-router-dom';
import { getSearchFilms } from 'shared/services/Api';
import styles from './movies.css';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const handleSearchMovie = ({ currentTarget }) => {
    setSearchMovie(currentTarget.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    setQuery(searchMovie);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchSearch = async () => {
      try {
        // setLoading(true);
        const { results } = await getSearchFilms(query);
        setItems([...results]);
      } catch ({ response }) {
        setError(response.data.message);
      }
      // finally {
      // setLoading(false)
      // }
    };
    fetchSearch();
  }, [query]);

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="search"
          onChange={handleSearchMovie}
          type="text"
          value={searchMovie}
          name="searchMovie"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {items.map(({ id, title }) => (
          <Link key={id} to={`/movies/${id}`}>
            <li>
              <p>{title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
export default Movies;
