import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

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
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <div className="dropdown">
          <button>Browse ▾</button>
          <div className="dropdown-content">
            {categories.map((category) => (
              <Link to={`/category/${category.toLowerCase()}`}>
                {category}{" "}
              </Link>
            ))}
          </div>
        </div>
        <NavLink to="/toread">To Read</NavLink>
        <NavLink to="/finished">Finished</NavLink>
      </nav>
      <form role="search" onSubmit={handleSearch}>
        <label htmlFor="search-input">Search for books</label>
        <input
          type="search"
          id="search-input"
          name="q"
          aria-label="Search"
          placeholder="Search for books..."
          required
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
