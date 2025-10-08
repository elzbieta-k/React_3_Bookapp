import { useLocation } from "react-router-dom";
import BookList from "../components/BookList.jsx";

export default function SearchPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const topic = new URLSearchParams(location.search).get("topic");
  console.log(query, topic);
  let apiUrl = "https://gutendex.com/books";

  if (query && query.trim() !== "") {
    apiUrl += `?search=${query}`;
  }

  if (topic && topic !== "" && topic !== "all") {
    apiUrl += query ? `&topic=${topic}` : `?topic=${topic}`;
  }

  return (
    <BookList
      fetchUrl={apiUrl}
      title={`Search results for: ${
        topic === null ? "all categories" : topic
      } ${query === null ? "" : "- " + query}`}
    />
  );
}
