import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faContactBook } from "@fortawesome/free-regular-svg-icons";
import "./Pages.css";
import { faArrowDown, faPhone, faQuestion } from "@fortawesome/free-solid-svg-icons";

const contactOptions = [
    {
        title: "General enquiries",
        icon: faQuestion,
        details: "hello@pethaven.org",
    },
    {
        title: "Adoption support line",
        icon: faPhone,
        motion: `shake`,
        details: "+234 800 123 4567",
    },
    {
        title: "Visit hours",
        icon: faClock,
        details: "Monday to Sunday, 9:00 AM - 6:00 PM",
    },
];

const faqs = [
    {
        question: "What should I prepare before applying to adopt?",
        answer:
            "Have your basic home details ready, think through your daily routine, and decide what kind of pet energy level fits your lifestyle. It also helps to list any other pets in your home and the timeline in which you hope to adopt.",
    },
    {
        question: "How do I know if a shelter is the right fit for me?",
        answer:
            "Look for clear medical history, transparent adoption steps, and staff who can explain a pet's temperament honestly. A good shelter should also tell you what support they offer after adoption, such as check-ins or behavior guidance.",
    },
    {
        question: "Can I contact you even if I am still comparing options?",
        answer:
            "Yes. You do not need to be ready to adopt immediately. We can help you compare breeds, understand shelter processes, and narrow down the kind of pet or support that makes the most sense for your home.",
    },
];

const faq_contd = [
    {
        question: "Do I need to be ready to adopt a pet immediately?",
        answer: "Not at all. We understand that finding the right pet is a significant decision. You can reach out to us at any stage, whether you are just comparing breeds, trying to understand the shelter process, or looking for advice on what fits your lifestyle. We are here to guide you through every step, from initial research to final adoption."
    },
    {
        question: "What if I have a question that is not listed here?",
        answer:
            "Feel free to reach out through any of the contact options listed above. Our team is here to help you with any questions or concerns you may have about adopting a pet or working with shelters.",
    },
    {
        question: "What if I want to volunteer or partner with shelters instead of adopting?",
        answer: "We welcome volunteers and partners who share our mission of helping pets find loving homes. You can reach out to us to learn more about volunteer opportunities or partnership programs."
    },
]

const faqs2 = [
    {
        question: "How do I know which pet is the right fit for my home?",
        answer: "The right fit depends on your lifestyle and living situation. When you contact us, our team will help you compare different breeds and temperaments. We look for transparency in a pet's medical history and honest assessments of their behavior to ensure they match your expectations. Don't hesitate to ask about the energy level of specific animals.",
    },
    {
        question: "What kind of support do you offer after adoption?",
        answer: "Our support doesn't end when you take your new pet home. We offer post-adoption check-ins and behavior guidance to help you and your pet adjust. We believe in building a long-term relationship with our adopters to ensure successful, happy homes.",
    },
    {
        question: "How quickly can I expect a response after I contact you?",
        answer: "We strive to reply within one business day for general inquiries and often sooner for urgent adoption or shelter-related questions. If you need faster assistance, mention that in your message so we can prioritize your request.",
    },
    {
        question: "Can I start the adoption process before visiting a shelter in person?",
        answer: "Yes. We can begin with an initial consultation over phone or email to assess your needs, answer questions, and recommend shelters or pets. Once you are ready, we can help you schedule an in-person visit to move forward.",
    }
];

const faqs3 = [
    {
        question: "What information should I expect regarding a pet's history?",
        answer: "We believe in full transparency. A reputable shelter should provide clear medical history, explain a pet's temperament honestly, and outline the specific steps for adoption. If a shelter cannot provide this information or seems evasive, it may be a red flag. At Pet Haven, we pride ourselves on open communication.",
    },
    {
        question: "How do I know if a shelter is trustworthy?",
        answer: "Look for shelters that provide clear medical histories, transparent adoption processes, and staff who can honestly explain a pet's temperament. A trustworthy shelter should also offer post-adoption support and be open to answering any questions you have.",
    },
    {
        question: "What if I have concerns about a pet's history or behavior?",
        answer: "Don't hesitate to ask the shelter for more information. A reputable shelter will be transparent about any concerns and work with you to find a pet that fits your needs. If something doesn't feel right, it's okay to keep looking until you find the right match.",
    },
    {
        question: "Can I request more information about a specific pet before visiting the shelter?",
        answer: "Yes. We encourage you to ask for as much information as possible about any pet you're interested in. This can include their medical history, behavior assessments, and any special needs they may have. The more you know, the better prepared you'll be to provide a loving home.",
    }
];

export default function Contact() {
    const [openFaqId, setOpenFaqId] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const toggleFaq = (faqId) => {
        setOpenFaqId((currentId) =>
            currentId === faqId ? null : faqId);
    };

    return (
        <div className="page-screen contact-page">
            <section className="page-hero">
                <div className="page-hero__content">
                    <p className="page-hero__eyebrow">Contact PetHaven</p>
                    <h1 className="page-hero__title">
                        Reach out when you need help choosing a pet, shelter, or next step.
                    </h1>
                    <p className="page-hero__description">
                        Whether you are ready to adopt or still comparing options, our team
                        can guide you toward the right information before you make a
                        decision.
                    </p>
                </div>

                <aside className="page-hero__summary-card">
                    <h2 className="page-hero__summary-title">Best time to contact us</h2>
                    <p className="page-hero__summary-text">
                        Reach out during the day for faster responses, especially if you
                        want to schedule a meet-and-greet or ask about a specific pet
                        profile.
                    </p>
                    <FontAwesomeIcon
                        icon={faContactBook}
                        className="hospital-aside"
                    />
                </aside>
            </section>

            <section className="page-section">
                <div className="page-section__intro">
                    <p className="page-section__eyebrow">Contact options</p>
                    <h2 className="page-section__title">
                        Choose the easiest way to reach the team.
                    </h2>
                </div>

                <div className="contact-options-grid">
                    {contactOptions.map((option) => (
                        <article key={option.title} className="contact-info-card">
                            <h3 key={option.icon} className="contact-info-card__title">
                                {option.title} <FontAwesomeIcon icon={option.icon} shake />
                            </h3>
                            <p className="contact-info-card__details">{option.details}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="page-section page-section--muted">
                <div id="out-cont">
                    <h1 className="faq-head">FAQ's</h1>
                    <div className="in-container">
                        <h1>General Adoption Process</h1>
                        {faqs.map((faq, index) => {
                            const faqId = `general-${index}`;
                            const panelId = `faq-panel-${faqId}`;
                            const isOpen = openFaqId === faqId;
                            return (
                                <div key={faq.question} className="faq-item">
                                    <button
                                        type="button"
                                        className={`accordion ${isOpen ? "accordion--open" : ""}`}
                                        onClick={() => toggleFaq(faqId)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                    >
                                        {faq.question} <FontAwesomeIcon icon={faArrowDown} className={`fa-sharp ${isOpen ? "fa-sharp--open" : ""}`} />
                                    </button>

                                    <div
                                        id={panelId}
                                        className={`panel ${isOpen ? "panel--open" : ""}`}
                                        role="region"
                                    >
                                        <p className="para">{faq.answer}</p>
                                    </div>
                                </div>
                            );
                        })}

                        <details className="faq-more">
                            <summary className="see-more">
                                {toggleFaq ? "See More FAQs" : "Show Less"}
                                <FontAwesomeIcon icon={faArrowDown} className={`fa-sharp`} />
                            </summary>
                            <div className="faq-more__content">
                                {faq_contd.map((faq, index) => {
                                    const faqId = `general-extra-${index}`;
                                    const panelId = `faq-panel-${faqId}`;
                                    const isOpen = openFaqId === faqId;

                                    return (
                                        <div key={faq.question} className="faq-item">
                                            <button
                                                type="button"
                                                key={faq.question}
                                                className={`accordion ${isOpen ? "accordion--open" : ""}`}
                                                onClick={() => toggleFaq(faqId)}
                                                aria-expanded={isOpen}
                                                aria-controls={panelId}
                                            >
                                                {faq.question} <FontAwesomeIcon icon={faArrowDown} className={`fa-sharp ${isOpen ? "fa-sharp--open" : ""}`} />
                                            </button>

                                            <div
                                                key={faq.answer}
                                                id={panelId}
                                                className={`panel ${isOpen ? "panel--open" : ""}`}
                                                role="region"
                                            >
                                                <p className="para">{faq.answer}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </details>
                    </div>

                    <div className="in-container">
                        <h1>Pet Selection & Compatibility</h1>

                        {faqs2.map((faq2, index) => {
                            const faqId = `compatibility-${index}`;
                            const panelId = `faq-panel-${faqId}`;
                            const isOpen = openFaqId === faqId;
                            return (
                                <div key={faq2.question} className="faq-item">
                                    <button
                                        type="button"
                                        className={`accordion ${isOpen ? "accordion--open" : ""}`}
                                        onClick={() => toggleFaq(faqId)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                    >
                                        {faq2.question} <FontAwesomeIcon icon={faArrowDown} className={`fa-sharp ${isOpen ? "fa-sharp--open" : ""}`} />
                                    </button>
                                    <div
                                        id={panelId}
                                        className={`panel ${isOpen ? "panel--open" : ""}`}
                                        role="region"
                                    >
                                        <p className="para">{faq2.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="in-container">
                        <h1>Transparency & Trust</h1>

                        {faqs3.map((faq3, index) => {
                            const faqId = `trust-${index}`;
                            const panelId = `faq-panel-${faqId}`;
                            const isOpen = openFaqId === faqId;
                            return (
                                <div key={faq3.question} className="faq-item">
                                    <button
                                        type="button"
                                        className={`accordion ${isOpen ? "accordion--open" : ""}`}
                                        onClick={() => toggleFaq(faqId)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                    >
                                        {faq3.question} <FontAwesomeIcon icon={faArrowDown} className={`fa-sharp ${isOpen ? "fa-sharp--open" : ""}`} />
                                    </button>
                                    <div
                                        id={panelId}
                                        className={`panel ${isOpen ? "panel--open" : ""}`}
                                        role="region"
                                    >
                                        <p className="para">{faq3.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="page-section page-section--muted">
                <div className="page-section__intro">
                    <p className="page-section__eyebrow">Send a message</p>
                    <h2 className="page-section__title">
                        Share what you need help with and we will point you well.
                    </h2>
                </div>

                <div className="contact-layout-grid">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label className="contact-form__field">
                            <span className="contact-form__label">Full name</span>
                            <input
                                className="contact-form__input"
                                id="contact-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                placeholder="Your name"
                            />
                        </label>

                        <label className="contact-form__field">
                            <span className="contact-form__label">Email address</span>
                            <input
                                className="contact-form__input"
                                id="contact-mail" name="mail"
                                type="email"
                                placeholder="you@example.com"
                            />
                        </label>

                        <label className="contact-form__field">
                            <span className="contact-form__label">Topic</span>
                            <select
                                className="contact-form__input"
                                id="contact-topic" name="topic"
                                defaultValue="Adoption enquiry"
                            >
                                <option>Adoption enquiry</option>
                                <option>Shelter partnership</option>
                                <option>Volunteer interest</option>
                                <option>General question</option>
                            </select>
                        </label>

                        <label className="contact-form__field">
                            <span className="contact-form__label">Message</span>
                            <textarea
                                className="contact-form__textarea"
                                id="contact-message" name="message"
                                rows="5"
                                placeholder="Tell us how we can help."
                            />
                        </label>

                        <button type="submit" className="contact-form__button">
                            Send enquiry
                        </button>
                    </form>

                    <aside className="contact-help-card">
                        <h3 className="contact-help-card__title">
                            Helpful before you write
                        </h3>
                        <ul className="contact-help-card__list">
                            <li>Tell us which pet or shelter you are asking about.</li>
                            <li>Mention your preferred adoption timeline.</li>
                            <li>
                                Share whether you live alone, with family, or with other pets.
                            </li>
                        </ul>
                    </aside>
                </div>
            </section>
        </div>
    );
}
