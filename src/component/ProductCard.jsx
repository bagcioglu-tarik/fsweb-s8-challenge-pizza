import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ProductCard({
  productImg,
  productName,
  productRate,
  productPrice,
  productStock,
}) {
  return (
    <Link className={styles.productCard} to="/order">
      <img src={productImg} alt={productName} />

      <div className={styles.productInfo}>
        <p className={styles.productTitle}>{productName}</p>

        <div className={styles.productMeta}>
          <p>{productRate}</p>
          <p>({productStock})</p>
          <p className={styles.productPrice}>{productPrice}₺</p>
        </div>
      </div>
    </Link>
  );
}
