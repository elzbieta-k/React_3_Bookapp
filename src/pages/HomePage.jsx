import BookList from "../components/BookList.jsx";

export default function HomePage() {
  return (
    <BookList
      fetchUrl={"https://gutendex.com/books"}
      title="Popular books"
    />
  );
}
