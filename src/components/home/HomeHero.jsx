import React from "react";
import { NavLink } from "react-router-dom";

function HomeHero() {
  return (
    <>
      <style>
        {`
          .hero-section {
            position: relative;
            min-height: 85vh; 
            display: flex;
            align-items: center;
            background-color: #000033;
            background-image: linear-gradient(to right, rgba(0, 0, 51, 0.85) 40%, rgba(0, 0, 51, 0.4) 100%), 
                              url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070');
            background-size: cover;
            background-position: center;
            overflow: hidden;
          }

          .hero-grid-overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: linear-gradient(rgba(68, 158, 29, 0.05) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(68, 158, 29, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
            z-index: 1;
            pointer-events: none;
          }

          .hero-content {
            position: relative;
            z-index: 2;
            max-width: 1400px;
            width: 100%;
            margin: 0 auto;
            padding: 40px; 
          }

          .hero-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(68, 158, 29, 0.2);
            filter: brightness(1.1);
          }
          
          /* MOBILE & TABLET SPACIOUSNESS FIXES */
          @media (max-width: 1024px) {
            .hero-section { 
              min-height: 90vh; /* Increased height for mobile spaciousness */
              padding: 100px 0; /* More vertical breathing room */
              text-align: center; 
              background-image: linear-gradient(rgba(0, 0, 51, 0.75), rgba(0, 0, 51, 0.75)), 
                                url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2070');
            }
            .hero-content { padding: 0 32px; } /* Wider side padding */
            .hero-heading { 
              font-size: 44px !important; 
              margin-bottom: 28px !important; 
              line-height: 1.2 !important; /* Spacious text lines */
            }
            .hero-usp { 
              margin: 0 auto 40px auto !important; 
              border-left: none !important; 
              border-bottom: 2px solid var(--color-accent-green);
              padding: 0 0 12px 0 !important;
              letter-spacing: 2px !important;
              max-width: 85%; /* Centered text width control */
            }
            .hero-btn-group { 
              justify-content: center !important; 
              flex-direction: column; /* Stacked for thumb-friendly reach */
              gap: 20px !important; 
              width: 100%;
              max-width: 320px;
              margin: 0 auto;
            }
          }

          @media (max-width: 480px) {
            .hero-section { padding: 80px 0; }
            .hero-heading { font-size: 36px !important; }
            .hero-btn { width: 100%; padding: 18px 20px !important; }
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
            Global Power Engineering Expertise. <br /> Localized Solutions.
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
    gap: "10px",
    color: "var(--color-accent-green)",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "3px",
    marginBottom: "20px",
  },
  badgeLine: {
    width: "25px",
    height: "2px",
    backgroundColor: "var(--color-accent-green)",
  },
  heading: {
    fontSize: "64px",
    fontWeight: "900",
    color: "#ffffff",
    lineHeight: "1.1",
    marginBottom: "24px",
    letterSpacing: "-1.5px",
  },
  usp: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "40px",
    borderLeft: "4px solid var(--color-accent-green)",
    paddingLeft: "15px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    maxWidth: "fit-content",
  },
  buttonGroup: {
    display: "flex",
    gap: "16px",
  },
  primaryBtn: {
    backgroundColor: "var(--color-accent-green)",
    color: "#fff",
    padding: "16px 32px",
    fontSize: "13px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    textDecoration: "none",
    transition: "all 0.2s ease",
    display: "inline-block",
  },
  secondaryBtn: {
    backgroundColor: "transparent",
    color: "#fff",
    padding: "16px 32px",
    fontSize: "13px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    textDecoration: "none",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    transition: "all 0.2s ease",
    display: "inline-block",
  },
};

export default HomeHero;
