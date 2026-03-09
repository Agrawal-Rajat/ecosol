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
            /* New High-Quality Engineering Image */
            background-image: linear-gradient(to right, rgba(0, 0, 51, 0.9) 30%, rgba(0, 0, 51, 0.3) 100%), 
                              url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070');
            background-size: cover;
            background-position: center;
            overflow: hidden;
          }

          .hero-grid-overlay {
            position: absolute;
            inset: 0;
            background-image: linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px);
            background-size: 50px 50px;
            z-index: 1;
            pointer-events: none;
          }

          .hero-content {
            position: relative;
            z-index: 2;
            max-width: 1300px;
            width: 100%;
            margin: 0 auto;
            padding: 40px; 
          }

          .hero-btn {
            transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1);
            display: inline-block;
            text-align: center;
          }

          .hero-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 24px rgba(16, 185, 129, 0.3);
          }
          
          @media (max-width: 1024px) {
            .hero-section { 
              min-height: 80vh;
              text-align: center; 
              background-image: linear-gradient(rgba(0, 0, 51, 0.8), rgba(0, 0, 51, 0.8)), 
                                url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070');
            }
            .hero-content { padding: 0 24px; }
            .hero-heading { font-size: 42px !important; }
            .hero-btn-group { 
              justify-content: center !important; 
              flex-direction: column;
              gap: 16px !important;
            }
          }
        `}
      </style>

      <section className="hero-section">
        <div className="hero-grid-overlay" />

        <div className="hero-content">
          <div className="hero-badge" style={styles.badge}>
            <span style={styles.badgeLine} />
            Independent Consultancy
          </div>

          <h1 className="hero-heading" style={styles.heading}>
            Engineering Intelligence <br />
            <span style={{ color: "#10b981" }}>For Power Infrastructure.</span>
          </h1>

          <p className="hero-subheadline" style={styles.subheadline}>
            Independent electrical engineering consultancy specializing in power
            system studies, electromagnetic analysis, grounding engineering, and
            detailed electrical infrastructure design.
          </p>

          <div className="hero-btn-group" style={styles.buttonGroup}>
            <NavLink
              to="/services"
              className="hero-btn"
              style={styles.primaryBtn}
            >
              Explore Our Services
            </NavLink>
            <NavLink
              to="/contact"
              className="hero-btn"
              style={styles.secondaryBtn}
            >
              Speak with an Engineer
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
    color: "#10b981",
    fontSize: "12px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "3px",
    marginBottom: "20px",
  },
  badgeLine: {
    width: "30px",
    height: "2px",
    backgroundColor: "#10b981",
  },
  heading: {
    fontSize: "clamp(42px, 6vw, 68px)",
    fontWeight: "900",
    color: "#ffffff",
    lineHeight: "1.1",
    marginBottom: "28px",
    letterSpacing: "-1.5px",
    maxWidth: "950px",
  },
  subheadline: {
    fontSize: "18px",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "48px",
    lineHeight: "1.7",
    maxWidth: "680px",
  },
  buttonGroup: {
    display: "flex",
    gap: "20px",
  },
  primaryBtn: {
    backgroundColor: "#10b981",
    color: "#fff",
    padding: "18px 36px",
    fontSize: "13px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    textDecoration: "none",
    borderRadius: "4px",
  },
  secondaryBtn: {
    backgroundColor: "transparent",
    color: "#ffffff",
    padding: "18px 36px",
    fontSize: "13px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    textDecoration: "none",
    border: "2px solid rgba(255, 255, 255, 0.4)",
    borderRadius: "4px",
  },
};

export default HomeHero;
