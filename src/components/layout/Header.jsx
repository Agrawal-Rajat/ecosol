import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync menu open state with body scroll
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  const navLinkStyle = ({ isActive }) => ({
    ...styles.navLink,
    color: isActive ? "var(--color-primary)" : "#666",
  });

  return (
    <>
      <style>
        {`
          .nav-link:after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: var(--color-accent-green);
            transition: width .3s;
            margin-top: 4px;
          }
          .nav-link:hover { color: var(--color-primary) !important; }
          .nav-link:hover:after { width: 100%; }
          .active-link:after { width: 100% !important; }
          
          @media (max-width: 1024px) {
            .desktop-nav { display: none !important; }
            .mobile-btn { display: block !important; }
          }
        `}
      </style>

      <header
        style={{
          ...styles.header,
          height: scrolled ? "70px" : "90px",
          backgroundColor: isMenuOpen
            ? "transparent"
            : scrolled
              ? "rgba(255, 255, 255, 0.98)"
              : "var(--color-white)",
          boxShadow:
            scrolled && !isMenuOpen ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
        }}
      >
        <div style={styles.container}>
          {/* Brand Logo Section */}
          <NavLink
            to="/"
            style={styles.logoContainer}
            onClick={() => setIsMenuOpen(false)}
          >
            <div style={styles.logoLayout}>
              <span style={styles.brandMain}>ecosol</span>
              <div style={styles.brandSubWrapper}>
                <div style={styles.line} />
                <span style={styles.brandSub}>projects</span>
                <div style={styles.line} />
              </div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={styles.nav}>
            {[
              "Home",
              "About",
              "Services",
              "Projects",
              "Contact",
              "Careers",
            ].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                style={navLinkStyle}
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Action Area */}
          <div style={styles.actionArea}>
            <NavLink to="/contact" className="desktop-nav" style={styles.cta}>
              Get in Touch
            </NavLink>

            {/* Mobile Toggle Button */}
            <button
              className="mobile-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={styles.mobileToggle}
            >
              <div
                style={{
                  ...styles.bar,
                  transform: isMenuOpen
                    ? "rotate(45deg) translate(6px, 6px)"
                    : "none",
                }}
              />
              <div style={{ ...styles.bar, opacity: isMenuOpen ? 0 : 1 }} />
              <div
                style={{
                  ...styles.bar,
                  transform: isMenuOpen
                    ? "rotate(-45deg) translate(6px, -6px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          style={{
            ...styles.mobileOverlay,
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? "visible" : "hidden",
            transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
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
                onClick={() => setIsMenuOpen(false)}
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
    position: "sticky",
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
    maxWidth: "var(--container-width)",
    width: "100%",
    margin: "0 auto",
    padding: "0 5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2002,
  },
  logoContainer: {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
  },
  logoLayout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  brandMain: {
    fontSize: "32px",
    fontWeight: "800",
    color: "var(--color-primary)",
    letterSpacing: "-1px",
    lineHeight: "0.9",
  },
  brandSubWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: "4px",
    marginTop: "2px",
  },
  line: {
    flex: 1,
    height: "1.5px",
    backgroundColor: "#000",
  },
  brandSub: {
    fontSize: "10px",
    fontWeight: "700",
    color: "#000",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  nav: {
    display: "flex",
    gap: "35px",
  },
  navLink: {
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    transition: "all 0.3s ease",
  },
  actionArea: {
    display: "flex",
    alignItems: "center",
  },
  cta: {
    textDecoration: "none",
    backgroundColor: "var(--color-primary)",
    color: "#fff",
    padding: "12px 24px",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    transition: "all 0.3s ease",
  },
  mobileToggle: {
    display: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "10px",
    zIndex: 3000,
  },
  bar: {
    width: "28px",
    height: "2px",
    backgroundColor: "var(--color-primary)",
    margin: "6px 0",
    transition: "0.4s",
  },
  mobileOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "var(--color-white)",
    zIndex: 2001,
    display: "flex",
    flexDirection: "column",
    transition: "all 0.5s cubic-bezier(0.77,0.2,0.05,1.0)",
  },
  mobileNavLinks: {
    display: "flex",
    flexDirection: "column",
    padding: "120px 10% 0 10%",
    gap: "20px",
  },
  mobileLink: {
    fontSize: "28px",
    fontWeight: "800",
    color: "var(--color-primary)",
    textDecoration: "none",
    textTransform: "uppercase",
    borderBottom: "1px solid #eee",
    paddingBottom: "10px",
  },
};

export default Header;
