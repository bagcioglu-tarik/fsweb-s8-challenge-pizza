import Header from "../component/Header";
import styles from "./Success.module.css";
import Footer from "../component/Footer";
import OrderDetails from "../component/OrderDetails";
import LoadingUI from "../component/LoadingUI";

export default function Success({ formData }) {
  return (
    <section className={styles.container}>
      <section className={styles.fullScreen}>
        <header>
          <Header />
        </header>

        {!formData ? (
          <LoadingUI />
        ) : (
          <main>
            <section className={styles.title} data-cy="success-title">
              <h2>lezzetin yolda</h2>
              <h1>SİPARİŞ ALINDI!</h1>
            </section>

            <hr />

            <OrderDetails formData={formData} />
          </main>
        )}
      </section>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}
