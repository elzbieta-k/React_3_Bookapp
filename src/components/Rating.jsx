import { useState } from "react";
import { useBooks } from "../context/BooksContext";
import styles from "../styles/Rating.module.css";

export default function Rating({ value = 0, onChange, book }) {
  const [hover, setHover] = useState(null);
  const { handleFinish } = useBooks();

  return (
    <div className={styles.ratingContainer}>
      <p>Rate this book:</p>
      <div className={styles.ratingStars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => onChange(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
            style={{
              fontSize: "1.5rem",
              color: star <= (hover || value) ? "gold" : "lightgray",
            }}
          >
            ★
          </span>
        ))}
      </div>
      <button
        className={styles.addButton}
        onClick={() => handleFinish(book)}
        disabled={value === 0}
      >
        Mark as Finished
      </button>
    </div>
  );
}
