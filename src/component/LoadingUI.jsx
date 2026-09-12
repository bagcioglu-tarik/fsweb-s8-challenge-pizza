import styles from "./LoadingUI.module.css";

export default function LoadingUI() {
  return (
    <section>
      <div className={styles.box}>
        <div className={`${styles["pizza-slice"]} ${styles["slice-1"]}`}>
          <div className={styles.border}>
            <div className={styles.crust}></div>
            <div className={styles.cheese}>
              <div className={`${styles.peperoni} ${styles["p-1"]}`}></div>
              <div className={`${styles.peperoni} ${styles["p-2"]}`}></div>
              <div className={`${styles.peperoni} ${styles["p-3"]}`}></div>
              <div className={`${styles.olive} ${styles["o-1"]}`}></div>
              <div className={`${styles.olive} ${styles["o-3"]}`}></div>
              <div className={`${styles.olive} ${styles["o-4"]}`}></div>
              <div className={`${styles.olive} ${styles["o-6"]}`}></div>
              <div className={`${styles.olive} ${styles["o-7"]}`}></div>
            </div>
          </div>
        </div>
        <div className={`${styles["pizza-slice"]} ${styles["slice-2"]}`}>
          <div className={styles.border}>
            <div className={styles.crust}></div>
            <div className={styles.cheese}>
              <div className={`${styles.peperoni} ${styles["p-1"]}`}></div>
              <div className={`${styles.peperoni} ${styles["p-2"]}`}></div>
              <div className={`${styles.peperoni} ${styles["p-3"]}`}></div>
              <div className={`${styles.olive} ${styles["o-1"]}`}></div>
              <div className={`${styles.olive} ${styles["o-2"]}`}></div>
              <div className={`${styles.olive} ${styles["o-3"]}`}></div>
              <div className={`${styles.olive} ${styles["o-6"]}`}></div>
              <div className={`${styles.olive} ${styles["o-7"]}`}></div>
            </div>
          </div>
        </div>
        <div className={`${styles["pizza-slice"]} ${styles["slice-3"]}`}>
          <div className={styles.border}>
            <div className={styles.crust}></div>
            <div className={styles.cheese}>
              <div className={`${styles.peperoni} ${styles["p-1"]}`}></div>
              <div className={`${styles.peperoni} ${styles["p-2"]}`}></div>
              <div className={`${styles.peperoni} ${styles["p-3"]}`}></div>
              <div className={`${styles.olive} ${styles["o-3"]}`}></div>
              <div className={`${styles.olive} ${styles["o-4"]}`}></div>
              <div className={`${styles.olive} ${styles["o-5"]}`}></div>
              <div className={`${styles.olive} ${styles["o-6"]}`}></div>
            </div>
          </div>
        </div>
        <div className={`${styles["pizza-slice"]} ${styles["slice-4"]}`}>
          <div className={styles.border}>
            <div className={styles.crust}></div>
            <div className={styles.cheese}>
              <div className={`${styles.peperoni} ${styles["p-1"]}`}></div>
              <div className={`${styles.peperoni} ${styles["p-2"]}`}></div>
              <div className={`${styles.peperoni} ${styles["p-3"]}`}></div>
              <div className={`${styles.olive} ${styles["o-1"]}`}></div>
              <div className={`${styles.olive} ${styles["o-2"]}`}></div>
              <div className={`${styles.olive} ${styles["o-3"]}`}></div>
              <div className={`${styles.olive} ${styles["o-4"]}`}></div>
            </div>
          </div>
        </div>
        <div className={`${styles["pizza-slice"]} ${styles["slice-5"]}`}>
          <div className={styles.border}>
            <div className={styles.crust}></div>
            <div className={styles.cheese}>
              <div className={`${styles.peperoni} ${styles["p-1"]}`}></div>
              <div className={`${styles.peperoni} ${styles["p-2"]}`}></div>
              <div className={`${styles.peperoni} ${styles["p-3"]}`}></div>
              <div className={`${styles.olive} ${styles["o-1"]}`}></div>
              <div className={`${styles.olive} ${styles["o-2"]}`}></div>
              <div className={`${styles.olive} ${styles["o-6"]}`}></div>
              <div className={`${styles.olive} ${styles["o-7"]}`}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.title}><p>YÜKLENİYOR</p></div>
    </section>
  );
}
