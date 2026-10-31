import { faHospital } from "@fortawesome/free-regular-svg-icons";
import "./Pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const organizationValues = [
    {
        title: "Respect for every pet",
        description:
            "We document temperament, habits, and medical history carefully so every animal is represented honestly.",
    },
    {
        title: "Prepared adopters",
        description:
            "Families get realistic guidance on time, cost, routines, and the right home environment before they commit.",
    },
    {
        title: "Shelter collaboration",
        description:
            "We work with rescue teams that value welfare, transparency, and consistent follow-up after placement.",
    },
];

const adoptionSteps = [
    "Browse pets or shelters and shortlist the profiles that fit your home and lifestyle.",
    "Talk with our adoption team to ask questions about age, energy level, medical needs, and routines.",
    "Complete the application and schedule a meet-and-greet before final approval.",
    "Bring your pet home with a transition checklist, starter guidance, and support contacts.",
];

const aboutStory = [{
    head: "Why this work matters",
    paragraph: "Many adopters want to do the right thing but need better guidance. Many shelters have wonderful pets but limited time to explain each one in depth. PetHaven helps bridge that gap.",
},
{
    head: "How we support families",
    paragraph: "We simplify the search process, highlight what each pet needs, and share home-prep advice so adopters know what to expect from day one."
}
]

export default function About() {
    return (
        <div className="page-screen about-page">
            <section className="page-hero">
                <div className="page-hero__content">
                    <p className="page-hero__eyebrow">About PetHaven</p>
                    <h1 className="page-hero__title">
                        We make pet adoption feel clear, humane, and easier to trust.
                    </h1>
                    <p className="page-hero__description">
                        PetHaven exists to reduce the confusion that often surrounds
                        adoption. We organize the information adopters care about most and
                        keep the focus on safe matches for pets and families alike.
                    </p>
                </div>

                <aside className="page-hero__summary-card">
                    <h2 className="page-hero__summary-title">What matters to us</h2>
                    <p className="page-hero__summary-text">
                        Honest pet profiles, supportive shelter partnerships, and adoption
                        journeys that help people feel ready instead of rushed.
                    </p>
                    <FontAwesomeIcon icon={faHospital} className="hospital-aside" />
                </aside>
            </section>

            <section className="page-section">
                <div className="page-section__intro">
                    <p className="page-section__eyebrow">Our mission</p>
                    <h2 className="page-section__title">Helping rescued animals reach steady homes.</h2>
                </div>

                <div className="about-story-grid">
                    {aboutStory.map((about) => (
                        <details key={about.head} className="page-card">
                            <summary key={about.head} className="page-card__title">
                                {about.head}
                            </summary>
                            <p key={about.paragraph} className="page-card__text">{about.paragraph}</p>
                        </details>
                    ))}
                </div>
            </section>

            <section className="page-section page-section--muted">
                <div className="page-section__intro">
                    <p className="page-section__eyebrow">Core values</p>
                    <h2 className="page-section__title">The standards behind every match.</h2>
                </div>

                <div className="about-values-grid">
                    {organizationValues.map((value) => (
                        <details key={value.title} className="page-card">
                            <summary className="page-card__title">{value.title}</summary>
                            <p className="page-card__text">{value.description}</p>
                        </details>
                    ))}
                </div>
            </section>

            <div className="page-section">
                <summary className="page-section__intro">
                    <p className="page-section__eyebrow">How it works</p>
                    <h2 className="page-section__title">A simple adoption flow with fewer surprises.</h2>
                </summary>

                <details>
                    <summary className="see-more">See more <FontAwesomeIcon icon={faArrowDown} className="about_arrow"/></summary>
                    <ol className="about-process-list">
                        {adoptionSteps.map((step) => (
                            <li key={step} className="about-process-list__item">
                                {step}
                            </li>
                        ))}
                    </ol>
                </details>
            </div>
        </div>
    );
}
