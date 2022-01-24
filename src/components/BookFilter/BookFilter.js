import React, { useState } from "react";
import styles from "./BookFilter.module.css";
// import { BiSearchAlt as SearchIcon } from "react-icons/bi";
// import { RiCloseFill as ExitIcon } from "react-icons/ri";

const BookFilter = ({ filterHandler }) => {
  const [text, setText] = useState("");

  const enteredTextHandler = (event) => {
    setText(event.target.value);
    filterHandler(event.target.value);
  };

  const deleteTextHandler = () => {
    setText("");
    filterHandler("");
  };

  return (
    <div className={styles.filterWrapper}>
      <input
        value={text}
        onChange={enteredTextHandler}
        className={styles.filterInput}
        placeholder="Search books by name, author, genre and etc ..."
      />
      {/* <SearchIcon className={styles.searchIcon} /> */}
      {text && (
        <span onClick={deleteTextHandler} className={styles.exitIcon}>
          X
        </span>
      )}
    </div>
  );
};
export default BookFilter;
