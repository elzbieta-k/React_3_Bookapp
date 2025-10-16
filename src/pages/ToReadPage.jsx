import { useBooks } from "../context/BooksContext";
import BookCard from "../components/BookCard.jsx";
import DeleteButton from "../components/DeleteButton.jsx";
import styles from "../styles/ReadFinishedPage.module.css";

export default function ToReadPage() {
  const { toRead, deleteBook } = useBooks();

  return (
    <section className={styles.readFinishedListContainer}>
      <h2>My Shelf</h2>
      <div className={styles.listContainer}>
        {toRead.map((book) => (
          <div className={styles.bookContainer}>
            <BookCard key={book.id} book={book} />
            {/* <button
              className={styles.deleteBtn}
              onClick={() => deleteBook(book.id, "toRead")}
            >
              X
            </button> */}
            <DeleteButton  bookId={book.id} listName="toRead" />
          </div>
        ))}
      </div>
    </section>
  );
}
