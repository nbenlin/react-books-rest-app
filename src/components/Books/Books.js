import styles from "./Books.module.css";
import BookList from "../BookList/BookList";
import BookMenu from "../BookMenu/BookMenu";

const Books = ({ books, menuClickHandler }) => {
  return (
    <div className={styles.booksWrapper}>
      <BookMenu menuClickHandler={menuClickHandler} />
      {books !== undefined && <BookList books={books} />}
    </div>
  );
};
export default Books;
