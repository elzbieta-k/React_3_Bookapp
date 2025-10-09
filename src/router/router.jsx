import { createBrowserRouter } from "react-router-dom";

//Router components
import App from "../App.jsx";
import ToReadPage from "../pages/ToReadPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import BookDetailsPage from "../pages/BookDetailsPage.jsx";
import FinishedBooksPage from "../pages/FinishedBooksPage.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "search",
          element: <SearchPage />,
        },
        {
          path: "toread",
          element: <ToReadPage />,
        },
        {
          path: "finished",
          element: <FinishedBooksPage />,
        },
        {
          path: "book/:bookId",
          element: <BookDetailsPage />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

export default router;
