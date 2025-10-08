import { createContext, useContext, useState } from "react";
import { useLocaleStorage } from "../hooks/useLocalStorage";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [toRead, setToRead] = useLocaleStorage("toRead", []);
  const [finished, setFinished] = useLocaleStorage("finished", []);
  const [rating, setRating] = useState({});

  const addToRead = (book) => {
    setToRead((prev) => {
      //checks if a book already is added
      if (prev.some((b) => b.id === book.id)) return prev;
      return [...prev, book];
    });
  };

  const markAsFinished = (book, rating) => {
    setToRead((prev) => prev.filter((b) => b.id !== book.id));
    setFinished((prev) => {
      if (prev.some((b) => b.id === book.id)) return prev;
      return [...prev, { ...book, rating }];
    });
  };

  const deleteBook = (id, list = "toRead") => {
    if (list === "toRead") {
      setToRead(toRead.filter((book) => book.id !== id));
    } else if (list === "finished") {
      setFinished(finished.filter((book) => book.id !== id));
    }
  };

  const setBookRating = (bookId, value) => {
    setRating((prev) => ({ ...prev, [bookId]: value }));
  };

  const handleFinish = (book) => {
    if (!book) return;
    const bookRating = rating[book.id] || 0;
    markAsFinished(book, bookRating);
  };

  return (
    <BooksContext.Provider
      value={{
        toRead,
        finished,
        rating,
        setRating,
        addToRead,
        setBookRating,
        markAsFinished,
        deleteBook,
        handleFinish,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export function useBooks() {
  return useContext(BooksContext);
}
