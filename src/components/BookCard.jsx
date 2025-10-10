import { Link, useLocation } from "react-router-dom";
import styles from "../styles/BookCard.module.css";

export default function BookCard({ book }) {
  const location = useLocation()
  return (
    <article className={styles.bookCard}>
      <Link 
      className={styles.navLink} 
      to={`/book/${book.id}`} 
      state={{ book, from: `${location.pathname}${location.search}` }}>
        <img src={book.formats["image/jpeg"]} alt="" />
        <h3 className={styles.bookTitle} title={book.title}>
          {book.title}
        </h3>
        <p>
          by{" "}
          {book.authors && book.authors.length > 0
            ? book.authors.map((a) => a.name).join(", ")
            : "Unknown author"}
        </p>
      </Link>
    </article>
  );
}
