import { useNavigate, useLocation } from "react-router-dom";
import BookDetails from "../components/BookDetails.jsx";

export default function BookDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Save the previous route (to return there later), or default to homepage
  const from = location.state?.from || "/";

  // Get the selected book object passed via Link state
  const book = location.state?.book;
  console.log(book);

  return <BookDetails book={book} onGoBack={() => navigate(from)} />;
}
