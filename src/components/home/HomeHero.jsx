import React from "react";
import { NavLink } from "react-router-dom";

function HomeHero() {
  return (
    <>
      <style>
        {`
          .hero-section {
            position: relative;
            min-height: 90vh;
            display: flex;
            align-items: center;
            background-color: #000033;
            /* Using a high-quality industrial power grid image */
            background-image: linear-gradient(to right, rgba(0, 0, 51, 0.9) 30%, rgba(0, 0, 51, 0.4) 100%), 
                              url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070');
            background-size: cover;
            background-position: center;
            background-attachment: fixed; /* Parallax effect for desktop */
            overflow: hidden;
          }

          .hero-grid-overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: linear-gradient(rgba(68, 158, 29, 0.05) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(68, 158, 29, 0.05) 1px, transparent 1px);
            background-size: 50px 50px;
            z-index: 1;
            pointer-events: none;
          }

          .hero-content {
            position: relative;
            z-index: 2;
            max-width: 1400px;
            width: 100%;
            margin: 0 auto;
            padding: 0 40px;
          }

          .hero-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 24px rgba(68, 158, 29, 0.3);
            filter: brightness(1.1);
          }
          
          /* RESPONSIVENESS FIXES */
          @media (max-width: 1024px) {
            .hero-section { 
              padding: 120px 0 80px 0; 
              text-align: center; 
              background-attachment: scroll; /* Better performance on mobile */
              background-image: linear-gradient(rgba(0, 0, 51, 0.8), rgba(0, 0, 51, 0.8)), 
                                url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070');
            }
            .hero-content { padding: 0 24px; }
            .hero-heading { font-size: 52px !important; }
            .hero-usp { 
              margin: 0 auto 24px auto !important; 
              border-left: none !important; 
              border-bottom: 3px solid var(--color-accent-green);
              display: inline-block;
              padding: 0 0 10px 0 !important;
            }
            .hero-subtext { margin: 0 auto 40px auto !important; }
            .hero-btn-group { justify-content: center !important; flex-wrap: wrap; }
          }

          @media (max-width: 600px) {
            .hero-heading { font-size: 38px !important; }
            .hero-btn { width: 100%; }
            .hero-badge { font-size: 11px !important; letter-spacing: 2px !important; }
          }
        `}
      </style>

      <section className="hero-section">
        <div className="hero-grid-overlay" />

        <div className="hero-content">
          <div className="hero-badge" style={styles.badge}>
            <span style={styles.badgeLine} />
            Powering Global Infrastructure
          </div>

          <h1 className="hero-heading" style={styles.heading}>
            Sustainable Energy <br />
            <span style={{ color: "var(--color-accent-green)" }}>
              Precision Engineered.
            </span>
          </h1>

          <p className="hero-usp" style={styles.usp}>
            Global Power Engineering Expertise. Localized Solutions.
          </p>

          <p className="hero-subtext" style={styles.subtext}>
            A specialized consultancy delivering high-end technical design, grid
            stability analysis, and renewable integration for utility and
            industrial scales worldwide.
          </p>

          <div className="hero-btn-group" style={styles.buttonGroup}>
            <NavLink
              to="/services"
              className="hero-btn"
              style={styles.primaryBtn}
            >
              Explore Services
            </NavLink>
            <NavLink
              to="/contact"
              className="hero-btn"
              style={styles.secondaryBtn}
            >
              Consult Our Experts
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    color: "var(--color-accent-green)",
    fontSize: "13px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "4px",
    marginBottom: "24px",
  },
  badgeLine: {
    width: "30px",
    height: "2px",
    backgroundColor: "var(--color-accent-green)",
  },
  heading: {
    fontSize: "72px",
    fontWeight: "900",
    color: "#ffffff",
    lineHeight: "1",
    marginBottom: "24px",
    letterSpacing: "-2px",
  },
  usp: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "24px",
    borderLeft: "4px solid var(--color-accent-green)",
    paddingLeft: "20px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    maxWidth: "fit-content",
  },
  subtext: {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "rgba(255, 255, 255, 0.75)",
    marginBottom: "48px",
    maxWidth: "600px",
  },
  buttonGroup: {
    display: "flex",
    gap: "20px",
  },
  primaryBtn: {
    backgroundColor: "var(--color-accent-green)",
    color: "#fff",
    padding: "18px 36px",
    fontSize: "14px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    display: "inline-block",
  },
  secondaryBtn: {
    backgroundColor: "transparent",
    color: "#fff",
    padding: "18px 36px",
    fontSize: "14px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textDecoration: "none",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    transition: "all 0.3s ease",
    display: "inline-block",
  },
};

export default HomeHero;
