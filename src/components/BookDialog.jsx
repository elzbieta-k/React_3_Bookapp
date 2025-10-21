import { useEffect, useRef } from "react";
import styles from "../styles/BookDialog.module.css";
import Rating from "./Rating";
import { useBooks } from "../context/BooksContext";
import { FiExternalLink } from "react-icons/fi";

export default function BookDialog({ book, onClose }) {
  const dialogRef = useRef(null);
  const { toRead, addToRead, rating, setBookRating, deleteBook } = useBooks();

  const isOnShelf = book && toRead?.some((b) => b.id === book.id);

  useEffect(() => {
    const dialog = dialogRef.current;

    // Open or close the dialog based on `book`
    if (book) {
      dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }

    // --- detect clicks outside ---
    const handleOutsideClick = (e) => {
      if (dialog && dialog.open) {
        const rect = dialog.getBoundingClientRect();
        const isOutside =
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom;

        if (isOutside) {
          onClose();
        }
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [book, onClose]);

  return (
    <dialog ref={dialogRef} onClose={onClose} className={styles.dialog}>
      {book && (
        <div className={styles.bookContainer}>
          <div className={styles.leftSide}>
            <img src={book.formats["image/jpeg"]} alt="Book cover" />
            <button
              className={styles.addButton}
              onClick={() =>
                isOnShelf ? deleteBook(book.id, "toRead") : addToRead(book)
              }
            >
              {isOnShelf ? "Remove from shelf" : "Add to shelf"}
            </button>

            <Rating
              value={rating[book.id] || 0}
              onChange={(val) => setBookRating(book.id, val)}
              book={book}
            />
          </div>
          <div className={styles.rightSide}>
            <h2>{book.title || "No title"}</h2>
            <p>
              {book.authors && book.authors.length > 0
                ? book.authors.map((a) => a.name).join(", ")
                : "Unknown author"}
            </p>
            <h4>Category:</h4>
            <div className={styles.categoryContainer}>
              {book.bookshelves.map((i) => (
                <span key={i} className={styles.categorySpan}>
                  {i.replace("Category: ", "")}
                </span>
              ))}
            </div>
            <p>
              {book.summaries[0].replace(
                "(This is an automatically generated summary.)",
                ""
              )}
            </p>
            <div className={styles.additionalInfo}>
              <div className={styles.info}>
                <p className={styles.subtitle}>Download count</p>
                <p>{book.download_count}</p>
              </div>
              <div className={styles.info}>
                <p className={styles.subtitle}>Language</p>
                {book.languages.map((lang, i) => (
                  <p key={i}>{lang} </p>
                ))}
              </div>
            </div>
            <a
              className={styles.externalLink}
              href={book.formats["text/html"]}
              target="blank"
            >
              Read the book online <FiExternalLink />
            </a>
          </div>
          <button className={styles.goBackButton} onClick={onClose}>
            X
          </button>
        </div>
      )}
    </dialog>
  );
}
