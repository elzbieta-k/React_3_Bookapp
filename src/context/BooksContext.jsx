import { createContext, useContext, useState } from "react";
import { useLocaleStorage } from "../hooks/useLocalStorage";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [toRead, setToRead] = useLocaleStorage("toRead", []);
  const [finished, setFinished] = useLocaleStorage("finished", []);

  const addToRead = (book) => {
    setToRead((prev) => {
      //checks if a book already is added
      if (prev.some((b) => b.id === book.id)) return prev;
      return [...prev, book];
    });
  };

const markAsFinished = (book, rating) => {
    setToRead((prev) => prev.filter((b) => b.id !== book.id))
    setFinished((prev) => [...prev, {...book, rating}])
}

const deleteBook = (id) => {
setToRead(toRead.filter((book) => book.id !== id))
}

return (
    <BooksContext.Provider value={{toRead, finished, addToRead, markAsFinished, deleteBook}}>
        {children}
    </BooksContext.Provider>
)

};

export function useBooks() {
    return useContext(BooksContext)
}