import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-regular-svg-icons";
import "./Pages.css";

const shelterDirectory = [
    {
        name: "Greenfield Rescue Home",
        location: "Ikeja",
        specialty: "Dogs, puppies, and family-friendly matches",
        support: "Behaviour notes, starter vet guidance, leash training basics",
    },
    {
        name: "Whisker Haven Collective",
        location: "Yaba",
        specialty: "Cats, shy rescues, and indoor adoption support",
        support: "Litter routine coaching, nutrition notes, quiet-home matching",
    },
    {
        name: "Second Chance Animal Center",
        location: "Lekki",
        specialty: "Mixed rescues, senior pets, and gentle-temperament companions",
        support: "Medical history reviews, senior care tips, follow-up calls",
    },
];

const shelterBenefits = [
    "Partner shelters receive better visibility for pets that are ready to be rehomed.",
    "Adopters can compare support styles, specialties, and location before reaching out.",
    "Every listing focuses on practical fit, not just a quick emotional decision.",
];

export default function Shelters({ onNavigate }) {
    return (
        <div className="page-screen shelters-page">
            <section className="page-hero">
                <div className="page-hero__content">
                    <p className="page-hero__eyebrow">Shelter network</p>
                    <h1 className="page-hero__title">
                        Explore shelters that care for animals thoughtfully and prepare adopters well.
                    </h1>
                    <p className="page-hero__description">
                        Not every shelter works the same way. These partner teams focus on
                        honest pet assessments, responsible placement, and guidance that
                        continues after adoption day.
                    </p>
                </div>

                <aside className="page-hero__summary-card">
                    <h2 className="page-hero__summary-title">What to compare</h2>
                    <p className="page-hero__summary-text">
                        Check location, pet specialties, follow-up support, and whether the
                        shelter's adoption pace matches the kind of guidance you want.
                    </p>
                    <FontAwesomeIcon icon={faHospital} className="hospital-aside"/>
                </aside>
            </section>

            <section className="page-section">
                <div className="page-section__intro">
                    <p className="page-section__eyebrow">Partner shelters</p>
                    <h2 className="page-section__title">Rescue teams that adopters can start with confidently.</h2>
                </div>

                <div className="shelters-directory-grid">
                    {shelterDirectory.map((shelter) => (
                        <article key={shelter.name} className="shelter-card">
                            <p className="shelter-card__location">{shelter.location}</p>
                            <h3 className="shelter-card__name">{shelter.name}</h3>
                            <p className="shelter-card__specialty">{shelter.specialty}</p>
                            <p className="shelter-card__support">{shelter.support}</p>
                            <button
                                type="button"
                                className="shelter-card__button"
                                onClick={() => onNavigate("contact")}
                            >
                                Contact this shelter
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            <section className="page-section page-section--muted">
                <div className="page-section__intro">
                    <p className="page-section__eyebrow">Why shelter pages help</p>
                    <h2 className="page-section__title">The right shelter can shape the whole experience.</h2>
                </div>

                <div className="shelter-benefits-grid">
                    {shelterBenefits.map((benefit) => (
                        <article key={benefit} className="page-card">
                            <p className="page-card__text">{benefit}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
