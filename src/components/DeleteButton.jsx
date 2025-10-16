import { useBooks } from "../context/BooksContext";
import styles from "../styles/DeleteButton.module.css";

export default function DeleteButton({ bookId, listName }) {
  const { deleteBook } = useBooks();
  return (
    <button
      className={styles.deleteBtn}
      onClick={() => deleteBook(bookId, listName)}
    >
      Delete
    </button>
  );
}
