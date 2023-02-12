import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieActorsInfo } from 'shared/services/Api';
import styles from './cast-page.module.css';

const CastPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchActors = async () => {
      try {
        setLoading(true);

        const { cast } = await getMovieActorsInfo(movieId);
        console.log(cast);
      } catch (error) {}
    };
    fetchActors();
  }, []);

  return <h1>CastPage</h1>;
};

export default CastPage;
