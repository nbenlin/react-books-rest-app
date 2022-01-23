import Card from "../UI/Card/Card";
import styles from "./BookList.module.css";

const BookList = ({ books }) => {
  return (
    <>
      {books !== undefined && (
        <div className={styles.listContainer}>
          {books.map((book) => (
            <Card key={book.etag} book={book} />
          ))}
        </div>
      )}
    </>
  );
};
export default BookList;
