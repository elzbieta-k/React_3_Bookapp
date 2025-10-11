import { useNavigate } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css"
export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.errorContainer}>
      <h1>📚 Oops! Page not found</h1>
      <p>
        Looks like this page got lost in the library stacks. Let’s get you back
        to the bookshelf!
      </p>
      <button onClick={() => navigate("/")} className={styles.homeButton}>
        Go back home
      </button>
    </div>
  );
}
