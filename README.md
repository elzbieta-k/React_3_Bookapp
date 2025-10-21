# React_3_Bokapplikasjon - Bookify


A small React app to browse books, add them to a personal "To Read" shelf, rate them, and mark them as finished. State persists in localStorage.
<img width="1961" height="1225" alt="Bookify" src="https://github.com/user-attachments/assets/0472dcbc-3365-4b9f-943e-8c957bb5df80" />


## Features
- Browse and view book details
- Add books to a "To Read" shelf
- Per-book star rating (1–5)
- Mark books as finished (moves from To Read → Finished with saved rating)
- Delete books from either list
- Persistent data via localStorage
- Basic client-side routing with React Router

## Project structure
src/
- components/      — UI components (BookCard, BookDialog, Rating, DeleteButton, etc.)
- context/         — BooksContext (shelf, finished, ratings, handlers)
- hooks/           — useLocalStorage
- pages/           — HomePage, SearchPage, ToReadPage, FinishedBooksPage, BookDetailsPage
- router/          — app router
- styles/          — CSS modules
- App.jsx, index.jsx

## Prerequisites
- Node.js (recommended >= 18)
- npm (or pnpm/yarn)

## Install
```
npm install
```

## Run (dev)
```
npm start
```
Open http://localhost:3000

## Routes
- /           — Home (book lists)
- /search     — Search page
- /toread     — My Shelf (To Read)
- /finished   — Finished books

## Usage
- Click a book card to open the dialog with details.
- Click "Add to my shelf" to add to To Read.
- Select stars to rate a book; then click "Mark as finished" to move it to Finished with the rating saved.
- Use the delete button to remove items from either list.

## Important implementation notes / common fixes
- Ratings are stored per book as an object keyed by book ID (e.g. { [bookId]: rating }). Use a setter like `setBookRating(bookId, value)` in context and read `ratings[book.id] || 0` in the Rating component to avoid showing the last-chosen rating for other books.
- Ensure `handleFinish(book)` reads the per-book rating before moving a book to finished.
- To close a dialog when clicking outside, attach a ref to the dialog root and install a `mousedown` listener while the dialog is open. Check `if (!dialogRef.current.contains(e.target)) onClose()` to avoid closing when clicking inside.
- When mapping lists in pages, place `key={book.id}` on the outer container element and pass handlers (e.g. `onClick`) explicitly to the card component.

## Debugging tips
- If "Add to my shelf" does nothing, ensure the book object is present (e.g. via router `navigate('/book/ID', { state: { book } })`) or add a fallback that loads book data by id.
- If "Mark as finished" doesn't attach the rating, confirm the context exports `ratings` and `setBookRating` and that components use those names consistently.

## Testing
No automated tests included. To add tests, scaffold with Jest + React Testing Library and create tests for:
- BooksContext handlers
- Rating component behavior
- BookDialog open/close behavior

## Contributing
PRs welcome. Open an issue to discuss larger changes first.

## Acknowledgments
Kodehode/Jobloop for the Coding Bootcamp
React documentation for best practices
Vite team for the amazing build tool
