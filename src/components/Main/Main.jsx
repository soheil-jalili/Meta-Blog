import ThemeContext from "../../context/Theme";
import Advertisement from "../Advertisement/Advertisement";
import BlogBanner from "../Blog_Banner/Blog_Banner";
import MainBlogItem from "../Blog_Item/Main_Blog_Item";
import styles from "./Main.module.css";

import { useContext } from "react";
function Main() {
  return (
    <>
      <main className={styles.main}>
        <BlogBanner />
        {/* margin: 8rem auto 5rem; */}
        <Advertisement
          marginTop={"8rem"}
          marginBottom={"5rem"}
          marginRight={"auto"}
          marginLeft={"auto"}
        />
        <MainBlogItem />
        <Advertisement
          marginTop={"5rem"}
          marginBottom={"5rem"}
          marginRight={"auto"}
          marginLeft={"auto"}
        />
      </main>
    </>
  );
}

export default Main;
