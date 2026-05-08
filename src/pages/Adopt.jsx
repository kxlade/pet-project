import "./Pages.css";

const featuredPets = [
  {
    name: "Max",
    type: "Labrador mix",
    age: "2 years old",
    temperament: "Friendly, playful, loves morning walks",
  },
  {
    name: "Whiskers",
    type: "Siamese cat",
    age: "1 year old",
    temperament: "Curious, calm indoors, enjoys quiet spaces",
  },
  {
    name: "Luna",
    type: "Mixed breed puppy",
    age: "8 months old",
    temperament: "High energy, eager to train, child-friendly",
  },
];

const adoptionChecklist = [
  "Choose a pet whose energy level matches your schedule.",
  "Prepare a feeding area, bed, leash, litter setup, or crate before bringing them home.",
  "Ask about health records, current medication, and the pet's usual routine.",
  "Plan a calm first week so your new pet can settle without too many changes at once.",
];

const adoptionProcess = [
  "Browse profiles and shortlist pets you feel connected to.",
  "Speak with the shelter team to confirm lifestyle fit and care expectations.",
  "Submit an application and schedule a visit or meet-and-greet.",
  "Complete pickup and go home with care guidance, records, and transition tips.",
];

export default function Adopt({ onNavigate }) {
  return (
    <div className="page-screen adopt-page">
      <section className="page-hero">
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">Adopt a pet</p>
          <h1 className="page-hero__title">
            Find a companion whose needs, energy, and personality fit your home.
          </h1>
          <p className="page-hero__description">
            Adoption works best when it is thoughtful. Use this page to compare
            pets, understand the process, and get ready for a smoother first week
            together.
          </p>
        </div>

        <aside className="page-hero__summary-card">
          <h2 className="page-hero__summary-title">Before you apply</h2>
          <p className="page-hero__summary-text">
            Think about your daily schedule, budget, household rules, and the
            amount of training or exercise you can realistically provide.
          </p>
        </aside>
      </section>

      <section className="page-section">
        <div className="page-section__intro">
          <p className="page-section__eyebrow">Featured pets</p>
          <h2 className="page-section__title">A few loving animals looking for their next home.</h2>
        </div>

        <div className="adopt-pet-grid">
          {featuredPets.map((pet) => (
            <article key={pet.name} className="adopt-pet-card">
              <p className="adopt-pet-card__badge">Available now</p>
              <h3 className="adopt-pet-card__name">{pet.name}</h3>
              <p className="adopt-pet-card__type">{pet.type}</p>
              <p className="adopt-pet-card__age">{pet.age}</p>
              <p className="adopt-pet-card__temperament">{pet.temperament}</p>
              <button
                type="button"
                className="adopt-pet-card__button"
                onClick={() => onNavigate("contact")}
              >
                Ask about {pet.name}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section--muted">
        <div className="page-section__intro">
          <p className="page-section__eyebrow">Adoption checklist</p>
          <h2 className="page-section__title">What to prepare before a pet comes home.</h2>
        </div>

        <div className="adopt-checklist-grid">
          {adoptionChecklist.map((item) => (
            <article key={item} className="page-card">
              <p className="page-card__text">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__intro">
          <p className="page-section__eyebrow">Process overview</p>
          <h2 className="page-section__title">A simple path from browsing to bringing them home.</h2>
        </div>

        <div className="adopt-process-grid">
          {adoptionProcess.map((step, index) => (
            <article key={step} className="page-card">
              <p className="page-card__step-label">Step {index + 1}</p>
              <p className="page-card__text">{step}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
