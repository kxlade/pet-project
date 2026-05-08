import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const testimonials = [
  {
    name: "Amina & Kola",
    pet: "Adopted Milo",
    initials: "AK",
    quote:
      "The shelter notes helped us understand Milo's routine before we brought him home. The whole process felt calm and guided.",
  },
  {
    name: "Sandra",
    pet: "Adopted Pepper",
    initials: "SA",
    quote:
      "I loved how honest the team was about Pepper's personality. That made the match feel right from day one.",
  },
  {
    name: "The Adeyemis",
    pet: "Adopted Coco",
    initials: "TA",
    quote:
      "PetHaven made adoption feel possible for our family. We got practical support, not just a list of pets to browse.",
  },
];

export default function Reviews() {
  return (
    <section className="rev-cont">
      <div className="reviews-heading">
        <p className="reviews-kicker">What adopters say</p>
        <h2 className="reviews-title">Client Reviews</h2>
      </div>

      <div className="card-cont">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="card review-card">
            <div className="review-card-top">
              <div className="review-avatar">{testimonial.initials}</div>
              <div className="review-person-copy">
                <h3 className="review-name">{testimonial.name}</h3>
                <p className="job">{testimonial.pet}</p>
              </div>
            </div>

            <div className="review-stars" aria-label="Five star review">
              {Array.from({ length: 5 }).map((_, index) => (
                <FontAwesomeIcon
                  key={`${testimonial.name}-${index}`}
                  icon={faStar}
                  className="starr"
                />
              ))}
            </div>

            <p className="text">"{testimonial.quote}"</p>
          </article>
        ))}
      </div>
    </section>
  );
}
