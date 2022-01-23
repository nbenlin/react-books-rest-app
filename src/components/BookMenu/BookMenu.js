import styles from "./BookMenu.module.css";

const BookMenu = () => {
  return (
    <>
      <div className={styles.booksMenu}>
        <div className={styles.daily}>Daily Top</div>
        <div className={styles.newReleases}>New releases</div>
        <div className={styles.bestsellers}>Bestsellers</div>
        <div className={styles.topAuthors}>Top authors</div>
      </div>
    </>
  );
};
export default BookMenu;
