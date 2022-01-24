import styles from "./BookMenu.module.css";

const BookMenu = ({ menuClickHandler }) => {
  const onMenuClickHandler = (menuName) => {
    menuClickHandler(menuName);
  };

  return (
    <div className={styles.booksMenu}>
      <div onClick={() => onMenuClickHandler("daily")} className={styles.daily}>
        Daily Top
      </div>
      <div
        onClick={() => onMenuClickHandler("newReleases")}
        className={styles.newReleases}
      >
        New releases
      </div>
      <div
        onClick={() => onMenuClickHandler("bestsellers")}
        className={styles.bestsellers}
      >
        Bestsellers
      </div>
      <div
        onClick={() => onMenuClickHandler("topAuthors")}
        className={styles.topAuthors}
      >
        Top authors
      </div>
    </div>
  );
};
export default BookMenu;
