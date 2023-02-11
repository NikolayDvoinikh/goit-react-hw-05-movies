import { NavLink } from 'react-router-dom';

import { menuItems } from './menuItems';

import styles from './Navbar.module.css';

const fullNameClass = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
};

const Navbar = () => {
  const elements = menuItems.map(({ id, title, link }) => (
    <li key={id}>
      <NavLink className={fullNameClass} to={link}>
        {title}
      </NavLink>
    </li>
  ));
  return <ul className={styles.menu}>{elements}</ul>;
};

export default Navbar;
