import BookListPage from "../components/BookList";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { topic } = useParams();
  console.log(topic);

  return (
    <BookListPage fetchUrl={`https://gutendex.com/books/?topic=${topic}`} />
  );
}
