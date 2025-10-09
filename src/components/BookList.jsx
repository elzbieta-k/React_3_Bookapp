import { useState, useEffect } from "react";
import styles from "../styles/BookList.module.css";
import BookSwiper from "./BookSwiper.jsx";

export default function BookList({ fetchUrl, title }) {
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

  return (
    <main>
      <div className={styles.bookListMain}>
        {loading ? (
          <span className={styles.loader}></span>
        ) : (
          <>
            <BookSwiper books={books} title={title} />
            <div className={styles.buttonsContainer}>
              <button
                className="button"
                disabled={!prevPage}
                onClick={() => setCurrentUrl(prevPage)}
              >
                Prev
              </button>
              <button
                className="button"
                disabled={!nextPage}
                onClick={() => setCurrentUrl(nextPage)}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
