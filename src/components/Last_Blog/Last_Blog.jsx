import { Link } from "react-router-dom";
import profile from "../../assets/img/profile__photo/jason.png";
import styles from "./Last_Blog.module.css";
import ProfileInfo from "../../widgets/Profile_Info/Profile_Info.jsx";
import Badge from "../../widgets/Badge/Badge.jsx";

function LastBlog() {
  return (
    <div className={styles.last__blog__container}>
      <div className={styles.blog__badge}>
        <Link>Technology</Link>
      </div>

      <Badge
        backgroundColor={"#4b6bfb"}
        title={"Technology"}
        textColor={"#fff"}
        link={"/"}
      />

      <h1 className={styles.last__blog__title}>
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>

      <ProfileInfo
        profileImg={profile}
        date={"August 20, 2022"}
        author={"Jason Francisco"}
      />
    </div>
  );
}

export default LastBlog;
