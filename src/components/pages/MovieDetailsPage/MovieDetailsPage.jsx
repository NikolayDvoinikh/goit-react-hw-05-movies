import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFullMovieInfo } from '../../../shared/services/Api';
import styles from './movie-details-page.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState('');
  const [genres, setGenres] = useState([]);
  const [url, setUrl] = useState('');
  const [overview, setOverview] = useState('');

  useEffect(() => {
    const fetchInfoMovie = async () => {
      try {
        const { poster_path, overview, genres, original_title, vote_average } =
          await getFullMovieInfo(movieId);
        const genresValue = genres.map(({ name }) => name).join(', ');
        setUrl(poster_path);
        setOverview(overview);
        setTitle(original_title);
        setRate(vote_average);
        setGenres(genresValue);
      } catch ({ response }) {
        setError(response.data.message);
      }
    };
    fetchInfoMovie();
  }, []);
  return (
    <>
      <h1>MovieDetailsPage</h1>
      <div>
        <div>
          <img src={`https://image.tmdb.org/t/p/w400${url}`} alt="Movie img" />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{`User Score: ${(Number(rate) * 10).toFixed(0)} %`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <p>Additional Information</p>
      <ul>
        <Link to="cast">
          <li>
            <p>Cast</p>
          </li>
        </Link>
        <Link to="reviews">
          <li>
            <p>Reviews</p>
          </li>
        </Link>
      </ul>
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;
