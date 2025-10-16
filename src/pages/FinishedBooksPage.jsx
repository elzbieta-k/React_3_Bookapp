import { useBooks } from "../context/BooksContext";
import BookCard from "../components/BookCard";
import DeleteButton from "../components/DeleteButton";
import styles from "../styles/ReadFinishedPage.module.css";

export default function FinishedBooksPage() {
  const { finished, deleteBook } = useBooks();

  return (
    <section className={styles.readFinishedListContainer}>
      <h2>Read & Rate</h2>
      <div className={styles.listContainer}>
        {finished.map((book) => (
          <div key={book.id} className={styles.bookContainer}>
            <BookCard book={book} />
            <span className={styles.ratingStars}>
              My review: {book.rating ? "⭐".repeat(book.rating) : "No rating"}
            </span>
            <DeleteButton  bookId={book.id} listName="finished" />
            {/* <button
              className={styles.deleteBtn}
              onClick={() => deleteBook(book.id, "finished")}
            >
              X
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
}
