import styles from "./Advertisement.module.css";
function Advertisement({ marginTop, marginBottom, marginLeft, marginRight }) {
  return (
    <section
      style={{
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
      }}
      className={styles.main__ads}
    >
      <p className={styles.main__ads__title}>Advertisement</p>
      <p className={styles.main__ads__desc}>You can place ads</p>
      <p className={styles.main__ads__size}>750x100</p>
    </section>
  );
}

export default Advertisement;
