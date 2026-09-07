import Header from "../component/Header";
import "./Homepage.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Homepage() {
  return (
    <header
      style={{
        backgroundImage: "url(../images/iteration-1-images/home-banner.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="header">
        <Header hasBreadcrumbs={false} />

        <div className="title">
          <h1>
            KOD ACIKTIRIR <br /> PİZZA, DOYURUR
          </h1>
        </div>

        <div className="button" data-cy="order-button">
          <Link to="/order">ACIKTIM</Link>
        </div>
      </div>
    </header>
  );
}
