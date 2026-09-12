import "./Order.module.css";
import Form from "../component/Form";
import Header from "../component/Header";
import styles from "./Order.module.css";
import Footer from "../component/Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import data from "../Data";

export default function Order({handleFormData}) {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section className={styles.formTop}>
          <div className={styles.formBanner}>
            <img
              src="./images/iteration-2-images/pictures/form-banner.png"
              alt="form banner"
            />
          </div>
          <div className={styles.breadcrumbs}>
            <p>
              <Link to="/">Anasayfa</Link> -{" "}
              <Link to="/order">
                <strong>Sipariş Oluştur</strong>
              </Link>
            </p>
          </div>
          <div className={styles.orderInfo} data-cy="orderInfo">
            <h2 className={styles.orderName}>{data.products[1].name}</h2>

            <div className={styles.orderDetails}>
              <p className={styles.orderPrice}>{data.products[1].price}₺</p>
              <p className={styles.orderRate}>{data.products[1].rate}</p>
              <p className={styles.orderStock}>({data.products[1].stock})</p>
            </div>

            <p className={styles.orderDesc}>{data.products[1].desc}</p>
          </div>
        </section>
        <Form handleFormData={handleFormData} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
