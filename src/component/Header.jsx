import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";

export default function Header({ hasBreadcrumbs }) {
  return (
    <div className="header-container">
      <div className="logo">
        <Link to="/">
          <img src="../images/iteration-1-images/logo.svg" alt="logo" />
        </Link>
      </div>

      {hasBreadcrumbs && (
        <div className="breadcrumbs">
          <p>
            <Link to="/">Anasayfa</Link> -{" "}
            <Link to="/order">
              <strong>Sipariş Oluştur</strong>
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
