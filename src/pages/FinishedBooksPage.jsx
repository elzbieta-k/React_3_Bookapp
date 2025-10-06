import { useBooks } from "../context/BooksContext";
import BookCard from "../components/BookCard";
import styles from "../styles/ReadFinishedPage.module.css";

export default function FinishedBooksPage() {
  const { finished } = useBooks();

  return (
    <div className={styles.listContainer}>
      {finished.map((book) => (
        <div className={styles.bookContainer}>
          <BookCard key={book.id} book={book} />
          <span>
            My review: {book.rating ? "⭐".repeat(book.rating) : "No rating"}
          </span>
        </div>
      ))}
    </div>
  );
}
