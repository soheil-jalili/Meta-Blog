import HeaderSingleBlog from "@/components/Header_Single_Blog/Header_Single_Blog";
import MainSingleBlog from "@/components/Main_Single_Blog/Main_Single_Blog";
import styles from "@/assets/css/Single_Blog.module.css";
import Footer from "@/components/Footer/Footer";

function SingleBlog() {
  return (
    <>
      <div className="container">
        <HeaderSingleBlog />
      </div>

      <div className={styles.single__blog__container}>
        <MainSingleBlog />
      </div>
      <Footer />
    </>
  );
}

export default SingleBlog;
