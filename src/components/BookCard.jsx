import { Link } from "react-router-dom";
import styles from "../styles/BookCard.module.css";

export default function BookCard({ book }) {
  return (
    <article className={styles.bookCard}>
      <Link className={styles.navLink} to={`/book/${book.id}`} state={{ book }}>
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
