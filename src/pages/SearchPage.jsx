import { useLocation } from "react-router-dom";
import BookList from "../components/BookList.jsx";

export default function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  return (
    <BookList
      fetchUrl={`https://gutendex.com/books/?search=${encodeURIComponent(
        query
      )}`}
      title={`Search results for: ${query}`}
    />
  );
}
