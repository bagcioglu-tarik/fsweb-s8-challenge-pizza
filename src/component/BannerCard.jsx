import styles from "./BannerCard.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function BannerCard({ imgUrl, title, subTitle, spanText, id }) {
  return (
    <div
      className={`${styles.bannerCardContainer} ${styles[`card-${id}`]}`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className={styles.bannerCard}>
        <h3>
          {spanText && <span>{spanText} </span>}
          {title}
        </h3>
        {subTitle && <p>{subTitle}</p>}
        <Link to="/order" className={styles.btn}>
          SİPARİŞ VER
        </Link>
      </div>
    </div>
  );
}
