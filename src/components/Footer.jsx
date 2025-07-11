import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({});
  const [buttonText, setButtonText] = useState('Subscribe');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus({ success: false, message: 'Please enter your email' });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus({ success: false, message: 'Please enter a valid email' });
      return;
    }

    setButtonText('Subscribing...');

    const templateParams = {
      user_email: email,
      message: 'A new user just subscribed via the footer form.',
    };

    emailjs
      .send(
        'service_5teqdkq',         // ✅ Your EmailJS service ID
        'template_jhxfzb5',        // ✅ Your EmailJS template ID
        templateParams,
        'F_xJjpn_wOkgV3FQr'        // ✅ Your public key
      )
      .then(() => {
        setButtonText('Subscribe');
        setEmail('');
        setStatus({ success: true, message: 'Thank you for subscribing!' });
        setTimeout(() => setStatus({}), 5000);
      })
      .catch(() => {
        setButtonText('Subscribe');
        setStatus({
          success: false,
          message: 'Something went wrong. Please try again later.',
        });
      });
  };

  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="footer-top-row d-flex flex-column flex-md-row justify-content-between align-items-start gap-5">
          <div className="footer-brand d-flex flex-column align-items-start">
            <NavLink to="/" className="footer-logo text-white fs-4 fw-bold text-decoration-none">
              Omar AlBarakeh
            </NavLink>
            <p className="footer-tagline mt-1 text-muted">
              Building digital experiences that matter
            </p>
          </div>

          <div className="footer-newsletter w-100 w-md-50">
            <h3 className="footer-newsletter-title text-white mb-3">
              Subscribe to get notified about my latest projects and updates.
            </h3>
            <form onSubmit={handleSubmit} className="footer-form d-flex flex-column gap-2">
              <div className="footer-input-group d-flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="form-control"
                  disabled={status.success}
                />
                <button type="submit" className="footer-submit ms-2" disabled={status.success}>
                  <FaArrowRight />
                </button>
              </div>
              {status.message && (
                <p className={`m-0 ${status.success ? 'text-success' : 'text-danger'}`}>
                  {status.message}
                </p>
              )}
              <p className="footer-newsletter-text text-muted mt-2">
                Stay connected with future updates.
              </p>
            </form>
          </div>
        </div>

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
            <p className="footer-copy mb-1">
              © {new Date().getFullYear()} Omar AlBarakeh. All rights reserved.
            </p>
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
