import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <img
          className={styles.books}
          src="https://freesvg.org/img/book-pack.png"
          alt="books"
        />
        <h1>Book finder</h1>
      </header>
      <main></main>
    </div>
  );
};
export default Homepage;
