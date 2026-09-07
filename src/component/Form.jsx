import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Form.css";
import { useEffect, useState } from "react";
import axios from "axios";

const order = {
  name: "Position Absolute Acı Pizza",
  price: 85.5,
  rate: 4.9,
  stock: 200,
  desc: "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.",
};

const ingredients = [
  "Pepperoni",
  "Tavuk Izgara",
  "Mısır",
  "Sarımsak",
  "Ananas",
  "Sosis",
  "Soğan",
  "Sucuk",
  "Biber",
  "Kabak",
  "Kanada Jambonu",
  "Domates",
  "Jalepeno",
  "Roka",
];

const size = ["Küçük", "Orta", "Büyük"];

export default function Form() {
  const [isValid, setIsValid] = useState(false);

  const [Form, setForm] = useState({
    size: "",
    dough: "",
    ingredients: [],
    note: "",
    clientName: "",
  });

  const [errors, setErrors] = useState({
    size: false,
    dough: false,
    ingredients: false,
    amount: false,
    clientName: false,
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
      note: "",
      clientName: "",
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
        orderName: order.name,
        ...Form,
        amount: amount,
        ingredientsPrice: ingredientsPrice,
        totalPrice: (ingredientsPrice + order.price) * amount,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    history.push("/success");
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
    <form onSubmit={handleSubmit}>
      <div className="orderInfo" data-cy="orderInfo">
        <h2 className="orderName">{order.name}</h2>

        <div className="orderDetails">
          <p className="orderPrice">{order.price}₺</p>
          <p className="orderRate">{order.rate}</p>
          <p className="orderStock">({order.stock})</p>
        </div>

        <p className="orderDesc">{order.desc}</p>
      </div>

      <div className="size-and-dough">
        <fieldset className="size" data-cy="size">
          <legend>
            Boyut Seç <span>*</span>
          </legend>
          {size.map((size, index) => {
            return (
              <label key={index}>
                <input
                  name="size"
                  type="radio"
                  value={size.toLowerCase()}
                  onChange={handleChange}
                  required={errors.size}
                />{" "}
                {size}
              </label>
            );
          })}
        </fieldset>

        <fieldset className="dough"  data-cy="dough">
          <legend>
            Hamur Seç <span>*</span>
          </legend>

          <select name="dough" onChange={handleChange} required={errors.dough}>
            <option value="">--Hamur Kalınlığı Seç--</option>
            <option value="ince">Süpper İnce</option>
            <option value="standart">Standart</option>
            <option value="kalın">Kalın</option>
          </select>
        </fieldset>
      </div>

      <fieldset className="additional-ingredients" data-cy="additional-ingredients">
        <div className="ingredients-title">
          <legend>
            Ek Malzemeler <span>*</span>
          </legend>
          <p>En az 4, En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
        </div>

        <div className="ingredients">
          {ingredients.map((item, index) => {
            return (
              <label key={index}>
                <input
                  value={item.toLowerCase()}
                  type="checkbox"
                  onChange={handleChange}
                  required={errors.ingredients}
                  checked={Form.ingredients.includes(item.toLowerCase())}
                />{" "}
                {item}
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="client-name" data-cy="client-name">
        <label htmlFor="clientName">
          <legend>
            İsminiz <span>*</span>
          </legend>
        </label>
        <input
          type="text"
          name="clientName"
          id="clientName"
          placeholder="İsminizi giriniz"
          value={Form.clientName}
          onChange={handleChange}
          required={errors.clientName}
        ></input>
      </fieldset>

      <fieldset className="note" data-cy="note">
        <label htmlFor="note">
          <legend>Sipariş Notu</legend>
        </label>
        <textarea
          name="note"
          id="note"
          rows="1"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          onChange={handleChange}
        ></textarea>
      </fieldset>

      <hr />

      <fieldset className="order-check" data-cy="order-check">
        <div className="counter">
          <div>
            <button
              type="button"
              className="btn minus"
              onClick={handleClick}
              disabled={amount <= 1}
            >
              -
            </button>
            <div className="counter-num">{amount}</div>
            <button
              type="button"
              className="btn plus"
              onClick={handleClick}
              disabled={amount >= 10}
            >
              +
            </button>
          </div>
        </div>

        <div className="sum-check">
          <legend>Sipariş Toplamı</legend>
          <div className="sum">
            <p>Seçimler</p>
            <p>{ingredientsPrice * amount}₺</p>
          </div>
          <div className="sum">
            <p>Toplam</p>
            <p>{(ingredientsPrice + order.price) * amount}₺</p>
          </div>
        </div>

        <button className="btn" disabled={!isValid} data-cy="submit-button">
          SİPARİŞ VER
        </button>
      </fieldset>
    </form>
  );
}
