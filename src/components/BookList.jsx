import { useState, useEffect } from "react";
import styles from "../styles/BookList.module.css";
import BookSwiper from "./BookSwiper.jsx";

export default function BookList({ fetchUrl, title }) {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentUrl, setCurrentUrl] = useState(fetchUrl);
  const [count, setCount] = useState(null);

  const limit = 32;
  let start = (page - 1) * limit + 1;
  const end = count ? Math.min(start + books.length -1, count) : start + books.length - 1;

  useEffect(() => {
    setCurrentUrl(fetchUrl);
    setPage(1);
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
        // console.log("API response:", result);
        setNextPage(result.next);
        setPrevPage(result.previous);
        setCount(result.count);
        // console.log("Next:", nextPage);
        // console.log("Prev:", prevPage);

        setBooks(result.results || []);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentUrl]);

  const handleNextPage = () => {
    setCurrentUrl(nextPage);
    setPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    setCurrentUrl(prevPage);
    setPage((prev) => prev - 1);
  };
  return (
    <main>
      <div className={styles.bookListMain}>
        {error && <p>Error: {error}</p>}
        {loading ? (
          <span className={styles.loader}></span>
        ) : (
          <>
            <BookSwiper books={books} title={title} />
            <p>
              Showing {start}-{end} {count ? `of ${count} books` : ""}
            </p>
            <div className={styles.buttonsContainer}>
              <button
                className="button"
                disabled={!prevPage}
                onClick={handlePrevPage}
                title={prevPage ? `Show ${start - limit}-${start - 1}` : ""}
              >
                Prev
              </button>
              <button
                className="button"
                disabled={!nextPage}
                onClick={handleNextPage}
                title={nextPage ? `Show ${end + 1}-${Math.min(end + limit, count)}` : ""}
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
