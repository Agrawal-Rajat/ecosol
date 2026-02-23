import React from "react";
import { NavLink } from "react-router-dom";
import footerLogo from "../../assets/logos/weblogo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .footer-top {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
              gap: 40px !important;
            }
            .footer-brand {
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
              flex: 1 1 auto !important;
            }
            .footer-links {
              align-items: center !important;
              width: 100% !important;
            }
            .footer-bottom {
              flex-direction: column !important;
              text-align: center !important;
            }
          }
        `}
      </style>

      <footer style={styles.footer}>
        <div style={styles.container}>
          {/* Main Footer Content */}
          <div style={styles.topSection} className="footer-top">
            {/* Brand & Logo Column */}
            <div style={styles.brandColumn} className="footer-brand">
              <div style={styles.logoWrapper}>
                <img
                  src={footerLogo}
                  alt="Ecosol Projects"
                  style={styles.logoImage}
                />
              </div>
              <p style={styles.description}>
                Leading the transition to sustainable energy through precision
                engineering and global consultancy expertise.
              </p>
            </div>

            {/* Quick Links */}
            <div style={styles.linkColumn} className="footer-links">
              <h4 style={styles.columnTitle}>Company</h4>
              <nav style={styles.navStack}>
                <NavLink to="/about" style={styles.footerLink}>
                  About Us
                </NavLink>
                <NavLink to="/projects" style={styles.footerLink}>
                  Our Projects
                </NavLink>
                <NavLink to="/careers" style={styles.footerLink}>
                  Careers
                </NavLink>
                <NavLink to="/contact" style={styles.footerLink}>
                  Contact
                </NavLink>
              </nav>
            </div>

            {/* Services */}
            <div style={styles.linkColumn} className="footer-links">
              <h4 style={styles.columnTitle}>Services</h4>
              <nav style={styles.navStack}>
                <NavLink to="/services" style={styles.footerLink}>
                  Power Engineering
                </NavLink>
                <NavLink to="/services" style={styles.footerLink}>
                  Technical Audit
                </NavLink>
                <NavLink to="/services" style={styles.footerLink}>
                  Consultancy
                </NavLink>
                <NavLink to="/services" style={styles.footerLink}>
                  Renewables
                </NavLink>
              </nav>
            </div>

            {/* Contact Details */}
            <div style={styles.linkColumn} className="footer-links">
              <h4 style={styles.columnTitle}>Get in Touch</h4>
              <div style={styles.contactInfo}>
                <p style={styles.contactItem}>📧 info@ecosolprojects.com</p>
                <p style={styles.contactItem}>📞 +91 90048 17084</p>
                <p style={styles.contactItem}>
                  📍 523, Omaxe City – 1 Mayakhedi, Indore – 453771 Madhya
                  Pradesh, India
                </p>
              </div>
            </div>
          </div>

          {/* Copyright & Legal */}
          <div style={styles.bottomSection} className="footer-bottom">
            <p style={styles.copyright}>
              © {currentYear} Ecosol Projects Pvt. Ltd. All Rights Reserved.
            </p>
            <div style={styles.legalLinks}>
              <NavLink to="/privacy" style={styles.legalLink}>
                Privacy Policy
              </NavLink>
              <span style={styles.divider}>|</span>
              <NavLink to="/terms" style={styles.legalLink}>
                Terms of Service
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

const styles = {
  footer: {
    backgroundColor: "#0f172a",
    color: "#fff",
    padding: "80px 0 40px 0",
    borderTop: "6px solid #10b981",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 40px",
  },
  topSection: {
    display: "flex",
    flexWrap: "wrap",
    gap: "50px",
    justifyContent: "space-between",
    paddingBottom: "60px",
  },
  brandColumn: {
    flex: "1 1 350px",
  },
  logoWrapper: {
    marginBottom: "25px",
  },
  logoImage: {
    height: "60px",
    width: "auto",
    display: "block",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "rgba(255, 255, 255, 0.8)",
    maxWidth: "340px",
  },
  linkColumn: {
    flex: "1 1 180px",
    display: "flex",
    flexDirection: "column",
  },
  columnTitle: {
    fontSize: "14px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginBottom: "30px",
    color: "#10b981",
  },
  navStack: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  footerLink: {
    fontSize: "15px",
    color: "rgba(255, 255, 255, 0.7)",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  contactItem: {
    fontSize: "15px",
    color: "rgba(255, 255, 255, 0.7)",
  },
  bottomSection: {
    paddingTop: "30px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },
  copyright: {
    fontSize: "13px",
    color: "rgba(255, 255, 255, 0.5)",
  },
  legalLinks: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  legalLink: {
    fontSize: "13px",
    color: "rgba(255, 255, 255, 0.5)",
    textDecoration: "none",
  },
  divider: {
    color: "rgba(255, 255, 255, 0.2)",
  },
};

export default Footer;
