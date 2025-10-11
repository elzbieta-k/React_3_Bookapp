import { useNavigate, useLocation } from "react-router-dom";
import BookDetails from "../components/BookDetails.jsx";


export default function BookDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from || "/";
  const book = location.state?.book;
  console.log(book);

  return <BookDetails book={book} onGoBack={() => navigate(from)} />;
}
