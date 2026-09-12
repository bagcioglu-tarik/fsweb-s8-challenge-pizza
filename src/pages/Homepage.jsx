import Header from "../component/Header";
import Footer from "../component/Footer";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import data from "../Data";
import Categories from "../component/Categories";
import BannerCard from "../component/BannerCard";
import ProductCard from "../component/ProductCard";

export default function Homepage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Header />

          <div className={styles.title}>
            <h2>fırsatı kaçırma</h2>
            <h1>
              KOD ACIKTIRIR <br /> PİZZA, DOYURUR
            </h1>
          </div>

          <div className={styles.button} data-cy="order-button">
            <Link to="/order">ACIKTIM</Link>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section>
          <nav className={styles.topCategories}>
            <ul className={styles.categoryList}>
              {data.categories.map((category) => (
                <Categories
                  key={category.id}
                  icon={category.icon}
                  name={category.name}
                />
              ))}
            </ul>
          </nav>
        </section>

        <section className={styles.bannerCards}>
          {data.bannerCards.map((card) => (
            <BannerCard
              key={card.id}
              id={card.id}
              imgUrl={card.imgUrl}
              title={card.title}
              subTitle={card.subTitle}
              spanText={card.spanText}
            />
          ))}
        </section>

        <section className={styles.bottomCards}>
          <div className={styles.title}>
            <p>en çok paketlenen menüler</p>
            <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
          </div>

          <nav className={styles.bottomCategories}>
            <ul className={styles.categoryList}>
              {data.categories.map((category) => (
                <Categories
                  key={category.id}
                  icon={category.icon}
                  name={category.altName}
                />
              ))}
            </ul>
          </nav>

          <div className={styles.products}>
            {data.products.map((product) => (
              <ProductCard
                key={product.id}
                productImg={product.imgUrl}
                productName={product.name}
                productRate={product.rate}
                productPrice={product.price}
                productStock={product.stock}
              />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
