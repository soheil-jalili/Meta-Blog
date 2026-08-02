import styles from "./Footer.module.css";
import FooterCopyRight from "../Footer_Copy_Right/Footer_Copy_Right";
import { MdOutlineEmail } from "react-icons/md";
import ButtonSub from "../../widgets/Button_Sub/Button_Sub";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__main}>
          <section className={styles.footer__about}>
            <h5>About</h5>

            <p className={styles.footer__about__desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>

            <div className={styles.footer__email}>
              <span className={styles.footer__email_label}>
                Email : <span>jalilisoheil14@gmail.com</span>
              </span>
            </div>

            <div className={styles.footer__phone}>
              <span className={styles.footer__phone_label}>
                Phone : <span>880 123 456 789</span>
              </span>
            </div>
          </section>

          <section className={styles.footer__links}>
            <div>
              <h5 className={styles.footer__links__title}>Quick Link</h5>
              <ul className={styles.footer__links__menu}>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/"}>About</Link>
                </li>
                <li>
                  <Link href={"/"}>Blog</Link>
                </li>
                <li>
                  <Link href={"/"}>Archived</Link>
                </li>
                <li>
                  <Link href={"/"}>Author</Link>
                </li>
                <li>
                  <Link href={"/"}>Contact</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footer__categries__link}>
              <h5>Category</h5>
              <ul className={styles.footer__categries__menu}>
                <li>
                  <Link href={"/"}>Lifestyle</Link>
                </li>
                <li>
                  <Link href={"/"}>Technology</Link>
                </li>
                <li>
                  <Link href={"/"}>Travel</Link>
                </li>
                <li>
                  <Link href={"/"}>Business</Link>
                </li>
                <li>
                  <Link href={"/"}>Economy</Link>
                </li>
                <li>
                  <Link href={"/"}>Sports</Link>
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.weekly__newsletter}>
            <h6 className={styles.weekly__newsletter__title}>
              Weekly Newsletter
            </h6>
            <p className={styles.weekly__newsletter__description}>
              Get blog articles and offers via email
            </p>
            <div className={styles.footer__email__input__main}>
              <input type="text" placeholder="Your Email" />

              <MdOutlineEmail />
            </div>
            <ButtonSub title={"Subscribe"} />
          </section>
        </div>
        <FooterCopyRight />
      </div>
    </footer>
  );
}

export default Footer;
