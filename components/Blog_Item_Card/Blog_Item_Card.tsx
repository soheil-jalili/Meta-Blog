import Link from "next/link.js";
import styles from "./Blog_Item_Card.module.css";
import ProfileInfo from "@/widgets/Profile_Info/Profile_Info";
import Badge from "@/widgets/Badge/Badge";

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

        <Link href={"/blog/2"} className={styles.blog__card__title}>
          {title}
        </Link>

        <ProfileInfo author={author} profileImg={profilePhoto} date={date} />
      </div>
    </div>
  );
}

export default BlogItemCard;
