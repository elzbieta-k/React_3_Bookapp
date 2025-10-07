import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const categories = [
    "all",
    "fiction",
    "mystery",
    "thriller",
    "romance",
    "fantasy",
    "morality",
    "society",
    "power",
    "justice",
    "adventure",
    "tragedy",
    "war",
    "philosophy",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchValue.trim() && !categoryValue) return;

    const query = searchValue.trim()
      ? `q=${encodeURIComponent(searchValue)} `
      : "";
    const topic = categoryValue && categoryValue !== "all"
      ? `topic=${encodeURIComponent(categoryValue)} `
      : "";

    const queryString = [query, topic].filter(Boolean).join("&");
    {
      navigate(`/search?${queryString}`);
    }
    setSearchValue("");
  };

  return (
    <header className={styles.header}>
      <nav>
        <Link className={styles.navLink} to="/">
          Home
        </Link>
        <div className={styles.searchContainer}>
          {/* <div className={styles.dropdown}>
            <button className={styles.categoryButton}>Search by category ▾</button>
            <div className={styles.dropdownContent}>
              {categories.map((category) => (
                <Link className={styles.navLink} key={category} to={`/category/${category.toLowerCase()}`}>
                  {category}{" "}
                </Link>
              ))}
            </div>
          </div>
          <p>or</p> */}
          <form role="search" onSubmit={handleSearch}>
            {/* <label htmlFor="search-input">Search by author or title</label> */}
            <select
              value={categoryValue}
              onChange={(e) => setCategoryValue(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.toUpperCase()}
                </option>
              ))}
            </select>
            <input
              type="search"
              id="search-input"
              name="q"
              aria-label="Search"
              placeholder="Search by author or title"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="button" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className={styles.listsContainer}>
          <Link className={styles.navLink} to="/toread">
            To Read
          </Link>
          <Link className={styles.navLink} to="/finished">
            Finished
          </Link>
        </div>
      </nav>
    </header>
  );
}
