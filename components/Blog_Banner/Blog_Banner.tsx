import banner from "../../assets/img/banner.png";
import LastBlog from "../Last_Blog/Last_Blog";
import styles from "./Blog_Banner.module.css";

function BlogBanner() {
  return (
    <section className={styles.blog__banner}>
      <img src={banner} alt="Banner" />

      <LastBlog />
    </section>
  );
}

export default BlogBanner;
