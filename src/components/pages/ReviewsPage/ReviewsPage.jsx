import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getMovieReviews } from 'shared/services/Api';

const ReviewsPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);

        const { results } = await getMovieReviews(movieId);
        setItems([...results]);
      } catch ({ response }) {
        setError(response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  const elements = items.map(({ author, id, content }) => {
    return (
      <li key={id}>
        <h4>Author: {author}</h4>
        <p>{content}</p>
      </li>
    );
  });
  return (
    <div>
      {loading && <p>Loading reviews</p>}
      {error && <p>{error}</p>}
      {items.length > 0 ? (
        <ul>{elements}</ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </div>
  );
};

export default ReviewsPage;

ReviewsPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
