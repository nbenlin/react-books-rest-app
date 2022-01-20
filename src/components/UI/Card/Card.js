import styles from "./Card.module.css";

const Card = ({ book }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img
          className={styles.image}
          src={book.volumeInfo.imageLinks.thumbnail}
          alt="book"
        />
      </div>
      <div className={styles.cardBody}>
        <p className={styles.title}>Book title</p>
        <p className={styles.author}>Book Author</p>
      </div>
    </div>
  );
};
export default Card;
