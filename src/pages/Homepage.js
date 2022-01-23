import BookFilter from "../components/BookFilter/BookFilter";
import Books from "../components/Books/Books";
import Sidebar from "../components/UI/Sidebar/Sidebar";
import styles from "./Homepage.module.css";

const Homepage = ({ books, filterHandler }) => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <img
            className={styles.books}
            src="https://freesvg.org/img/book-pack.png"
            alt="books"
          />
          <h1>Book finder</h1>
        </div>
        <BookFilter filterHandler={filterHandler} />
      </div>
      <main>
        <Books books={books} filterHandler={filterHandler} />
        <Sidebar />
      </main>
    </div>
  );
};
export default Homepage;
