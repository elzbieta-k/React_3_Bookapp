import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { useBooks } from "../context/BooksContext.jsx";
import Rating from "../components/Rating.jsx";
import styles from "../styles/BookDetailsPage.module.css";

export default function BookDetailsPage() {
  const { bookId } = useParams();
  const location = useLocation();
  const { addToRead, markAsFinished } = useBooks();
  const book = location.state?.book;
  console.log(book);

  const [rating, setRating] = useState(0);

  const handleFinish = () => {
    if (!book) return;
    markAsFinished(book, rating || 0);
  };

  return (
    <div className={styles.bookContainer}>
      <div className={styles.leftSide}>
        <img src={book.formats["image/jpeg"]} alt="Book cover" />
        <button className="button" onClick={() => addToRead(book)}>Add to read list</button>
        <div style={{ marginTop: "1rem" }}>
          <p>Rate this book:</p>
          <Rating value={rating} onChange={setRating} />
          <button className="button" onClick={handleFinish} disabled={rating === 0}>
            Mark as Finished
          </button>
        </div>
      </div>
      <div className={styles.rightSide}>
        <h2>{book.title || "No title"}</h2>
        <p>
          by{" "}
          {book.authors && book.authors.length > 0
            ? book.authors.map((a) => a.name).join(", ")
            : "Unknown author"}
        </p>
        <h4>Category:</h4>
        <div className={styles.categoryContainer}>
          {book.bookshelves.map((i) => (
            <span key={i}className={styles.categorySpan}>
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
        <p>Downloaded: {book.download_count} times</p>
        <p>
          Language:{" "}
          {book.languages.map((lang, i) => (
            <span key={i}>{lang} </span>
          ))}
        </p>

        <a href={book.formats["text/html"]} target="blank">
          Read the book online:{" "}
        </a>
      </div>
    </div>
  );
}
