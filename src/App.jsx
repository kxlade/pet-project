import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Sections from "./components/Sections";
import Reviews from "./components/Reviews";
import Footers from "./components/Footer";
import About from "./pages/About";
import Adopt from "./pages/Adopt";
import Shelters from "./pages/Shelters";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";

function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <Header onNavigate={onNavigate} />
      <Sections />
      <Reviews />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleNavigate = (pageName) => {
    setCurrentPage(pageName);
  };

  const pageByName = {
    home: <HomePage onNavigate={handleNavigate} />,
    about: <About />,
    adopt: <Adopt onNavigate={handleNavigate} />,
    shelters: <Shelters onNavigate={handleNavigate} />,
    stories: <Stories />,
    contact: <Contact />,
  };

  return (
    <div className="app-shell">
      <Nav currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="app-main">
        {pageByName[currentPage] ?? <HomePage onNavigate={handleNavigate} />}
      </main>
      <Footers currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  );
}
