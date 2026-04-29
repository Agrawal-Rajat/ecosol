import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import servicesData from "../../data/servicesData.js";
import ecosolLogo from "../../assets/logos/weblogo-transparent.png";

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
          .ecosol-header-scope .nav-link {
            text-decoration: none;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--color-text-main);
            padding: 15px 0;
            transition: all 0.3s ease;
            position: relative;
            display: flex;
            align-items: center;
          }

          .ecosol-header-scope .nav-link:after {
            content: '';
            position: absolute;
            bottom: 10px; left: 0;
            width: 0; height: 1.5px;
            background: var(--color-electric-blue);
            transition: width .3s ease;
          }

          .ecosol-header-scope .nav-link:hover, 
          .ecosol-header-scope .nav-link.active { 
            color: var(--color-logo-navy) !important; 
          }
          
          .ecosol-header-scope .nav-link:hover:after, 
          .ecosol-header-scope .nav-link.active:after { 
            width: 100%; 
          }

          .ecosol-header-scope .nav-item-services { 
            display: flex; 
            align-items: center; 
            height: 100%; 
            position: relative; 
          }

          .ecosol-header-scope .mega-menu {
            position: fixed; 
            /* Added top padding to act as a bridge so the menu doesn't close when moving mouse down */
            padding-top: 20px; 
            top: 70px; /* Aligned closer to header height */
            left: 0; 
            width: 100vw;
            opacity: 0; 
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            z-index: 1000; 
            pointer-events: none;
          }

          /* The actual visible box of the mega menu */
          .ecosol-header-scope .mega-menu-content-box {
            background: #ffffff;
            box-shadow: 0 25px 50px -12px rgba(11, 17, 32, 0.15);
            border-bottom: 3px solid var(--color-logo-blue);
            width: 100%;
          }

          .ecosol-header-scope.is-scrolled .mega-menu { top: 50px; }
          
          .ecosol-header-scope .nav-item-services:hover .mega-menu { 
            opacity: 1; 
            visibility: visible; 
            transform: translateY(0); 
            pointer-events: auto; 
          }

          .ecosol-header-scope .mega-grid-link { 
            padding: 12px 18px; 
            text-decoration: none; 
            color: var(--color-logo-navy); 
            font-weight: 700; 
            font-size: 14px; 
            border-radius: 2px; 
            transition: all 0.2s ease; 
            display: block; 
          }
          
          .ecosol-header-scope .mega-grid-link:hover { 
            background: var(--color-bg-light-grey); 
            color: var(--color-electric-blue); 
            transform: translateX(5px); 
          }

          @media (max-width: 1024px) {
            .ecosol-header-scope .desktop-nav { display: none !important; }
            .ecosol-header-scope .mobile-btn { display: block !important; }
            .ecosol-header-scope .mega-menu { display: none; }
          }
        `}
      </style>

      <header
        className={`ecosol-header-scope ${scrolled ? "is-scrolled" : ""}`}
        style={{
          ...styles.header,
          height: scrolled ? "70px" : "90px",
          backgroundColor: isMenuOpen ? "#fff" : "rgba(255, 255, 255, 0.98)",
          boxShadow: scrolled ? "0 4px 20px rgba(11, 17, 32, 0.08)" : "none",
        }}
      >
        <div style={styles.container}>
          <NavLink to="/" style={styles.logoContainer} onClick={closeAllMenus}>
            <img
              src={ecosolLogo}
              alt="Ecosol Projects Logo"
              style={{
                ...styles.logoImage,
                height: scrolled ? "64px" : "72px",
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
                <div className="mega-menu-content-box">
                  <div style={styles.megaContainerContent}>
                    <div style={styles.megaInfoPane}>
                      <h4 style={styles.megaHeaderSmall}>
                        Engineering Expertise
                      </h4>
                      <p style={styles.megaPara}>
                        Specialized power infrastructure studies, grounding
                        analysis, and electrical detail design.
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
                      {servicesData
                        .filter(
                          (s) =>
                            s.slug !== "engineering-software-capabilities" &&
                            s.slug !== "electromagnetic-analysis",
                        )
                        .map((s) => (
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
    borderBottom: "1px solid rgba(11, 17, 32, 0.05)",
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
    filter: "drop-shadow(0 2px 8px rgba(11, 17, 32, 0.12))",
  },
  nav: { display: "flex", gap: "35px", height: "100%", alignItems: "center" },
  actionArea: { display: "flex", alignItems: "center" },
  cta: {
    textDecoration: "none",
    backgroundColor: "var(--color-logo-navy)",
    color: "#fff",
    padding: "12px 24px",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    borderRadius: "2px",
    letterSpacing: "1px",
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
    backgroundColor: "var(--color-logo-navy)",
  },
  megaContainerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "300px 1fr",
    padding: "60px 40px",
    gap: "60px",
  },
  megaInfoPane: {
    paddingRight: "40px",
    borderRight: "1px solid var(--color-bg-light-grey)",
  },
  megaLinksPane: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "5px 30px",
  },
  megaHeaderSmall: {
    color: "var(--color-electric-blue)",
    textTransform: "uppercase",
    letterSpacing: "3px",
    fontSize: "11px",
    fontWeight: "800",
    marginBottom: "20px",
  },
  megaPara: {
    fontSize: "14px",
    color: "var(--color-text-main)",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  megaCtaButton: {
    background: "var(--color-logo-navy)",
    color: "#fff",
    padding: "12px 24px",
    textDecoration: "none",
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase",
    display: "inline-block",
    borderRadius: "2px",
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
    transition: "all 0.5s cubic-bezier(0.2, 1, 0.3, 1)",
  },
  mobileNavLinks: {
    display: "flex",
    flexDirection: "column",
    padding: "0 10%",
  },
  mobileLink: {
    fontSize: "22px",
    fontWeight: "900",
    color: "var(--color-logo-navy)",
    textDecoration: "none",
    textTransform: "uppercase",
    borderBottom: "1px solid var(--color-bg-light-grey)",
    padding: "20px 0",
    letterSpacing: "-1px",
  },
};

export default Header;
