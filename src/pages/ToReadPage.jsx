import { useBooks } from "../context/BooksContext";
import BookCard from "../components/BookCard";

export default function ToReadPage() {
  const { toRead, deleteBook } = useBooks();

  return (
    <div>
      {toRead.map((book) => (
        <div>
        <BookCard key={book.id} book={book} />
        <button onClick={()=>deleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
