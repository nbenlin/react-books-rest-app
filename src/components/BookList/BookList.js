import Card from "../UI/Card/Card";
import styles from "./BookList.module.css";

const BookList = ({ books }) => {
  // console.log(books.map((item) => console.log(item)));

  return (
    <>
      <div className={styles.booksMenu}>
        <div className={styles.daily}>Daily Top</div>
        <div className={styles.newReleases}>New releases</div>
        <div className={styles.bestsellers}>Bestsellers</div>
        <div className={styles.topAuthors}>Top authors</div>
      </div>
      <div className={styles.listContainer}>
        {books !== undefined &&
          books.map((book) => <Card key={book.id} book={book} />)}
      </div>
    </>
  );
};
export default BookList;
