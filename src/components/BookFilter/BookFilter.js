import React, { useState } from "react";
import styles from "./BookFilter.module.css";
import searchIcon from "../../images/search.svg";
import deleteIcon from "../../images/delete.svg";

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
      <img className={styles.searchIcon} src={searchIcon} alt="searchicon" />
      {text && (
        <span onClick={deleteTextHandler} className={styles.deleteIcon}>
          <img src={deleteIcon} alt="deleteicon" />
        </span>
      )}
    </div>
  );
};
export default BookFilter;
