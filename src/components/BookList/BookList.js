import Card from "../UI/Card/Card";
import styles from "./BookList.module.css";

const BookList = () => {
  return (
    <div className={styles.listContainer}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
export default BookList;
