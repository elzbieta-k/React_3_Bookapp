import { useBooks } from "../context/BooksContext";
import BookCard from "../components/BookCard";
import DeleteButton from "../components/DeleteButton";
import styles from "../styles/ReadFinishedPage.module.css";
import BookDialog from "../components/BookDialog";

export default function FinishedBooksPage() {
  const {
    finished,
    selectedBook,
    handleBookClick,
    handleCloseDialog,
  } = useBooks();

  return (
    <section className={styles.readFinishedListContainer}>
      <h2>Read & Rate</h2>
      <div className={styles.listContainer}>
        {finished.map((book) => (
          <div key={book.id} className={styles.bookContainer}>
            <BookCard book={book} onClick={handleBookClick}/>
            <span className={styles.ratingStars}>
              My review: {book.rating ? "⭐".repeat(book.rating) : "No rating"}
            </span>
            <DeleteButton bookId={book.id} listName="finished" />
          </div>
        ))}
      </div>
      <BookDialog book={selectedBook} onClose={handleCloseDialog} />
    </section>
  );
}
