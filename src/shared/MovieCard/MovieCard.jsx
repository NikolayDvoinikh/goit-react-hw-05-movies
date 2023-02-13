import styles from './movie-card.module.css';

const MovieCard = ({ url, rate, overview, genres, title, releaseDate }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w400${url}`}
            alt="Movie poster"
          />
        </div>
        <div className={styles.info}>
          {releaseDate ? (
            <h2>{`${title} (${releaseDate.slice(0, 4)})`}</h2>
          ) : (
            <h2>{title}</h2>
          )}
          {rate && (
            <p>{`User Score: ${Math.round(Number(rate) * 10).toFixed(0)} %`}</p>
          )}
          <h3>Overview</h3>
          {overview ? (
            <p>{overview}</p>
          ) : (
            <p>We don't have any review for this movie</p>
          )}
          <h3>Genres</h3>
          {genres && <p>{genres}</p>}
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
