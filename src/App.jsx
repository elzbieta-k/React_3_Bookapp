import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";
import { BooksProvider } from "./context/BooksContext.jsx";
import "./App.css";

function App() {
  return (
    <BooksProvider>
      <Header />
      <Outlet />
    </BooksProvider>
  );
}

export default App;
