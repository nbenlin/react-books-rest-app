import styles from "./Books.module.css";
import BooksFilter from "../BookFilter/BookFilter";
import BookList from "../BookList/BookList";

const Books = () => {
  return (
    <div className={styles.booksWrapper}>
      <BooksFilter />
      <BookList />
    </div>
  );
};
export default Books;
