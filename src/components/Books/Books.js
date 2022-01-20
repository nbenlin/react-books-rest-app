import BookList from "../BookList";
import BooksFilter from "../BooksFilter";
import styles from "./Books.module.css";

const Books = () => {
  return (
    <div className={styles.booksWrapper}>
      <BooksFilter />
      <BookList />
    </div>
  );
};
export default Books;
