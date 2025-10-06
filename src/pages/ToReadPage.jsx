import { useBooks } from "../context/BooksContext";
import BookCard from "../components/BookCard.jsx";
import styles from "../styles/ReadFinishedPage.module.css"

export default function ToReadPage() {
  const { toRead, deleteBook } = useBooks();

  return (
    <div className={styles.listContainer}>
      {toRead.map((book) => (
        <div className={styles.bookContainer}>
          <BookCard key={book.id} book={book} />
          <button className="button" onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
