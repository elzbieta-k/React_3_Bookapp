# React_3_Bokapplikasjon

A simple React book application that lets users browse books, add them to their shelf, rate them, and mark them as finished.
<img width="1920" height="907" alt="screencapture-localhost-5173-React-3-Bookapp-2025-10-11-10_52_21 (1)" src="https://github.com/user-attachments/assets/0b538dfd-41dd-482c-b22c-e68726d269d1" />

## Features

- Browse book details
- Add books to your "To Read" shelf
- Rate books with stars
- Mark books as finished
- Remove books from either shelf
- Persistent state using local storage

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/React_3_Bokapplikasjon.git
   cd React_3_Bokapplikasjon
   ```

2. Install dependencies:

   ```
   npm install
   ```

### Running the App

Start the development server:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  components/      # Reusable UI components (BookDetails, Rating, etc.)
  context/         # React context for managing books and ratings
  hooks/           # Custom hooks (e.g., useLocalStorage)
  pages/           # Application pages (BookDetailsPage, etc.)
  styles/          # CSS modules for styling
  App.jsx          # Main app component
  index.js         # Entry point
```

## Usage

- Click on a book to view details.
- Use "Add to my shelf" to add a book to your reading list.
- Rate a book using the star rating component.
- Mark a book as finished once you've rated it.
- Remove books from your shelf or finished list.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgments
Kodehode/Jobloop for the Coding Bootcamp
React documentation for best practices
Vite team for the amazing build tool
