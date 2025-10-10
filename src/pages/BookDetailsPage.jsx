import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useBooks } from "../context/BooksContext.jsx";
import Rating from "../components/Rating.jsx";
import styles from "../styles/BookDetailsPage.module.css";
import { FiExternalLink } from "react-icons/fi";

export default function BookDetailsPage() {
  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from || "/"

  const { addToRead, rating, setBookRating } = useBooks();

  const book = location.state?.book;
  console.log(book);

  return (
    <div className={styles.bookContainer}>
      <div className={styles.leftSide}>
        <img src={book.formats["image/jpeg"]} alt="Book cover" />
        <button className={styles.addButton} onClick={() => addToRead(book)}>
          Add to my shelf
        </button>

        <Rating value={rating[book.id] || 0} onChange={(val) => setBookRating(book.id, val)} book={book}/>
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
      <button className={styles.goBackButton}onClick={() => navigate(from)}>Back to list</button>
    </div>
  );
}
