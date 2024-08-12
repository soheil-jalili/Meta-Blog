import Advertisement from "../Advertisement/Advertisement";
import BlogBanner from "../Blog_Banner/Blog_Banner";
import MainBlogItem from "../Blog_Item/Main_Blog_Item";
import styles from "./Main.module.css";

function Main() {
  return (
    <>
      <main className={styles.main}>
        <BlogBanner />
        <Advertisement />
        <MainBlogItem />
        {/* <Advertisement /> */}
      </main>
    </>
  );
}

export default Main;
