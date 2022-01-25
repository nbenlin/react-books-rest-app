import { useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./BookList.module.css";

const BookList = ({ books }) => {
  const items = books !== undefined && books;
  const [offset, setOffset] = useState(0);
  const itemsPerHandleScroll = 6;

  const changeBooks = (offset) => {
    setOffset(offset);
  };

  const btns = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerHandleScroll); i++) {
    const elem = (
      <button
        className={styles.buttons}
        key={i}
        onClick={() => changeBooks(i - 1)}
      >
        {i}
      </button>
    );
    btns.push(elem);
  }

  let bookList = [];

  for (
    let i = offset * itemsPerHandleScroll;
    i < offset * itemsPerHandleScroll + itemsPerHandleScroll;
    i++
  ) {
    if (i >= items.length) {
      break;
    }
    bookList.push(items[i]);
  }

  bookList = bookList.map((book, idx) => {
    return <Card key={`list-${idx}`} book={book} />;
  });

  return (
    <>
      {books !== undefined && (
        <div className={styles.listContainer}>{bookList}</div>
      )}
      <div className={styles.buttonsWrap}>{btns}</div>
    </>
  );
};
export default BookList;
