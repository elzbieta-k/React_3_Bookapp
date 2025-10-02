import { createBrowserRouter } from "react-router-dom";

//Router components
import App from "../App.jsx";
import BookListPage from "../pages/BookListPage.jsx";
import ToReadPage from "../pages/ToReadPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import BookDetailsPage from "../pages/BookDetailsPage.jsx";
import FinishedBooksPage from "../pages/FinishedBooksPage.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import CategoryPage from "../pages/CategoryPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>error</p>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/category/:topic",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/toread",
        element: <ToReadPage />,
      },
      {
        path: "/finished",
        element: <FinishedBooksPage />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 page not found</p>,
  },
  { basename: "/React_3_Bookapp" },
]);

export default router;
