import { Link } from 'react-router-dom';
import { getSearchFilms } from 'shared/services/Api';
import styles from './movies.css';
import { useState, useEffect } from 'react';

const Movies = ({ onSubmit }) => {
  const [searchMovie, setSearchMovie] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const handleSearchMovie = ({ currentTarget }) => {
    setSearchMovie(currentTarget.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmit(searchMovie);
  };

  //   useEffect(() => {
  //     const fetchSearch = async () => {
  //       try {
  //         // setLoading(true);
  //         const { results } = await getSearchFilms(searchMovie);
  //         setItems([...results]);
  //       } catch ({ response }) {
  //         setError(response.data.message);
  //       }
  //       // finally {
  //       // setLoading(false)
  //       // }
  //     };

  //   }, []);

  return (
    <>
      <form onSubmit={() => getSearchFilms}>
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
          <Link key={id}>
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
