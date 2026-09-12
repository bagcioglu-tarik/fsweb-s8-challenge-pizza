import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Header.module.css";

export default function Header({ hasBreadcrumbs }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="../images/iteration-1-images/logo.svg" alt="logo" />
        </Link>
      </div>
    </div>
  );
}
