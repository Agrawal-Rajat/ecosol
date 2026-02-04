import React from "react";
import { NavLink } from "react-router-dom";

function HomeHero() {
  return (
    <>
      <style>
        {`
          .hero-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
            filter: brightness(1.1);
          }
          
          /* TABLET & MOBILE ADJUSTMENTS */
          @media (max-width: 992px) {
            .hero-section { 
                padding: 100px 0 60px 0 !important; 
                text-align: center; 
            }
            .hero-heading { 
                font-size: 38px !important; 
                line-height: 1.2 !important;
            }
            .hero-btn-group { 
                justify-content: center !important; 
                flex-direction: column !important; /* Stack buttons for better mobile tap targets */
                align-items: center;
                gap: 15px !important;
            }
            .hero-subtext { 
                margin: 0 auto 32px auto !important; 
                font-size: 16px !important;
            }
          }

          /* SMALL MOBILE ADJUSTMENTS */
          @media (max-width: 480px) {
            .hero-heading { font-size: 32px !important; }
            .hero-btn { 
                width: 90% !important; /* Prevents buttons from hitting screen edges */
                padding: 16px 20px !important; 
            }
            .hero-badge {
                font-size: 11px !important;
                letter-spacing: 2px !important;
            }
          }
        `}
      </style>

      <section className="hero-section" style={styles.hero}>
        <div style={styles.gridOverlay} />

        <div style={styles.container}>
          <div style={styles.content}>
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

            <p className="hero-subtext" style={styles.subtext}>
              Leading Power Systems Consultancy specializing in Electrical
              Design, Grid Stability, and Renewable Integration.
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
                Get in Touch
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  hero: {
    position: "relative",
    backgroundColor: "#000066",
    backgroundImage: "linear-gradient(145deg, #000066 0%, #010411 100%)",
    padding: "160px 0 120px 0",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  },
  gridOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `linear-gradient(rgba(68, 158, 29, 0.07) 1px, transparent 1px), 
                      linear-gradient(90deg, rgba(68, 158, 29, 0.07) 1px, transparent 1px)`,
    backgroundSize: "45px 45px",
    zIndex: 1,
  },
  container: {
    maxWidth: "1400px",
    width: "100%",
    margin: "0 auto",
    padding: "0 24px",
    position: "relative",
    zIndex: 2,
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    color: "#449e1d",
    fontSize: "13px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "3px",
    marginBottom: "20px",
  },
  badgeLine: {
    width: "30px",
    height: "2px",
    backgroundColor: "#449e1d",
  },
  heading: {
    fontSize: "60px",
    fontWeight: "800",
    color: "#ffffff",
    lineHeight: "1.1",
    marginBottom: "24px",
    letterSpacing: "-1px",
  },
  subtext: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "rgba(255, 255, 255, 0.85)",
    marginBottom: "40px",
    maxWidth: "600px",
  },
  buttonGroup: {
    display: "flex",
    gap: "18px",
  },
  primaryBtn: {
    backgroundColor: "#449e1d",
    color: "#fff",
    padding: "16px 32px",
    fontSize: "14px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textDecoration: "none",
    borderRadius: "2px",
    display: "inline-block",
  },
  secondaryBtn: {
    backgroundColor: "transparent",
    color: "#fff",
    padding: "16px 32px",
    fontSize: "14px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textDecoration: "none",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "2px",
    display: "inline-block",
  },
};

export default HomeHero;
