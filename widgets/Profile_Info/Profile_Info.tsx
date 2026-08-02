import styles from "./Profile_Info.module.css";

function ProfileInfo({ profileImg, author, date }) {
  return (
    <div className={styles.blog__info}>
      <img src={profileImg} alt="Profile Image" />
      <p className={styles.blog__info_author}>{author}</p>
      <p className={styles.blog__info_date}>{date}</p>
    </div>
  );
}

export default ProfileInfo;
