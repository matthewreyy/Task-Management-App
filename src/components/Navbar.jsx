import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Task Management App</span>
    </nav>
  );
}
