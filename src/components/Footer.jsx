import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    emailjs
      .send('service_twafpoj', 'template_enzqui8', { email })
      .then(() => {
        setSubscribed(true);
        setError('');
        setEmail('');
        setTimeout(() => setSubscribed(false), 5000);
      })
      .catch(() => {
        setError('Failed to subscribe. Please try again.');
      });
  };

  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="footer-top-row d-flex flex-column flex-md-row justify-content-between align-items-start gap-5">
  {/* Logo + Tagline */}
  <div className="footer-brand d-flex flex-column align-items-start">
    <div className="d-flex align-items-center gap-2 mb-2">
      <NavLink to="/" className="footer-logo text-white fs-4 fw-bold text-decoration-none">
        Omar AlBarakeh
      </NavLink>
    </div>
    <p className="footer-tagline mt-1 text-muted">
      Building digital experiences that matter
    </p>
  </div>


          {/* Newsletter */}
          <div className="footer-newsletter w-100 w-md-50">
            <h3 className="footer-newsletter-title text-white mb-3"> Subscribe to get notified about my latest projects and updates.</h3>
            <form onSubmit={handleSubmit} className="footer-form d-flex flex-column gap-2">
              <div className="footer-input-group d-flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="form-control"
                  disabled={subscribed}
                />
                <button type="submit" className="footer-submit ms-2" disabled={subscribed}>
  <FaArrowRight />
</button>

              </div>
              {error && <p className="text-danger m-0">{error}</p>}
              {subscribed && <p className="text-success m-0">Thank you for subscribing!</p>}
              <p className="footer-newsletter-text text-muted mt-2">
                Subscribe to get notified about my latest projects and updates.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom-row d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 pt-4 border-top border-secondary">
          <div className="footer-icons d-flex gap-3 mb-3 mb-md-0">
            <a href="https://github.com/omar-albarakeh" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub className="text-light fs-4" />
            </a>
            <a href="https://www.linkedin.com/in/omar-albarakeh/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-light fs-4" />
            </a>
            <a href="mailto:omaralbarakeh2@gmail.com" aria-label="Email">
              <FaEnvelope className="text-light fs-4" />
            </a>
          </div>

          <div className="footer-legal text-center text-md-end">
            <p className="footer-copy mb-1">© {new Date().getFullYear()} Omar AlBarakeh. All rights reserved.</p>
            <div className="footer-legal-links d-flex gap-3 justify-content-center justify-content-md-end">
              <NavLink to="/privacy" className="text-decoration-none text-light">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms" className="text-decoration-none text-light">
                Terms of Service
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
