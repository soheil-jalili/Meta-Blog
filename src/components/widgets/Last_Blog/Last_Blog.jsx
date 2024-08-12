import { Link } from "react-router-dom";
import profile from "../../../assets/img/profile.png";
import styles from "./Last_Blog.module.css";

function LastBlog() {
  return (
    <div className={styles.last__blog__container}>
      <div className={styles.blog__badge}>
        <Link>Technology</Link>
      </div>

      <h1 className={styles.last__blog__title}>
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>

      <div className={styles.last__blog__info}>
        <img src={profile} alt="Profile Image" />
        <p>Jason Francisco</p>
        <p>August 20, 2022</p>
      </div>
    </div>
  );
}

export default LastBlog;
