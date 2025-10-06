import BookList from "../components/BookList.jsx";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { topic } = useParams();
  console.log(topic);

  return (
    <BookList fetchUrl={`https://gutendex.com/books/?topic=${topic}`} title={`Category: ${topic}`}/>
  );
}
