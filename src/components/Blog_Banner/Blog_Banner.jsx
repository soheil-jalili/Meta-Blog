import banner from "../../assets/img/banner.png";
import styles from "./Blog_Banner.module.css";

function BlogBanner() {
  return (
    <section className={styles.blog__banner}>
      <img src={banner} alt="Banner" />
    </section>
  );
}

export default BlogBanner;
