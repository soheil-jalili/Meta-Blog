import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import styles from "./Nav.module.css";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";

import { useState } from "react";
import { IoMoon } from "react-icons/io5";

function Nav() {
  const [theme, setTheme] = useState("light");
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <img src={logo} alt="logo" />
        <span>
          Meta<span className={styles.blog__span}>Blog</span>
        </span>
      </div>

      <ul className={styles.nav__menu}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/single-post"}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>Pages</Link>
        </li>
        <li>
          <Link to={"/"}>Contact</Link>
        </li>
      </ul>

      <div className={styles.search__switch__button}>
        {/* Search */}

        <div className={styles.search__input__nav}>
          <input type="text" placeholder="Search" />
          <Link to={"/blog"}>
            <IoMdSearch />
          </Link>
        </div>

        {/* Switch Button */}
        <div className={styles.nav__switch__mode}>
          <button
            className={styles.nav__switch__mode__circle}
            onClick={() => {
              if (theme == "light") {
                setTheme("dark");
              } else {
                setTheme("light");
              }
            }}
          >
            {theme == "light" ? <MdOutlineWbSunny /> : <IoMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
