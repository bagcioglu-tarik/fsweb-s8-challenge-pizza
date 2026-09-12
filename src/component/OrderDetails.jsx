import styles from "./OrderDetails.module.css";

export default function OrderDetails({ formData }) {
  return (
    <>
      <section className={styles.orderInfo} data-cy='orderInfo'>
        <h3>{formData.orderName}</h3>

        <div className={styles.orderDetails} data-cy='orderDetails'>
          <p>
            Boyut: <span>{formData.size}</span>
          </p>
          <p>
            Hamur: <span>{formData.dough}</span>
          </p>
          <p>
            Ek Malzemeler: <span>{formData.ingredients.join(", ")}</span>
          </p>
          <p>
            İsim: <span>{formData.clientName.toUpperCase()}</span>
          </p>
          {formData.note && (
            <p>
              Notlar: <span>{formData.note}</span>
            </p>
          )}
        </div>
      </section>

      <section className={styles.orderCheckout} data-cy='orderCheckout'>
        <div className={styles.orderSum}>
          <h3>Sipariş Toplamı</h3>
          <div className={`${styles.sum} ${styles.midEl}`} >
            <p>Seçimler</p>
            <p>{formData.ingredientsPrice}₺</p>
          </div>
          <div className={styles.sum} data-cy='sum'>
            <p>Toplam</p>
            <p>{formData.totalPrice}₺</p>
          </div>
        </div>
      </section>
    </>
  );
}
