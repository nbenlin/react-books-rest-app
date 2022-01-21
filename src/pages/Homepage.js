import Books from "../components/Books/Books";
import Sidebar from "../components/UI/Sidebar/Sidebar";
import styles from "./Homepage.module.css";

const Homepage = ({ books }) => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.header}>
        <img
          className={styles.books}
          src="https://freesvg.org/img/book-pack.png"
          alt="books"
        />
        <h1>Book finder</h1>
      </div>
      <main>
        <Books books={books} />
        <Sidebar />
      </main>
    </div>
  );
};
export default Homepage;
