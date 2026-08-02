import Link from "next/link";
import styles from "./Badge.module.css";


function Badge({ title, backgroundColor, textColor, link }) {
  return (
    <Link style={{ color: textColor }} href={link} className={styles.badge__main}>
      <div
        style={{ backgroundColor: backgroundColor }}
        className={styles.blog__badge}
      >
        {title}
      </div>
    </Link>
  );
}

export default Badge;
