import BookListPage from "./BookListPage";

export default function HomePage() {

    
    return (
        <BookListPage
          fetchUrl={"https://gutendex.com/books"}
        />
      );
}