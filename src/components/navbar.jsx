import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function MyNavbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateActiveLink = (value) => setActiveLink(value);

  return (
    <Navbar
      expand="lg"
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="/images/logo.png"
            alt="logo"
            width="60"
            height="60"
            className="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            {["home", "skills", "projects"].map((link) => (
              <Nav.Link
                key={link}
                href={`#${link}`}
                className={`navbar-link ${activeLink === link ? "active" : ""}`}
                onClick={() => updateActiveLink(link)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Nav.Link>
            ))}

            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item
                href="#home"
                onClick={() => updateActiveLink("home")}>
                Home
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#skills"
                onClick={() => updateActiveLink("skills")}>
                Skills
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#projects"
                onClick={() => updateActiveLink("projects")}>
                Projects
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.facebook.com/omar.barakeh.967/"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/images/nav-icon2.svg" alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/omarbarakeh2/"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/images/nav-icon3.svg" alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/omar-albarakeh/"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/images/nav-icon1.svg" alt="LinkedIn" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => {
                const section = document.getElementById("connect");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}>
              <span>LetsConnect</span>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
