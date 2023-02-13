import { NavLink } from 'react-router-dom';

import { menuItems } from './menuItems';

import styles from './Navbar.module.css';

const fullNameClass = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
};

const Navbar = () => {
  const elements = menuItems.map(({ id, title, link }) => (
    <NavLink key={id} className={fullNameClass} to={link}>
      <li>{title}</li>
    </NavLink>
  ));
  return <ul className={styles.menu}>{elements}</ul>;
};

export default Navbar;
