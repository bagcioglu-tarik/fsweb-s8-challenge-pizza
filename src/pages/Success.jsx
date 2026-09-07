import Header from "../component/Header";
import "./Success.css";

export default function Success() {
  return (
    <div className="container">
      <header>
        <Header hasBreadcrumbs={false} />
      </header>
      <main>
        <div className="title">
          <h1>
            TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI!
          </h1>
        </div>
      </main>
    </div>
  );
}
