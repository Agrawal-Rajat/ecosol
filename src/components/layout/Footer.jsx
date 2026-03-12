import React from "react";
import { NavLink } from "react-router-dom";
import footerLogo from "../../assets/logos/weblogo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>
        {`
          .ecosol-footer-scope {
            background-color: var(--color-deep-blue);
            color: var(--color-bg-white);
            padding: 100px 0 40px 0;
            
            /* --- GLOWING TOP BORDER --- */
            /* Using electric blue with a box shadow to create the 'glow' */
            border-top: 2px solid var(--color-electric-blue);
            box-shadow: 0 -10px 20px rgba(14, 165, 233, 0.15); 
            
            font-family: var(--font-primary);
            position: relative;
          }

          /* Optional: Adds a very subtle light beam at the very top */
          .ecosol-footer-scope::before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--color-electric-blue), transparent);
            filter: blur(2px);
          }

          .ecosol-footer-scope .footer-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
          }

          .ecosol-footer-scope .footer-top {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            justify-content: space-between;
            padding-bottom: 60px;
          }

          .ecosol-footer-scope .footer-brand {
            flex: 1 1 300px;
          }

          .ecosol-footer-scope .footer-logo {
            height: 60px;
            width: auto;
            display: block;
            margin-bottom: 25px;
          }

          .ecosol-footer-scope .footer-desc {
            font-size: 15px;
            line-height: 1.8;
            color: var(--color-steel-grey);
            max-width: 360px;
          }

          .ecosol-footer-scope .column-title {
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 25px;
            color: var(--color-electric-blue);
          }

          .ecosol-footer-scope .nav-stack {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .ecosol-footer-scope .footer-link {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .ecosol-footer-scope .footer-link:hover {
            color: var(--color-bg-white);
            transform: translateX(5px);
          }

          .ecosol-footer-scope .contact-info {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .ecosol-footer-scope .contact-item {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
            line-height: 1.6;
            display: flex;
            align-items: flex-start;
            gap: 12px;
          }

          .ecosol-footer-scope .footer-bottom {
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
          }

          .ecosol-footer-scope .copyright {
            font-size: 13px;
            color: var(--color-steel-grey);
          }

          .ecosol-footer-scope .legal-links {
            display: flex;
            gap: 20px;
          }

          @media (max-width: 768px) {
            .ecosol-footer-scope {
              padding: 60px 0 30px 0;
            }

            .ecosol-footer-scope .footer-top {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 40px;
            }

            .ecosol-footer-scope .footer-brand {
              flex: 1 1 auto;
              width: 100%;
            }

            .ecosol-footer-scope .footer-logo {
              margin: 0 auto 20px;
            }

            .ecosol-footer-scope .footer-desc {
              margin: 0 auto;
            }

            .ecosol-footer-scope .contact-item {
              justify-content: center;
              text-align: left;
            }

            .ecosol-footer-scope .footer-bottom {
              flex-direction: column;
              text-align: center;
              padding-top: 25px;
            }

            .ecosol-footer-scope .legal-links {
              justify-content: center;
            }
          }
        `}
      </style>

      <footer className="ecosol-footer-scope">
        <div className="footer-container">
          <div className="footer-top">
            {/* Column 1: Brand */}
            <div className="footer-brand">
              <img
                src={footerLogo}
                alt="Ecosol Projects"
                className="footer-logo"
              />
              <p className="footer-desc">
                Specialized electrical engineering consultancy providing
                advanced power system studies, grounding design, and
                infrastructure solutions for global utility and industrial
                sectors.
              </p>
            </div>

            {/* Column 2: Consultancy Links */}
            <div style={{ flex: "1 1 150px" }}>
              <h4 className="column-title">Consultancy</h4>
              <nav className="nav-stack">
                <NavLink to="/about" className="footer-link">
                  About Ecosol
                </NavLink>
                <NavLink to="/projects" className="footer-link">
                  Project Portfolio
                </NavLink>
                <NavLink to="/careers" className="footer-link">
                  Careers
                </NavLink>
                <NavLink to="/contact" className="footer-link">
                  Contact
                </NavLink>
              </nav>
            </div>

            {/* Column 3: Expertise Links */}
            <div style={{ flex: "1 1 180px" }}>
              <h4 className="column-title">Expertise</h4>
              <nav className="nav-stack">
                <NavLink to="/services" className="footer-link">
                  Power System Studies
                </NavLink>
                <NavLink to="/services" className="footer-link">
                  Grounding Engineering
                </NavLink>
                <NavLink to="/services" className="footer-link">
                  Electrical Detail Design
                </NavLink>
                <NavLink to="/services" className="footer-link">
                  Technical Advisory
                </NavLink>
              </nav>
            </div>

            {/* Column 4: Contact info */}
            <div style={{ flex: "1 1 250px" }}>
              <h4 className="column-title">Global Office</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span>✉️</span> info@ecosolprojects.com
                </div>
                <div className="contact-item">
                  <span>📞</span> +91 90048 17084
                </div>
                <div className="contact-item">
                  <span>📍</span> 523, Omaxe City – 1 Mayakhedi, Indore – 453771
                  India
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © {currentYear} Ecosol Projects Pvt. Ltd. | Power Engineering &
              Consultancy
            </p>
            <div className="legal-links">
              <NavLink
                to="/privacy"
                className="footer-link"
                style={{ fontSize: "13px" }}
              >
                Privacy Policy
              </NavLink>
              <NavLink
                to="/terms"
                className="footer-link"
                style={{ fontSize: "13px" }}
              >
                Terms of Service
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
