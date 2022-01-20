import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}></div>
      <div className={styles.cardBody}></div>
    </div>
  );
};
export default Card;
