import BookListPage from "../components/BookList";

export default function HomePage() {
  return <BookListPage fetchUrl={"https://gutendex.com/books"} />;
}
