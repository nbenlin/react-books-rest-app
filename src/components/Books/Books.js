import styles from "./Books.module.css";
import BooksFilter from "../BookFilter/BookFilter";
import BookList from "../BookList/BookList";

const Books = ({ books }) => {
  return (
    <div className={styles.booksWrapper}>
      <BooksFilter />
      <BookList books={books} />
    </div>
  );
};
export default Books;
