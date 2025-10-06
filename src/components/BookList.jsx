import { useState, useEffect } from "react";
import BookCard from "./BookCard.jsx";
import styles from "../styles/BookListPage.module.css";

export default function BookListPage({ fetchUrl }) {
  const [books, setBooks] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentUrl, setCurrentUrl] = useState(fetchUrl);

  useEffect(() => {
    setCurrentUrl(fetchUrl);
  }, [fetchUrl]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(currentUrl);
        if (!response.ok) {
          throw new Error(`Error. Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API response:", result);
        setNextPage(result.next);
        setPrevPage(result.previous);
        console.log("Next:", nextPage);
        console.log("Prev:", prevPage);

        setBooks(result.results || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentUrl]);

  // if (loading) return <p>loading</p>;
  return (
    <main className={styles.bookListMain}>
      <div>
        {loading && (
          <img
            src={`${import.meta.env.BASE_URL}vite.svg`}
            alt="Loading image"
          />
        )}
        <div className={styles.bookCardContainer}>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
      <div>
        <button disabled={!prevPage} onClick={() => setCurrentUrl(prevPage)}>
          Prev
        </button>
        <button disabled={!nextPage} onClick={() => setCurrentUrl(nextPage)}>
          Next
        </button>
      </div>
    </main>
  );
}
