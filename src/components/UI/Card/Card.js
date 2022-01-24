import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./Card.module.css";
import Bookdetails from "../../BookDetails/Bookdetails";

const Card = ({ book }) => {
  const [toggleModal, setToggleModal] = useState(false);
  let maxTextLength = 20;

  const titleWithEllipsis =
    book.volumeInfo.title.length > maxTextLength
      ? book.volumeInfo.title.substring(0, maxTextLength) + "..."
      : book.volumeInfo.title;

  const categoryWithEllipsis =
    book.volumeInfo.categories !== undefined &&
    book.volumeInfo.categories.length > maxTextLength
      ? book.volumeInfo.categories.substring(0, maxTextLength) + "..."
      : book.volumeInfo.categories;

  return (
    <>
      {/* <Modal>
        <Bookdetails book={book} />
      </Modal> */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <a
            href={book.volumeInfo.canonicalVolumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {book.volumeInfo.imageLinks?.thumbnail !== undefined && (
              <img
                className={styles.image}
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt="book"
              />
            )}
          </a>
        </div>
        <div className={styles.cardBody}>
          <p className={styles.title}>{titleWithEllipsis}</p>
          <p className={styles.author}>{book.volumeInfo.authors}</p>
          {categoryWithEllipsis && (
            <p className={styles.categoryName}>{categoryWithEllipsis}</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Card;
