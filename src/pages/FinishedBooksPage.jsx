import { useBooks } from "../context/BooksContext";
import BookCard from "../components/BookCard";

export default function FinishedBooksPage() {
  const { finished } = useBooks();

  return (
    <div>
      {finished.map((book) => (
        <div>
          <BookCard key={book.id} book={book} />
          <span>My review: {book.rating ? "⭐".repeat(book.rating) : "No rating"}</span>
        </div>
      ))}
    </div>
  );
}
