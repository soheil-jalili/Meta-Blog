import Badge from "../../../widgets/Badge/Badge";
import BodySingleBlog from "../Body_Single_Blog/Body_Single_Blog";
import styles from "./Main_Single_Blog.module.css";

function MainSingleBlog() {
  return (
    <main className={styles.main}>
      <Badge
        backgroundColor={"#4B6BFB"}
        link={"/"}
        textColor={"#fff"}
        title={"Technology"}
      />

      <BodySingleBlog />
    </main>
  );
}

export default MainSingleBlog;
