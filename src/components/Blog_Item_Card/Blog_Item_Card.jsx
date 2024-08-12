import Badge from "../../widgets/Badge/Badge.jsx";
import ProfileInfo from "../../widgets/Profile_Info/Profile_Info.jsx";
import styles from "./Blog_Item_Card.module.css";

function BlogItemCard({ img, category, title, profilePhoto, author, date }) {
  return (
    <div className={styles.blog__card_main}>
      <img
        src={img}
        alt={`Post Photo ${title}`}
        className={styles.blog__card__image}
      />

      <div className={styles.blog__card__description}>
        <Badge
          backgroundColor={"rgba(75, 107, 251, 5%)"}
          title={category}
          textColor={"#4B6BFB"}
          link={"/"}
        />

        <h3 className={styles.blog__card__title}>{title}</h3>

        <ProfileInfo author={author} profileImg={profilePhoto} date={date} />
      </div>
    </div>
  );
}

export default BlogItemCard;
