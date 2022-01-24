import styles from "./Bookdetails.module.css";

const Bookdetails = ({ book }) => {
  return (
    <div className={styles.detailsContainer}>
      <div className={styles.header}>
        <div className={styles.title}>
          <p>Title: {book.volumeInfo.title}</p>
          <p>Author: {book.volumeInfo.authors}</p>
          <p>Publisher: {book.volumeInfo.publisher}</p>
          <p>Published date: {book.volumeInfo.publishedDate}</p>
          <p>Pages: {book.volumeInfo.pageCount}</p>
        </div>
        <div className={styles.image}>
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
        </div>
      </div>
      <div className={styles.body}>
        <p>{book.volumeInfo.description.substring(0, 100)}</p>
      </div>
    </div>
  );
};
export default Bookdetails;
