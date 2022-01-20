import Card from "../UI/Card/Card";
import styles from "./BookList.module.css";

const BookList = ({ books }) => {
  console.log(books.map((item) => console.log(item)));
  return (
    <div className={styles.listContainer}>
      {books.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
};
export default BookList;
