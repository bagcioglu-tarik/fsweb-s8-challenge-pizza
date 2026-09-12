import styles from "./Categories.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Categories({ name, icon }) {
  return (
      <li className={styles.categoryItem}>
        <Link id='a' to="/order">
          <img src={icon} alt={name} />
          <p>{name}</p>
        </Link>
      </li>
  );
}
