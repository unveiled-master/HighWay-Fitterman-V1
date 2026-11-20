import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <strong>HIGHWAY FITTERMAN</strong>
      <span>Roadside help when you need it most.</span>
      <div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/mechanics">Mechanics</Link>
      </div>
      <small>© {new Date().getFullYear()} Highway Fitterman</small>
    </footer>
  );
}
