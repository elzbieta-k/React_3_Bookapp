import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`} state={{book}}>
      <p>{book.title}</p>
      <img src={book.formats["image/jpeg"]} alt="" />
      {/* <Link to={`/book/${book.id}`}>Go to book page</Link> */}
    </Link>
  );
}
