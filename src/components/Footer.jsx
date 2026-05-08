import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import BackToTop from "./BackToTop";

const quickLinks = [
  { label: "About", page: "about" },
  { label: "Adopt", page: "adopt" },
  { label: "Shelters", page: "shelters" },
  { label: "Stories", page: "stories" },
  { label: "Contact", page: "contact" },
];

const socialLinks = [
  { icon: faFacebookF, label: "Facebook", href: "https://facebook.com" },
  { icon: faTwitter, label: "Twitter", href: "https://x.com" },
  { icon: faInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: faLinkedinIn, label: "LinkedIn", href: "https://linkedin.com" },
];

export default function Footers({ currentPage, onNavigate }) {
  return (
    <div className="footer-cont">
      <footer className="site-footer">
        <div className="footer-brand-block">
          <h1 className="footer-brand-title">
            <span className="brand-markk">
              <FontAwesomeIcon icon={faPaw} />
            </span>
            Pet<span className="haven">Haven</span>
          </h1>
          <p className="foot-para">
            PetHaven is a warm pet adoption space where we help rescued animals
            meet families that are ready to care for them. We provide useful
            guidance, trustworthy shelter connections, and support that makes
            the adoption process easier to understand.
          </p>
        </div>

        <div className="footer-page-links">
          {quickLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              className={`footer-page-button ${currentPage === link.page ? "footer-page-button-active" : ""}`}
              onClick={() => onNavigate(link.page)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="footer-links">
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.label}
              href={socialLink.href}
              className="footer-social-link"
              aria-label={socialLink.label}
            >
              <FontAwesomeIcon icon={socialLink.icon} className="footer-social-icon"/>
            </a>
          ))}
        </div>

        <BackToTop />

        <p className="end-para">
          Copyright <FontAwesomeIcon icon={faCopyright} />
          2026. Created with care for better pet adoptions.
        </p>
      </footer>
    </div>
  );
}
