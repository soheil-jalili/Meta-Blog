import styles from "./Button_Sub.module.css";
function ButtonSub({ title }) {
  return <button className={styles.button__sub}>{title}</button>;
}

export default ButtonSub;
