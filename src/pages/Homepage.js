import BookFilter from "../components/BookFilter/BookFilter";
import Books from "../components/Books/Books";
import Sidebar from "../components/UI/Sidebar/Sidebar";
import styles from "./Homepage.module.css";

import fantasySvg from "../images/fantasy.svg";

const Homepage = ({
  books,
  filterHandler,
  menuClickHandler,
  sidebarClickHandler,
  loading,
}) => {
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
        <Books
          books={books}
          loading={loading}
          filterHandler={filterHandler}
          menuClickHandler={menuClickHandler}
        />
        <Sidebar sidebarClickHandler={sidebarClickHandler} />
      </main>
    </div>
  );
};
export default Homepage;
