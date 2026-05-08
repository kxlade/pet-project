import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pages.css";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const successStories = [
  {
    title: "Milo found a home that matched his energy",
    summary:
      "A busy young couple wanted a playful dog but needed help finding one that could also settle indoors. Milo was the perfect fit after a guided meet-and-greet.",
    lesson: "Good matches happen when personality is explained clearly, not rushed.",
  },
  {
    title: "Pepper adjusted well because her routine stayed familiar",
    summary:
      "Pepper's adopter kept the same feeding times, toy setup, and quiet corner the shelter recommended. That small consistency made the first week easier.",
    lesson: "Transition details matter just as much as the adoption paperwork.",
  },
  {
    title: "Coco gave one family the confidence to adopt again",
    summary:
      "After a difficult pet-loss experience, a family used PetHaven's notes and support calls to feel emotionally ready before welcoming Coco home.",
    lesson: "Thoughtful guidance helps adopters feel safe enough to try again.",
  },
];

export default function Stories() {
  return (
    <div className="page-screen stories-page">
      <section className="page-hero">
        <div className="page-hero__content">
          <p className="page-hero__eyebrow">Adoption stories</p>
          <h1 className="page-hero__title">
            Real stories that show how good support changes the adoption journey.
          </h1>
          <p className="page-hero__description">
            Every successful match is more than a happy photo. These stories show
            what preparation, honesty, and patient support can make possible.
          </p>
        </div>

        <aside className="page-hero__summary-card">
          <h2 className="page-hero__summary-title">What these stories teach</h2>
          <p className="page-hero__summary-text">
            Matching by lifestyle, respecting a pet's routine, and supporting the
            adopter after pickup can make the transition far smoother.
          </p>
        <FontAwesomeIcon icon={faBookOpen} className="hospital-aside"/>
        </aside>
      </section>

      

      <section className="page-section">
        <div className="page-section__intro">
          <p className="page-section__eyebrow">Featured stories</p>
          <h2 className="page-section__title">Moments that made adoption feel lasting and real.</h2>
        </div>

        <div className="stories-grid">
          {successStories.map((story) => (
            <article key={story.title} className="story-card">
              <p className="story-card__tag">Success story</p>
              <h3 className="story-card__title">{story.title}</h3>
              <p className="story-card__summary">{story.summary}</p>
              <p className="story-card__lesson">{story.lesson}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
