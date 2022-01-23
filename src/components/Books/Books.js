import styles from "./Books.module.css";
import BookList from "../BookList/BookList";
import BookMenu from "../BookMenu/BookMenu";

const Books = ({ books }) => {
  return (
    <div className={styles.booksWrapper}>
      <BookMenu />
      {books !== undefined && <BookList books={books} />}
    </div>
  );
};
export default Books;
