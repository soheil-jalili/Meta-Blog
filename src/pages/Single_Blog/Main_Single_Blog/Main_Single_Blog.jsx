import Badge from "../../../widgets/Badge/Badge";
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
    </main>
  );
}

export default MainSingleBlog;
