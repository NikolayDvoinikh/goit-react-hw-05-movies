import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieActorsInfo } from 'shared/services/Api';
import ActorCard from 'shared/ActorCard/ActorCard';

const CastPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchActors = async () => {
      try {
        setLoading(true);

        const { cast } = await getMovieActorsInfo(movieId);
        setItems([...cast]);
        console.log(items);
      } catch ({ response }) {
        setError(response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchActors();
  }, [movieId]);

  const elements = items.map(
    ({ original_name, character, id, profile_path }) => {
      return (
        <li key={id}>
          <ActorCard img={profile_path} role={character} name={original_name} />
        </li>
      );
    }
  );
  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading Info</p>}
      {items.length > 0 && <ul>{elements}</ul>}
    </>
  );
};

export default CastPage;
