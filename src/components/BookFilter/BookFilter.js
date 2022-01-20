import React, { useState } from "react";
import styles from "./BookFilter.module.css";
import { BiSearchAlt as SearchIcon } from "react-icons/bi";
import { RiCloseFill as ExitIcon } from "react-icons/ri";

const BooksFilter = () => {
  const [text, setText] = useState("");

  const enteredTextHandler = (event) => {
    setText(event.target.value);
  };

  const deleteTextHandler = () => {
    setText("");
  };

  return (
    <div className={styles.filterWrapper}>
      <input
        value={text}
        onChange={enteredTextHandler}
        className={styles.filterInput}
      />
      <SearchIcon className={styles.searchIcon} />
      {text && (
        <ExitIcon onClick={deleteTextHandler} className={styles.exitIcon} />
      )}
    </div>
  );
};
export default BooksFilter;
