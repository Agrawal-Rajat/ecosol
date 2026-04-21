import React from "react";
// Existing Imports preserved
import logo3 from "../../assets/logos/logo3.png";
import logo4 from "../../assets/logos/logo4.png";
import logo5 from "../../assets/logos/logo5.png";
import logo6 from "../../assets/logos/logo6.png";
import logo7 from "../../assets/logos/logo7.png";
import logo8 from "../../assets/logos/logo8.png";
import logo9 from "../../assets/logos/logo9.png";
import logo10 from "../../assets/logos/logo10.png";
import logo11 from "../../assets/logos/logo11.png";
import logo12 from "../../assets/logos/logo12.png";
import logo13 from "../../assets/logos/logo13.png";
import logo14 from "../../assets/logos/logo14.png";
import logo15 from "../../assets/logos/logo15.png";
import logo16 from "../../assets/logos/logo16.png";
import logo17 from "../../assets/logos/logo17.png";
import kbhLogo from "../../assets/logos/kbh.png";
import jacobsLogo from "../../assets/logos/jacobs1.png";

function ClientGrid() {
  const metrics = [
    { value: "20+", label: "Years Experience" },
    { value: "8+", label: "Countries Covered" },
    { value: "400kV", label: "Power Systems" },
    { value: "700+", label: "MVA Plant Eng." },
  ];

  const directClients = [
    { src: kbhLogo, alt: "KBH Infra" },
    { src: jacobsLogo, alt: "Jacobs Engineering" },
  ];

  const projectExp = [
    { src: logo3, alt: "Petroleum Development Oman" },
    { src: logo4, alt: "Exterran" },
    { src: logo5, alt: "Foseco" },
    { src: logo6, alt: "Maersk Oil" },
    { src: logo7, alt: "BP" },
    { src: logo8, alt: "Technip Energies" },
    { src: logo9, alt: "Petrofac" },
    { src: logo10, alt: "Larsen & Toubro" },
    { src: logo11, alt: "Reliance Industries" },
    { src: logo12, alt: "Fichtner India" },
    { src: logo13, alt: "COWI" },
    { src: logo14, alt: "Global Partner 14" },
    { src: logo15, alt: "Global Partner 15" },
    { src: logo16, alt: "Global Partner 16" },
    { src: logo17, alt: "Global Partner 17" },
  ];

  const marqueeLogos = [...projectExp, ...projectExp];

  return (
    <>
      <style>
        {`
          .clients-section {
            padding: 120px 0;
            background-color: var(--color-bg-white);
            overflow: hidden;
            border-top: 1px solid var(--color-bg-light-grey);
          }

          .clients-section .container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
          }

          /* --- Metrics Strip (Visibility Fixed) --- */
          .metrics-strip {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            background: var(--color-logo-navy);
            padding: 32px 28px;
            border-radius: 2px;
            margin-bottom: 48px;
            margin-top: -48px;
            box-shadow: 0 30px 60px rgba(11, 17, 32, 0.2);
            position: relative;
            z-index: 10;
          }

          .metric-item { 
            text-align: center; 
            border-right: 1px solid rgba(255,255,255,0.1); 
          }
          .metric-item:last-child { border-right: none; }
          
          .metric-value { 
            display: block; 
            font-size: clamp(32px, 4vw, 44px); 
            font-weight: 900; 
            color: var(--color-electric-blue); 
            line-height: 1;
            margin-bottom: 6px;
          }

          .metric-label { 
            font-size: 11px; 
            /* Lightened color for clear visibility on dark background */
            color: #cbd5e1; 
            text-transform: uppercase; 
            letter-spacing: 3px;
            font-weight: 800;
          }

          /* --- Header Styles --- */
          .header-center {
            text-align: center;
            max-width: 900px;
            margin: 0 auto 44px;
          }

          .vivid-heading {
            font-size: clamp(36px, 5vw, 54px);
            font-weight: 900;
            color: var(--color-logo-navy);
            letter-spacing: -2px;
            line-height: 1.1;
            margin-bottom: 18px;
          }

          .accent-text-blue {
            color: var(--color-electric-blue);
          }

          .sub-heading-text {
            font-size: 28px;
            font-weight: 900;
            color: var(--color-logo-navy);
            letter-spacing: -1px;
            margin-bottom: 10px;
            line-height: 1.2;
          }

          /* --- Logo Box Style (Original Colors Restored) --- */
          .logo-box {
            width: 220px;
            height: 110px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-bg-white);
            border: 1px solid var(--color-bg-light-grey);
            border-radius: 2px;
            padding: 20px;
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          }

          .logo-box:hover {
            transform: translateY(-8px);
            border-color: var(--color-logo-blue);
            box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          }

          .logo-img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            /* REMOVED grayscale and opacity for original brand colors */
            transition: all 0.4s ease;
          }

          .direct-clients-wrapper {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 50px;
          }

          /* --- Marquee --- */
          .marquee-track { display: flex; width: max-content; }
          .marquee-content { display: flex; gap: 16px; animation: scroll-left 60s linear infinite; padding-right: 16px; }
          
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (max-width: 768px) {
            .metrics-strip { grid-template-columns: repeat(2, 1fr); gap: 20px; padding: 22px 16px; margin-top: -24px; margin-bottom: 30px; }
            .direct-clients-wrapper { flex-direction: column; align-items: center; gap: 20px; }
            .logo-box { width: 100%; max-width: 260px; height: 96px; padding: 16px; }
            .header-center { margin: 0 auto 30px; }
            .sub-heading-text { font-size: 22px; }
          }
        `}
      </style>

      <section className="clients-section">
        <div className="container">
          {/* Metrics Strip */}
          <div className="metrics-strip">
            {metrics.map((m, i) => (
              <div key={i} className="metric-item">
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Header */}
          <div className="header-center">
            <span
              style={{
                color: "var(--color-steel-grey)",
                fontWeight: "800",
                letterSpacing: "4px",
                fontSize: "12px",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "15px",
              }}
            >
              Industry Experience
            </span>
            <h2 className="vivid-heading">
              Proven Expertise Across <br />
              <span className="accent-text-blue">
                Global Energy Infrastructure.
              </span>
            </h2>
            <p
              style={{
                color: "var(--color-text-main)",
                fontSize: "18px",
                lineHeight: "1.8",
                margin: "0 auto",
              }}
            >
              Our technical team brings over 20 years of international field
              experience supporting complex power, petrochemical, and industrial
              infrastructure projects.
            </p>
          </div>

          {/* Direct Clients */}
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div
              style={{
                height: "2px",
                width: "60px",
                background: "var(--color-electric-blue)",
                margin: "0 auto 16px",
              }}
            ></div>
            <h3 className="sub-heading-text">Direct Clients</h3>
            <p
              style={{
                color: "var(--color-steel-grey)",
                fontSize: "15px",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Organizations served directly by Ecosol for engineering and
              specialized technical consultancy.
            </p>
          </div>

          <div className="direct-clients-wrapper">
            {directClients.map((client, i) => (
              <div key={i} className="logo-box">
                <img src={client.src} alt={client.alt} className="logo-img" />
              </div>
            ))}
          </div>

          {/* Project Experience */}
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div
              style={{
                height: "2px",
                width: "60px",
                background: "var(--color-electric-blue)",
                margin: "0 auto 16px",
              }}
            ></div>
            <h3 className="sub-heading-text">
              Project Contributions With <br />
              <span className="accent-text-blue">
                Leading Global Organizations
              </span>
            </h3>
            <p
              style={{
                color: "var(--color-steel-grey)",
                fontSize: "15px",
                maxWidth: "750px",
                margin: "0 auto",
              }}
            >
              Technical contributions delivered through professional
              engagements, strategic partnerships, and collaborative industry
              projects.
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div style={{ marginTop: "18px" }}>
          <div className="marquee-track">
            <div className="marquee-content">
              {marqueeLogos.map((logo, index) => (
                <div key={index} className="logo-box">
                  <img src={logo.src} alt={logo.alt} className="logo-img" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div
            style={{
              marginTop: "32px",
              paddingTop: "12px",
              borderTop: "1px solid var(--color-bg-light-grey)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "var(--color-steel-grey)",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.6",
                opacity: 0.8,
              }}
            >
              * Logos represent organizations where the engineering team has
              contributed technical expertise through previous professional
              capacities, consulting assignments, or collaborative partnerships.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientGrid;
