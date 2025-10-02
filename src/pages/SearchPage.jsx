import { useLocation } from "react-router-dom";
import BookListPage from "./BookListPage";

export default function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");


  return (
    <BookListPage
      fetchUrl={`https://gutendex.com/books/?search=${encodeURIComponent(
        query
      )}`}
    />
  );
}
