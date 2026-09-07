import "./Order.css";
import Form from "../component/Form";
import Header from "../component/Header";

export default function Order() {
  return (
    <>
      <header>
        <Header hasBreadcrumbs={true} />
      </header>
      <main>
        <Form />
      </main>
    </>
  );
}
