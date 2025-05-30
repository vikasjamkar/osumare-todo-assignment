import React from "react";
import logo from "../../assets/images/todo-logo.png";

const Footer = () => {
  return (
    <footer className="footer-wrapper pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-5 pe-md-4 mb-4 mb-md-0">
            <img src={logo} alt="Osumare Logo" loading="lazy" />
            <p className="footer-newsletter-text">
              Subscribe to our newsletter for the latest features and updates
              delivered to you.
            </p>

            <div className="d-flex gap-3 flex-wrap align-items-center">
              <input
                type="email"
                placeholder="Your email here"
                className="footer-news-input w-75"
              />
              <button className="custom-btn">Join</button>
            </div>

            <small className="pt-3 d-block">
              By subscribing, you consent to our Privacy Policy and agree to
              receive updates.
            </small>
          </div>

          <nav className="col">
            <p className="footer-section-title">Useful Links</p>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {[
                "Home Page",
                "About Us",
                "Contact Us",
                "Blog Posts",
                "FAQ's",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="col">
            <p className="footer-section-title">Resources</p>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {[
                "Help Center",
                "User Guide",
                "Community Forum",
                "Feedback",
                "Support",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="col">
            <p className="footer-section-title">Connect With Us</p>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {[
                { icon: "ri-facebook-circle-fill", text: "Facebook" },
                { icon: "ri-twitter-x-fill", text: "Twitter" },
                { icon: "ri-instagram-line", text: "Instagram" },
                { icon: "ri-linkedin-box-fill", text: "LinkedIn" },
                { icon: "ri-youtube-fill", text: "YouTube" },
              ].map(({ icon, text }) => (
                <li key={text}>
                  <a href="#" className="footer-link">
                    <i className={icon} aria-hidden="true"></i> {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="d-flex justify-content-between align-items-center flex-wrap mt-2 mt-md-4 border-top pt-3 py-md-3 flex-wrap gap-1 gap-md-3">
          <p className="footer-copyright mb-0">
            © 2024 Osumare. All rights reserved.
          </p>
          <nav>
            <ul className="d-flex gap-3 list-unstyled mb-0">
              {["Privacy Policy", "Terms of Services", "Cookie Settings"].map(
                (text) => (
                  <li key={text}>
                    <a href="#" className="footer-legal-link">
                      {text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
