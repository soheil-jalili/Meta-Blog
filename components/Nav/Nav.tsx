"use client";
import logo from "../../assets/img/logo.png";
import styles from "./Nav.module.css";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { useContext } from "react";
import { IoMoon } from "react-icons/io5";
import ThemeContext from "../../context/Theme";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <Image src={logo} alt="logo" />
        <span>
          Meta<span className={styles.blog__span}>Blog</span>
        </span>
      </div>

      <ul className={styles.nav__menu}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/single-post"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>Pages</Link>
        </li>
        <li>
          <Link href={"/"}>Contact</Link>
        </li>
      </ul>

      <div className={styles.search__switch__button}>
        {/* Search */}
        <div className={styles.search__input__nav}>
          <input type="text" placeholder="Search" />
          <Link href={"/blog"}>
            <IoMdSearch />
          </Link>
        </div>

        {/* Switch Button */}
        <button
          style={
            theme == "light"
              ? {
                  backgroundColor: "#F4F4F5",
                }
              : {
                  backgroundColor: "#4B6BFB",
                }
          }
          className={styles.nav__switch__mode}
          onClick={() => {
            // if (theme == "light") {
            //   setTheme("dark");
            // } else {
            //   setTheme("light");
            // }
          }}
        >
          <div
            style={
              theme == "light"
                ? {
                    left: "0.2rem",
                  }
                : {
                    right: "0.2rem",
                  }
            }
            className={styles.nav__switch__mode__circle}
          >
            {theme == "light" ? <MdOutlineWbSunny /> : <IoMoon />}
          </div>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
