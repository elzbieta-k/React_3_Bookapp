import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/Header.module.css";
import { GiBookshelf } from "react-icons/gi";

export default function Header() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const categories = [
    { name: "All categories", value: "all" },
    { name: "Fiction", value: "fiction" },
    { name: "Mystery", value: "mystery" },
    { name: "Thriller", value: "thriller" },
    { name: "Romance", value: "romance" },
    { name: "Fantasy", value: "fantasy" },
    { name: "Morality", value: "morality" },
    { name: "Society", value: "society" },
    { name: "Power", value: "power" },
    { name: "Justice", value: "justice" },
    { name: "Adventure", value: "adventure" },
    { name: "Tragedy", value: "tragedy" },
    { name: "War", value: "war" },
    { name: "Philosophy", value: "philosophy" },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchValue.trim() && !categoryValue) return;

    const query = searchValue.trim()
      ? `q=${encodeURIComponent(searchValue)} `
      : "";
    const topic =
      categoryValue && categoryValue !== "all"
        ? `topic=${encodeURIComponent(categoryValue)} `
        : "";

    const queryString = [query, topic].filter(Boolean).join("&");
    {
      navigate(`/search?${queryString}`);
    }
    setSearchValue("");
    setCategoryValue("all");
  };

  return (
    <header className={styles.header}>
      <nav>
        <Link className={styles.bookifyLogo} to="/">
          <GiBookshelf className={styles.bookIcon} /> Bookify
        </Link>

        <form role="search" onSubmit={handleSearch}>
          <select
            className={styles.categoryButton}
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.name}
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
          <button className={styles.searchButton} type="submit">
            Search
          </button>
        </form>

        <div className={styles.listsContainer}>
          <Link className={styles.navLink} to="/toread">
            My shelf
          </Link>
          <Link className={styles.navLink} to="/finished">
            Read & Rated
          </Link>
        </div>
      </nav>
    </header>
  );
}
