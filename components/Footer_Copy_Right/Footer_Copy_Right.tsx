import Link from "next/link";
import logo from "../../assets/img/logo.png";

import styles from "./Footer_Copy_Right.module.css";
import Image from "next/image";
function FooterCopyRight() {
  return (
    <section className={styles.footer__copy__right}>
      <div className={styles.copy__right}>
        <Image src={logo} alt="Logo" width={100} height={100} />

        <div className={styles.copy__right_main}>
          <p className={styles.copy__right_main__title}>
            Meta<span className={styles.blog__span}>Blog</span>
          </p>

          <p className={styles.copy__right__description}>
            ©soheil 2024. All Rights Reserved.
          </p>
        </div>
      </div>
      <div className={styles.copy__right__links}>
        <ul>
          <li>
            <Link href={"https://google.com"}>Terms of Use</Link>
          </li>
          <div className={styles.copy__right__vertical__line}></div>
          <li>
            <Link href={"https://google.com"}>Privacy Policy</Link>
          </li>
          <div className={styles.copy__right__vertical__line}></div>
          <li>
            <Link href={"https://google.com"}>Cookie Policy</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FooterCopyRight;
