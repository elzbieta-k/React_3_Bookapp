import styles from "../styles/BookCard.module.css";


export default function BookCard({ book, onClick }) {

  return (
    <article className={styles.bookCard} onClick={() => onClick(book)}>
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
    </article>
  );
}
