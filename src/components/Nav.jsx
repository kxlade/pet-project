import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPaw } from "@fortawesome/free-solid-svg-icons";
import { faContactBook } from "@fortawesome/free-regular-svg-icons";

const navItems = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Adopt", page: "adopt" },
    { label: "Shelters", page: "shelters" },
    { label: "Stories", page: "stories" },
];

export default function Nav({ currentPage, onNavigate }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigationClick = (page) => {
        setIsMenuOpen(false);
        onNavigate(page);
    };

    return (
        <div className={`site-header ${isMenuOpen ? "menu-open" : ""}`} id="home">
            <nav className="nav-cont" aria-label="Primary">
                <button type="button" className="brand" onClick={() => handleNavigationClick("home")}>
                    <span className="brand-mark">
                        <FontAwesomeIcon icon={faPaw} />
                    </span>
                    <span className="brand-copy">
                        <strong className="brand-badge">PetHaven</strong>
                        <span>Adoption Center</span>
                    </span>
                </button>

                <button
                    type="button"
                    className="menu-toggle"
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className={`nav-links ${isMenuOpen ? "is-open" : ""}`}>
                    {navItems.map((item) => {
                        const isActive = currentPage === item.page;

                        return (
                            <button
                                key={item.page}
                                type="button"
                                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                                aria-current={isActive ? "page" : undefined}
                                onClick={() => handleNavigationClick(item.page)}
                            >
                                {item.label}
                            </button>
                        );
                    })}

                    <button
                        type="button"
                        className={`nav-cta ${currentPage === "contact" ? "nav-cta-active" : ""}`}
                        aria-current={currentPage === "contact" ? "page" : ""}
                        onClick={() => handleNavigationClick("contact")}
                    >
                        Contact Us <FontAwesomeIcon icon={faContactBook}/>
                    </button>
                </div>
            </nav>
            <button
                type="button"
                className={`nav-backdrop ${isMenuOpen ? "is-open" : ""}`}
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
            />
        </div>
    );
}
