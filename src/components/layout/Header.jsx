import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import servicesData from "../../data/servicesData.js";
// Import your logo asset
import ecosolLogo from "../../assets/logos/weblogo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const closeAllMenus = () => setIsMenuOpen(false);

  return (
    <>
      <style>
        {`
          .nav-link {
            text-decoration: none;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #666;
            padding: 15px 0;
            transition: color 0.3s ease;
            position: relative;
            display: flex;
            align-items: center;
          }

          .nav-link:after {
            content: '';
            position: absolute;
            bottom: 0; left: 0;
            width: 0; height: 2px;
            background: var(--color-accent-green);
            transition: width .3s;
          }

          .nav-link:hover, .nav-link.active { color: var(--color-primary) !important; }
          .nav-link:hover:after, .nav-link.active:after { width: 100%; }

          .nav-item-services { display: flex; align-items: center; height: 100%; position: relative; }
          .nav-item-services:after { content: ''; position: absolute; top: 100%; left: 0; width: 100%; height: 20px; background: transparent; }

          .mega-menu {
            position: fixed; top: 90px; left: 0; width: 100vw;
            background: #ffffff; opacity: 0; visibility: hidden;
            transform: translateY(10px);
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
            border-bottom: 4px solid var(--color-accent-green);
            z-index: 1000; pointer-events: none;
          }

          .is-scrolled .mega-menu { top: 70px; }
          .nav-item-services:hover .mega-menu { opacity: 1; visibility: visible; transform: translateY(0); pointer-events: auto; }

          .mega-grid-link { padding: 12px 18px; text-decoration: none; color: var(--color-primary); font-weight: 700; font-size: 14px; border-radius: 4px; transition: all 0.2s ease; display: block; }
          .mega-grid-link:hover { background: var(--color-bg); color: var(--color-accent-green); transform: translateX(5px); }

          @media (max-width: 1024px) {
            .desktop-nav { display: none !important; }
            .mobile-btn { display: block !important; }
            .mega-menu { display: none; }
          }
        `}
      </style>

      <header
        className={`header-full ${scrolled ? "is-scrolled" : ""}`}
        style={{
          ...styles.header,
          height: scrolled ? "70px" : "90px",
          backgroundColor: isMenuOpen ? "#fff" : "rgba(255, 255, 255, 0.98)",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div style={styles.container}>
          <NavLink to="/" style={styles.logoContainer} onClick={closeAllMenus}>
            <img
              src={ecosolLogo}
              alt="Ecosol Projects Logo"
              style={{
                ...styles.logoImage,
                height: scrolled ? "45px" : "55px", // Responsive scaling on scroll
              }}
            />
          </NavLink>

          <nav className="desktop-nav" style={styles.nav}>
            <NavLink to="/" className="nav-link" onClick={closeAllMenus}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={closeAllMenus}>
              About
            </NavLink>
            <div className="nav-item-services">
              <NavLink
                to="/services"
                className="nav-link"
                onClick={closeAllMenus}
              >
                Services
              </NavLink>
              <div className="mega-menu">
                <div style={styles.megaContainerContent}>
                  <div style={styles.megaInfoPane}>
                    <h4 style={styles.megaHeaderSmall}>
                      Engineering Expertise
                    </h4>
                    <p style={styles.megaPara}>
                      Technical power system studies and industrial
                      electrification solutions.
                    </p>
                    <NavLink
                      to="/contact"
                      style={styles.megaCtaButton}
                      onClick={closeAllMenus}
                    >
                      Consultation
                    </NavLink>
                  </div>
                  <div style={styles.megaLinksPane}>
                    {servicesData.map((s) => (
                      <NavLink
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="mega-grid-link"
                        onClick={closeAllMenus}
                      >
                        {s.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <NavLink
              to="/projects"
              className="nav-link"
              onClick={closeAllMenus}
            >
              Projects
            </NavLink>
            <NavLink to="/careers" className="nav-link" onClick={closeAllMenus}>
              Careers
            </NavLink>
            <NavLink to="/contact" className="nav-link" onClick={closeAllMenus}>
              Contact
            </NavLink>
          </nav>

          <div style={styles.actionArea}>
            <NavLink
              to="/contact"
              className="desktop-nav"
              style={styles.cta}
              onClick={closeAllMenus}
            >
              Get in Touch
            </NavLink>

            <button
              className="mobile-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={styles.mobileToggle}
            >
              <div
                style={{
                  ...styles.bar,
                  transform: isMenuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              />
              <div style={{ ...styles.bar, opacity: isMenuOpen ? 0 : 1 }} />
              <div
                style={{
                  ...styles.bar,
                  transform: isMenuOpen
                    ? "rotate(-45deg) translate(7px, -7px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* MOBILE OVERLAY */}
        <div
          style={{
            ...styles.mobileOverlay,
            transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
            visibility: isMenuOpen ? "visible" : "hidden",
          }}
        >
          <div style={styles.mobileNavLinks}>
            {[
              "Home",
              "About",
              "Services",
              "Projects",
              "Careers",
              "Contact",
            ].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={closeAllMenus}
                style={styles.mobileLink}
              >
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2000,
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
  },
  container: {
    maxWidth: "1400px",
    width: "100%",
    margin: "0 auto",
    padding: "0 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    width: "auto",
    transition: "all 0.3s ease",
    objectFit: "contain",
    // Keep it sharp
    filter: "contrast(1.05)",
  },
  nav: { display: "flex", gap: "35px", height: "100%", alignItems: "center" },
  actionArea: { display: "flex", alignItems: "center" },
  cta: {
    textDecoration: "none",
    backgroundColor: "var(--color-primary)",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  mobileToggle: {
    display: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    zIndex: 3000,
    position: "relative",
  },
  bar: {
    width: "24px",
    height: "2px",
    margin: "6px 0",
    transition: "0.4s",
    backgroundColor: "var(--color-primary)",
  },
  megaContainerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "300px 1fr",
    padding: "60px 40px",
    gap: "60px",
  },
  megaInfoPane: { paddingRight: "40px", borderRight: "1px solid #eee" },
  megaLinksPane: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "5px 30px",
  },
  megaHeaderSmall: {
    color: "var(--color-accent-green)",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "11px",
    marginBottom: "20px",
  },
  megaPara: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.5",
    marginBottom: "30px",
  },
  megaCtaButton: {
    background: "var(--color-primary)",
    color: "#fff",
    padding: "10px 20px",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    display: "inline-block",
  },
  mobileOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "#fff",
    zIndex: 2001,
    display: "flex",
    flexDirection: "column",
    paddingTop: "120px",
    transition: "all 0.5s cubic-bezier(0.77,0.2,0.05,1.0)",
  },
  mobileNavLinks: {
    display: "flex",
    flexDirection: "column",
    padding: "0 10%",
    gap: "0",
  },
  mobileLink: {
    fontSize: "24px",
    fontWeight: "800",
    color: "var(--color-primary)",
    textDecoration: "none",
    textTransform: "uppercase",
    borderBottom: "1px solid #eee",
    padding: "20px 0",
  },
};

export default Header;
