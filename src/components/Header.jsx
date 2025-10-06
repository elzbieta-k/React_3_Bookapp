import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const categories = [
    "Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Fantasy",
    "Morality",
    "Society",
    "Power",
    "Justice",
    "Adventure",
    "Tragedy",
    "War",
    "Philosophy",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <header className={styles.header}>
      <nav>
        <Link className={styles.navLink} to="/">Home</Link>
        <div className={styles.searchContainer}>
          <div className={styles.dropdown}>
            <button className={styles.categoryButton}>Search by category ▾</button>
            <div className={styles.dropdownContent}>
              {categories.map((category) => (
                <Link className={styles.navLink} key={category} to={`/category/${category.toLowerCase()}`}>
                  {category}{" "}
                </Link>
              ))}
            </div>
          </div>
          <p>or</p>
          <form role="search" onSubmit={handleSearch}>
            {/* <label htmlFor="search-input">Search by author or title</label> */}
            <input
              type="search"
              id="search-input"
              name="q"
              aria-label="Search"
              placeholder="Search by author or title"
              required
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="button" type="submit">Search</button>
          </form>
          
        </div>
        <div className={styles.listsContainer}>
          <Link className={styles.navLink} to="/toread">To Read</Link>
          <Link className={styles.navLink} to="/finished">Finished</Link>
        </div>
      </nav>
    </header>
  );
}
