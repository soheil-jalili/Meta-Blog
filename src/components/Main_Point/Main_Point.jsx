import styles from "./Main_Point.module.css";

function MainPoint({ mainTitle }) {
  return (
    <section className={styles.main__point}>
      <h4 className={styles.main__title}>{mainTitle}</h4>
    </section>
  );
}

export default MainPoint;
