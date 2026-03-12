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
            background-color: var(--color-deep-blue);
            /* Updated to an electrical substation image for engineering credibility */
            background-image: linear-gradient(to right, rgba(11, 17, 32, 0.95) 40%, rgba(11, 17, 32, 0.4) 100%), 
                              url('https://images.unsplash.com/photo-1548345680-f5475ea90f14?auto=format&fit=crop&q=80&w=2070');
            background-size: cover;
            background-position: center;
            overflow: hidden;
          }

          .hero-grid-overlay {
            position: absolute;
            inset: 0;
            /* Changed to a subtle white grid to mimic engineering blueprints */
            background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 50px 50px;
            z-index: 1;
            pointer-events: none;
          }

          .hero-content {
            position: relative;
            z-index: 2;
            max-width: var(--container-width, 1400px);
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
            /* Swapped the green glow for a logo-blue glow */
            box-shadow: 0 12px 24px rgba(26, 95, 180, 0.4);
          }

          .hero-btn.secondary:hover {
            background-color: rgba(255, 255, 255, 0.05);
            box-shadow: none;
            border-color: var(--color-bg-white);
          }
          
          @media (max-width: 1024px) {
            .hero-section { 
              min-height: 80vh;
              text-align: center; 
              background-image: linear-gradient(rgba(11, 17, 32, 0.9), rgba(11, 17, 32, 0.9)), 
                                url('https://images.unsplash.com/photo-1548345680-f5475ea90f14?auto=format&fit=crop&q=80&w=2070');
            }
            .hero-content { padding: 0 24px; }
            .hero-heading { font-size: 42px !important; }
            .hero-btn-group { 
              justify-content: center !important; 
              flex-direction: column;
              gap: 16px !important;
            }
            .hero-badge {
              justify-content: center !important;
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
            <span style={{ color: "var(--color-electric-blue)" }}>
              For Power Infrastructure.
            </span>
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
              className="hero-btn secondary"
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
    color: "var(--color-steel-grey)", // Muted for a technical feel
    fontSize: "12px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "3px",
    marginBottom: "20px",
  },
  badgeLine: {
    width: "30px",
    height: "2px",
    backgroundColor: "var(--color-electric-blue)", // Sharp technical accent
  },
  heading: {
    fontSize: "clamp(42px, 6vw, 68px)",
    fontWeight: "900",
    color: "var(--color-bg-white)",
    lineHeight: "1.1",
    marginBottom: "28px",
    letterSpacing: "-1.5px",
    maxWidth: "950px",
  },
  subheadline: {
    fontSize: "18px",
    fontWeight: "400",
    color: "var(--color-steel-grey)", // Replaced semi-transparent white with solid steel
    marginBottom: "48px",
    lineHeight: "1.7",
    maxWidth: "680px",
  },
  buttonGroup: {
    display: "flex",
    gap: "20px",
  },
  primaryBtn: {
    backgroundColor: "var(--color-logo-blue)", // The main call-to-action uses logo blue
    color: "var(--color-bg-white)",
    padding: "18px 36px",
    fontSize: "13px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    textDecoration: "none",
    borderRadius: "2px", // Sharper edges
  },
  secondaryBtn: {
    backgroundColor: "transparent",
    color: "var(--color-bg-white)",
    padding: "18px 36px",
    fontSize: "13px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    textDecoration: "none",
    border: "2px solid var(--color-steel-grey)",
    borderRadius: "2px",
  },
};

export default HomeHero;
