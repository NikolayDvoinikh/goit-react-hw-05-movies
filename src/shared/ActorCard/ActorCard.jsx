import styles from './actor-card.module.css';
import PropTypes from 'prop-types';

const ActorCard = ({ img, name, role }) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={`https://image.tmdb.org/t/p/w400${img}`}
        className={styles.actor_img}
        alt="actor foto"
      ></img>
      <ul className={styles.actor_info}>
        <li className={styles.actor_item}>
          <span>{name}</span>
        </li>
        <li>
          <span>{role}</span>
        </li>
      </ul>
    </div>
  );
};
export default ActorCard;

ActorCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
};
