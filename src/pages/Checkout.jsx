import styles from "./Checkout.module.css";
import Footer from "../component/Footer";
import Header from "../component/Header";
import OrderDetails from "../component/OrderDetails";
import LoadingUI from "../component/LoadingUI";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Error from "../component/Error";

export default function Checkout({ formData }) {
  const history = useHistory();

  function handleSubmit(event) {}

  return (
    <section className={styles.container}>
      <section className={styles.fullScreen}>
        <header>
          <Header style={{ backgroundColor: "black" }} />
        </header>

        {!formData ? (
          <LoadingUI />
        ) : formData.isError ? (
          <Error formError={formData.message} />
        ) : (
          <main>
            {" "}
            <OrderDetails formData={formData} />
            <section className={styles.btnContainer}>
              <div className={styles.buttons}>
                <button
                  onClick={() => {
                    history.goBack();
                  }}
                  className={styles.return}
                >
                  <i className="fa fa-chevron-left" aria-hidden="true"></i>Düzenle
                </button>
                <button
                  onClick={() => {
                    history.push("./success");
                  }}
                  className={styles.confirm}
                >
                  Ödemeyi Tamamla
                </button>
              </div>
            </section>
          </main>
        )}
      </section>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}
