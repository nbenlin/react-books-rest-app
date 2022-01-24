import styles from "./Books.module.css";
import BookList from "../BookList/BookList";
import BookMenu from "../BookMenu/BookMenu";

const Books = ({ books, menuClickHandler, loading }) => {
  return (
    <div className={styles.booksWrapper}>
      <BookMenu menuClickHandler={menuClickHandler} />
      {loading ? <h1>Loading...</h1> : <BookList books={books} />}
    </div>
  );
};
export default Books;
