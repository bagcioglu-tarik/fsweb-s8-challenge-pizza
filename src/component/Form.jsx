import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Form.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import data from "../Data";

export default function Form({ handleFormData }) {
  const [isValid, setIsValid] = useState(false);

  const [Form, setForm] = useState({
    size: "",
    dough: "",
    ingredients: [],
    clientName: "",
    note: "",
  });

  const [errors, setErrors] = useState({
    size: false,
    dough: false,
    ingredients: false,
    clientName: false,
    amount: false,
  });

  const [ingredientsPrice, setIngredientsPrice] = useState(0);

  const [amount, setAmount] = useState(1);

  const history = useHistory();

  function handleChange(event) {
    let { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      let ingredientsEditedForm;

      if (checked) {
        ingredientsEditedForm = {
          ...Form,
          ingredients: [...Form.ingredients, value],
        };
      } else {
        const unCheckedList = Form.ingredients.filter((item) => item !== value);
        ingredientsEditedForm = { ...Form, ingredients: unCheckedList };
      }

      setForm(ingredientsEditedForm);

      const ingredientsInLimit =
        ingredientsEditedForm.ingredients.length >= 4 &&
        ingredientsEditedForm.ingredients.length <= 10
          ? false
          : true;

      setErrors({ ...errors, ingredients: ingredientsInLimit });
      setIngredientsPrice(ingredientsEditedForm.ingredients.length * 5);
    } else {
      setForm({ ...Form, [name]: value });
    }

    if (name === "size") {
      setErrors({ ...errors, [name]: value ? false : true });
    } else if (name === "dough") {
      setErrors({ ...errors, [name]: value ? false : true });
    } else if (name === "clientName") {
      setErrors({ ...errors, [name]: value.length >= 3 ? false : true });
    }
  }

  function handleClick(event) {
    const { className } = event.target;
    if (className.includes("minus") && amount > 1) {
      setAmount(amount - 1);
      setErrors({ ...errors, amount: false });
    } else if (className.includes("plus") && amount < 10) {
      setAmount(amount + 1);
      setErrors({ ...errors, amount: false });
    } else {
      setErrors({ ...errors, amount: true });
    }
  }

  function handleReset() {
    setForm({
      size: "",
      dough: "",
      ingredients: [],
      clientName: "",
      note: "",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleReset();
    if (!isValid) return;

    axios({
      method: "POST",
      url: "https://reqres.in/api/pizza",
      headers: { "x-api-key": "free_user_3I0UlXwOnyUnYLQiTN2efl2hNbz" },
      data: {
        orderName: data.products[1].name,
        ...Form,
        amount: amount,
        ingredientsPrice: ingredientsPrice,
        totalPrice: (ingredientsPrice + data.products[1].price) * amount,
      },
    })
      .then((res) => {
        handleFormData(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });

    history.push("/checkout");
  }

  useEffect(() => {
    if (
      Form.size !== "" &&
      Form.dough !== "" &&
      Form.clientName.length >= 3 &&
      Form.ingredients.length >= 4 &&
      Form.ingredients.length <= 10 &&
      amount >= 1 &&
      amount <= 10
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [Form, amount]);

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.sizeAndDough}>
        <fieldset className={styles.size} data-cy="size">
          <legend>
            Boyut Seç <span aria-hidden>*</span>
          </legend>
          <div className={styles.sizeOptions}>
            {data.size.map((size, index) => {
              return (
                <label key={index}>
                  <input
                    name="size"
                    type="radio"
                    value={size}
                    onChange={handleChange}
                    required={errors.size}
                  />{" "}
                  {size}
                </label>
              );
            })}
          </div>
        </fieldset>

        <fieldset className={styles.dough} data-cy="dough">
          <legend>
            Hamur Seç <span aria-hidden>*</span>
          </legend>
          <div className={styles.doughSelect}>
            <select
              name="dough"
              onChange={handleChange}
              required={errors.dough}
            >
              <option hidden value="">
                - Hamur Kalınlığı Seç -
              </option>
              <option value="İnce">Süpper İnce</option>
              <option value="Standart">Standart</option>
              <option value="Kalın">Kalın</option>
            </select>
          </div>
        </fieldset>
      </div>

      <fieldset
        className={styles.additionalIngredients}
        data-cy="additional-ingredients"
      >
        <div className={styles.ingredientsTitle}>
          <legend>
            Ek Malzemeler <span>*</span>
          </legend>
          <p>En az 4, En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>

        <div className={styles.ingredients}>
          {data.ingredients.map((item, index) => {
            return (
              <label className={styles.checkbox} key={index}>
                <input
                  value={item}
                  type="checkbox"
                  onChange={handleChange}
                  required={errors.ingredients}
                  checked={Form.ingredients.includes(item)}
                />
                <span className={styles.checkmark}></span> {item}
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className={styles.clientName} data-cy="client-name">
        <label htmlFor="clientName">
          <legend>
            İsminiz <span aria-hidden>*</span>
          </legend>
        </label>
        <input
          type="text"
          name="clientName"
          id="clientName"
          className={styles.formControl}
          placeholder="İsminizi giriniz"
          value={Form.clientName}
          onChange={handleChange}
          required={errors.clientName}
        ></input>
      </fieldset>

      <fieldset className={styles.note} data-cy="note">
        <label htmlFor="note">
          <legend>Sipariş Notu</legend>
        </label>
        <textarea
          name="note"
          id="note"
          className={styles.formControl}
          rows="1"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          onChange={handleChange}
        ></textarea>
      </fieldset>

      <hr />

      <fieldset className={styles.orderCheck} data-cy="products-check">
        <div className={styles.counter}>
          <div>
            <button
              type="button"
              className={`${styles.btn} ${styles.minus}`}
              onClick={handleClick}
              disabled={amount <= 1}
              aria-label="Miktari azalt"
            >
              -
            </button>
            <div className={styles.counterNum}>{amount}</div>
            <button
              type="button"
              className={`${styles.btn} ${styles.plus}`}
              onClick={handleClick}
              disabled={amount >= 10}
              aria-label="Miktari arttır"
            >
              +
            </button>
          </div>
        </div>

        <div className={styles.sumCheck}>
          <legend>Sipariş Toplamı</legend>
          <div className={styles.sum}>
            <p>Seçimler</p>
            <p>{ingredientsPrice * amount}₺</p>
          </div>
          <div className={styles.sum}>
            <p>Toplam</p>
            <p>{(ingredientsPrice + data.products[1].price) * amount}₺</p>
          </div>
        </div>

        <button
          className={`${styles.btn} ${styles.orderBtn}`}
          disabled={!isValid}
          data-cy="submit-button"
        >
          SİPARİŞ VER
        </button>
      </fieldset>
    </form>
  );
}
