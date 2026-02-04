import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Main Footer Content */}
        <div style={styles.topSection}>
          {/* Brand & Logo Column */}
          <div style={styles.brandColumn}>
            <div style={styles.logoWrapper}>
              <span style={styles.brandMain}>ecosol</span>
              <div style={styles.brandSubContainer}>
                <div style={styles.logoLine} />
                <span style={styles.brandSub}>projects</span>
                <div style={styles.logoLine} />
              </div>
            </div>
            <p style={styles.description}>
              Leading the transition to sustainable energy through precision
              engineering and global consultancy expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div style={styles.linkColumn}>
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
          <div style={styles.linkColumn}>
            <h4 style={styles.columnTitle}>Services</h4>
            <nav style={styles.navStack}>
              <NavLink to="/services" style={styles.footerLink}>
                Power Engineering
              </NavLink>
              <NavLink to="/expertise" style={styles.footerLink}>
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
          <div style={styles.linkColumn}>
            <h4 style={styles.columnTitle}>Get in Touch</h4>
            <div style={styles.contactInfo}>
              <p style={styles.contactItem}>📧 inquiry@ecosolprojects.com</p>
              <p style={styles.contactItem}>📞 +91 (Your-Phone-Number)</p>
              <p style={styles.contactItem}>📍 Registered Office, India</p>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div style={styles.bottomSection}>
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
  );
}

const styles = {
  footer: {
    backgroundColor: "var(--color-primary)", // Exact Deep Navy from logo
    color: "#fff",
    padding: "80px 0 40px 0",
    marginTop: "0", // Removed margin so it can sit flush if content is short
    borderTop: "6px solid var(--color-accent-green)", // Thick Forest Green accent
  },
  container: {
    maxWidth: "var(--container-width)",
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
    display: "flex",
    flexDirection: "column",
    marginBottom: "25px",
    filter: "brightness(0) invert(1)", // Makes navy logo parts white for the dark footer
  },
  brandMain: {
    fontSize: "40px",
    fontWeight: "800",
    letterSpacing: "-1.5px",
    lineHeight: "0.8",
  },
  brandSubContainer: {
    display: "flex",
    alignItems: "center",
    width: "180px",
    gap: "6px",
    marginTop: "5px",
  },
  logoLine: {
    flex: 1,
    height: "1.5px",
    backgroundColor: "#fff",
  },
  brandSub: {
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "rgba(255, 255, 255, 0.8)",
    maxWidth: "340px",
  },
  linkColumn: {
    flex: "1 1 180px",
  },
  columnTitle: {
    fontSize: "14px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginBottom: "30px",
    color: "var(--color-accent-green)", // Title in brand green
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
