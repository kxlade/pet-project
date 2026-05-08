import "./Header.css";
export default function Header({ onNavigate }) {
    return (
        <header className="header_cont">
            <main className="hero">
                <div className="hero-copy">
                    <p className="hero-kicker">Find your next best friend</p>
                    <h1 className="hero-head">Give rescued pets a safe home and a fresh start.</h1>
                    <p className="hero-text">
                        Browse loving companions, learn their stories, and connect with
                        nearby shelters that are ready to help you adopt with confidence.
                    </p>

                    <div className="hero-actions">
                        <button
                            type="button"
                            className="primary-link"
                            onClick={() => onNavigate("adopt")}
                        >
                            View Pets
                        </button>
                        <button
                            type="button"
                            className="secondary-link"
                            onClick={() => onNavigate("shelters")}
                        >
                            Find Shelters
                        </button>
                    </div>

                    <div className="hero-highlights">
                        <span className="hero-highlight-pill">Trusted shelters</span>
                        <span className="hero-highlight-pill">Friendly adoption support</span>
                        <span className="hero-highlight-pill">Helpful pet information</span>
                    </div>
                </div>
            </main>
        </header>
    );
}
