import React from "react";

// Existing Imports
import logo1 from "../../assets/logos/logo1.png";
import logo2 from "../../assets/logos/logo2.png";
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

function ClientGrid() {
  const metrics = [
    { value: "20+", label: "Years Experience" },
    { value: "8+", label: "Countries Covered" },
    { value: "400kV", label: "Power Systems" },
    { value: "700+", label: "MVA Plant Eng." },
  ];

  const directClients = [
    { src: "", alt: "KBH Infra" },
    { src: "", alt: "Jacobs Engineering" },
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
            background-color: #ffffff;
            overflow: hidden;
          }

          .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 40px;
          }

          /* Metrics Strip */
          .metrics-strip {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            background: #0f172a;
            padding: 45px;
            border-radius: 24px;
            margin-bottom: 100px;
            margin-top: -85px;
            box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.2);
          }

          .metric-item { text-align: center; border-right: 1px solid rgba(255,255,255,0.1); }
          .metric-item:last-child { border-right: none; }
          .metric-value { 
            display: block; 
            font-size: clamp(28px, 4vw, 40px); 
            font-weight: 900; 
            color: #10b981; 
            line-height: 1;
            margin-bottom: 8px;
          }
          .metric-label { 
            font-size: 11px; 
            color: rgba(255,255,255,0.6); 
            text-transform: uppercase; 
            letter-spacing: 2.5px;
            font-weight: 700;
          }

          /* Main Centered Header */
          .header-center {
            text-align: center;
            max-width: 1000px;
            margin: 0 auto 100px;
          }

          /* Vivid Gradient Heading Style from Original */
          .vivid-heading {
            font-size: clamp(36px, 6vw, 58px);
            font-weight: 900;
            color: #0f172a;
            letter-spacing: -3px;
            line-height: 1.05;
            margin-bottom: 30px;
          }

          .vivid-green-text {
            color: #10b981;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .sub-heading-text {
            font-size: clamp(24px, 3.5vw, 34px);
            font-weight: 900;
            color: #0f172a;
            letter-spacing: -1.5px;
            margin-bottom: 15px;
            line-height: 1.2;
          }

          /* Logo Box Style */
          .logo-box {
            width: 280px;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            border: 1px solid #f1f5f9;
            border-radius: 20px;
            padding: 35px;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            box-shadow: 0 4px 6px rgba(0,0,0,0.02);
          }

          .logo-box:hover {
            transform: translateY(-10px);
            border-color: #10b981;
            box-shadow: 0 25px 45px rgba(15, 23, 42, 0.1);
          }

          .logo-img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }

          .direct-clients-wrapper {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-bottom: 120px;
          }

          .marquee-track { display: flex; width: max-content; }
          .marquee-content { display: flex; gap: 30px; animation: scroll-left 60s linear infinite; padding-right: 30px; }
          
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (max-width: 768px) {
            .metrics-strip { grid-template-columns: repeat(2, 1fr); gap: 20px; padding: 30px; margin-top: -60px; }
            .direct-clients-wrapper { flex-direction: column; align-items: center; gap: 20px; }
            .logo-box { width: 100%; max-width: 300px; }
            .vivid-heading { letter-spacing: -1.5px; }
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

          {/* Header matched to WhyEcosol styling */}
          <div className="header-center">
            <span
              style={{
                color: "#10b981",
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
              Experience Across Global Energy & <br />
              <span className="vivid-green-text">
                Infrastructure Leadership.
              </span>
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: "19px",
                lineHeight: "1.8",
                margin: "0 auto",
              }}
            >
              Our engineering leadership and technical team bring over 20 years
              of international experience supporting complex power, oil & gas,
              and industrial infrastructure projects worldwide.
            </p>
          </div>

          {/* Sub-Section 1: Direct Clients */}
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div
              style={{
                height: "3px",
                width: "80px",
                background: "#10b981",
                margin: "0 auto 25px",
              }}
            ></div>
            <h3 className="sub-heading-text">Direct Clients</h3>
            <p
              style={{
                color: "#64748b",
                fontSize: "17px",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Organizations that have directly engaged Ecosol Projects Pvt Ltd
              for engineering and consultancy services.
            </p>
          </div>

          <div className="direct-clients-wrapper">
            {directClients.map((client, i) => (
              <div key={i} className="logo-box">
                <img src={client.src} alt={client.alt} className="logo-img" />
              </div>
            ))}
          </div>

          {/* Sub-Section 2: Project Experience */}
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div
              style={{
                height: "3px",
                width: "80px",
                background: "#10b981",
                margin: "0 auto 25px",
              }}
            ></div>
            <h3 className="sub-heading-text">
              Projects Delivered With{" "}
              <span className="vivid-green-text">
                Leading Global Organizations
              </span>
            </h3>
            <p
              style={{
                color: "#64748b",
                fontSize: "17px",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Technical contributions delivered through prior professional
              engagements and strategic industry collaborations.
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div style={{ marginTop: "50px" }}>
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
              marginTop: "80px",
              paddingTop: "40px",
              borderTop: "1px solid #f1f5f9",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "#94a3b8",
                maxWidth: "850px",
                margin: "0 auto",
                lineHeight: "1.6",
                fontStyle: "italic",
              }}
            >
              * Logos represent organizations where Ecosol’s leadership and
              engineering team members have contributed in their professional
              capacity through previous employment, project partnerships, or
              consulting assignments.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientGrid;
