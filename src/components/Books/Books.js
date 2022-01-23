import styles from "./Books.module.css";
import BooksFilter from "../BookFilter/BookFilter";
import BookList from "../BookList/BookList";

const Books = ({ books, filterHandler }) => {
  return (
    <div className={styles.booksWrapper}>
      <BooksFilter filterHandler={filterHandler} />
      <BookList books={books} />
    </div>
  );
};
export default Books;
