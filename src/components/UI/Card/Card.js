import styles from "./Card.module.css";

const Card = ({ book }) => {
  let titleMaxLength = 20;
  const titleWithEllipsis =
    book.volumeInfo.title.length > titleMaxLength
      ? book.volumeInfo.title.substring(0, titleMaxLength) + "..."
      : book.volumeInfo.title;

  const authors = book.volumeInfo.authors.toString();
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <a
          href={book.volumeInfo.canonicalVolumeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.image}
            src={book.volumeInfo.imageLinks.thumbnail}
            alt="book"
          />
        </a>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.title}>{titleWithEllipsis}</p>
        <p className={styles.author}>{authors}</p>
      </div>
    </div>
  );
};
export default Card;
