import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faDog,
  faNotesMedical,
  faHouseCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./Sections.css";

const supportHighlights = [
  {
    icon: faPeopleGroup,
    title: "Trusted adoption guidance",
    description:
      "Friendly coordinators walk you through pet matching, applications, and home-readiness questions.",
  },
  {
    icon: faDog,
    title: "Personality-based matching",
    description:
      "Each pet profile explains energy level, temperament, and the type of home they thrive in.",
  },
  {
    icon: faNotesMedical,
    title: "Clear health information",
    description:
      "Vaccination records, medical notes, and feeding routines are shared before adoption is finalized.",
  },
  {
    icon: faHouseCircleCheck,
    title: "Smooth transition home",
    description:
      "We provide settling-in tips, first-week checklists, and follow-up support after adoption day.",
  },
];

export default function Sections() {
  return (
    <section className="sect-wrapper">
      <div className="sect-heading">
        <p className="sect-kicker">Why families trust PetHaven</p>
        <h2 className="sect-title">
          Comfort, care, and people who help you feel ready.
        </h2>
      </div>

      <div className="sect-cont">
        {supportHighlights.map((highlight) => (
          <article
            key={highlight.title}
            className={`support-card ${highlight.title === "Trusted adoption guidance" ? "cont-1" : ""}
              ${highlight.title === "Personality-based matching" ? "cont-2" : ""}
              ${highlight.title === "Clear health information" ? "cont-3" : ""}
              ${highlight.title === "Smooth transition home" ? "cont-4" : ""}`}
          >
            <div className="support-card-icon-box">
              <FontAwesomeIcon icon={highlight.icon} className="fontAwe" />
            </div>
            <h3 className="support-card-title">{highlight.title}</h3>
            <p className="support-card-text">{highlight.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
