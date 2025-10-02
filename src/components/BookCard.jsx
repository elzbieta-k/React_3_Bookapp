import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <>
      <Link to={`/book/${book.id}`} state={{ book }}>
        <img src={book.formats["image/jpeg"]} alt="" />
        <p>{book.title}</p>
        <p>
          by{" "}
          {book.authors && book.authors.length > 0
            ? book.authors.map((a) => a.name).join(", ")
            : "Unknown author"}
        </p>
      </Link>
    </>
  );
}
