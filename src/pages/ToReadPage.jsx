import { useBooks } from "../context/BooksContext";
import BookCard from "../components/BookCard.jsx";
import DeleteButton from "../components/DeleteButton.jsx";
import styles from "../styles/ReadFinishedPage.module.css";
import BookDialog from "../components/BookDialog.jsx";

export default function ToReadPage() {
  const { toRead, selectedBook, handleBookClick, handleCloseDialog } = useBooks();


  return (
    <section className={styles.readFinishedListContainer}>
      <h2>My Shelf</h2>
      <div className={styles.listContainer}>
        {toRead.map((book) => (
          <div key={book.id} className={styles.bookContainer}>
            <BookCard book={book} onClick={() => handleBookClick(book)} />
            <DeleteButton bookId={book.id} listName="toRead" />
          </div>
        ))}
      </div>
      <BookDialog book={selectedBook} onClose={handleCloseDialog} />
    </section>
  );
}
