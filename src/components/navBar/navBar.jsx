import styles from './navBar.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
