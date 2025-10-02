import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { useBooks } from "../context/BooksContext.jsx";
import Rating from "../components/Rating.jsx";

export default function BookDetailsPage() {
  const { bookId } = useParams();
  const location = useLocation();
  const { addToRead, markAsFinished } = useBooks();
  const book = location.state?.book;
  console.log(book);

  const [rating, setRating] = useState(0);

  const handleFinish = () => {
    if (!book) return;
    markAsFinished(book, rating || 0);
  };

  return (
    <div>
      <p>Book details for book med id {bookId}</p>
      <p>{book.title}</p>
      <button onClick={() => addToRead(book)}>Add to read list</button>
      {/* <div>
        <label htmlFor="">
          Rate this book:
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            <option value={0}>Choose rating</option>
            <option value={1}>⭐</option>
            <option value={2}>⭐⭐</option>
            <option value={3}>⭐⭐⭐</option>
            <option value={4}>⭐⭐⭐⭐</option>
            <option value={5}>⭐⭐⭐⭐⭐</option>
          </select>
        </label>
        <button onClick={handleFinish}>Mark as finished</button>
      </div> */}
      <div>
        <div style={{ marginTop: "1rem" }}>
          <p>Rate this book:</p>
          <Rating value={rating} onChange={setRating} />
          <button onClick={handleFinish} disabled={rating === 0}>
            Mark as Finished
          </button>
        </div>
      </div>
    </div>
  );
}
