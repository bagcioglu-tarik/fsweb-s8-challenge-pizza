import styles from "./Footer.module.css";
import data from "../Data";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <section className={styles.footerTop}>
        <div>
          <Link to="/">
            <img  className={styles.footerLogo}
              src="./images/iteration-2-images/footer/logo-footer.svg"
              alt="logo-footer"
            />
          </Link>

          <address>
            <div className={styles.addresses}>
              <a className={styles.address} href="https://maps.app.goo.gl/5m56pjpP8rig26Pb7">
                <img className={styles.addressIcon}
                  src="./images/iteration-2-images/footer/icons/icon-1.png"
                  alt=""
                />
                <p>
                  341 Londonderry Road,
                  <br />
                  Istanbul Türkiye
                </p>
              </a>
            </div>

            <div className={styles.addresses}>
              <a className={styles.address} href="mailto:aciktim@teknolojikyemekler.com">
                <img className={styles.addressIcon}
                  src="./images/iteration-2-images/footer/icons/icon-2.png"
                  alt="mail icon"
                />
                <p>aciktim@teknolojikyemekler.com</p>
              </a>
            </div>

            <div className={styles.addresses}>
              <a className={styles.address} href="tel:+902161234567">
                <img className={styles.addressIcon}
                  src="./images/iteration-2-images/footer/icons/icon-3.png"
                  alt="phone icon"
                />
                <p>+90 216 123 45 67</p>
              </a>
            </div>
          </address>
        </div>

        <div className={styles.footerProductRange}>
          <h5 className={styles.footerTitles}  >Hot Menu</h5>
          <ul>
            {data.productRange.map((product, index) => (
              <li key={index}>
                <Link to="/order">{product}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerInstagram}>
          <h5 className={styles.footerTitles} >Instagram</h5>
          <ul>
            {data.instaPosts.map((post) => (
              <li key={post.id}>
                <a href="#" aria-label={post.label}>
                  <img src={post.imgUrl} alt={post.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <hr />

      <section>
        <div className={styles.footerTrademark}>
          <p>© 2026 Teknolojik Yemekler</p>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
