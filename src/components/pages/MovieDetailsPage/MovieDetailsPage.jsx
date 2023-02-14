import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getFullMovieInfo } from '../../../shared/services/Api';
import PropTypes from 'prop-types';

import MovieCard from 'shared/MovieCard/MovieCard';

import styles from './movie-details-page.module.css';

const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState(0);
  const [genres, setGenres] = useState('');
  const [url, setUrl] = useState('');
  const [overview, setOverview] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const { movieId } = useParams();
  const { state } = useLocation();
  const goBack = state?.from ?? '/';

  useEffect(() => {
    const fetchInfoMovie = async () => {
      try {
        setLoading(true);

        const resp = await getFullMovieInfo(movieId);
        const {
          poster_path,
          overview,
          genres,
          original_title,
          vote_average,
          release_date,
        } = resp;

        const genresValue = genres?.map(({ name }) => name).join(', ');

        setUrl(poster_path);
        setOverview(overview);
        setTitle(original_title);
        setReleaseDate(release_date);
        setRate(vote_average);
        setGenres(genresValue);
      } catch ({ response }) {
        setError(response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchInfoMovie();
  }, [movieId]);

  return (
    <div className={styles.movie_page}>
      <Link to={goBack} className={styles.go_back}>
        <span>&#8656; Go Back</span>
      </Link>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading Info</p>
      ) : (
        <div>
          <MovieCard
            title={title}
            releaseDate={releaseDate}
            rate={rate}
            genres={genres}
            overview={overview}
            url={url}
          />
          <p className={styles.additional}>Additional Information</p>
          <ul>
            <Link to="cast" state={{ from: goBack }}>
              <li>
                <p>Cast</p>
              </li>
            </Link>
            <Link to="reviews" state={{ from: goBack }}>
              <li>
                <p>Reviews</p>
              </li>
            </Link>
          </ul>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};
export default MovieDetailsPage;

MovieDetailsPage.propTypes = {
  resp: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      overview: PropTypes.string,
      genres: PropTypes.string,
      original_title: PropTypes.string,
      vote_average: PropTypes.number,
      release_date: PropTypes.string,
    })
  ),
};
