import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData";

function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div
        style={{
          padding: "100px 24px",
          textAlign: "center",
          fontFamily: "var(--font-primary)",
        }}
      >
        <h2 style={{ color: "var(--color-primary)", fontWeight: 900 }}>
          SPECIFICATION_NOT_FOUND
        </h2>
        <p>
          The requested service module could not be located in the 2026
          database.
        </p>
      </div>
    );
  }

  const getIllustration = (slug) => {
    const images = {
      "power-system-studies":
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600",
      "protection-relay-systems":
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1600",
      "arc-flash-safety":
        "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1600",
      "grounding-emi":
        "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=1600",
      "power-generation-substations":
        "https://images.unsplash.com/photo-1541913053121-31f82cb527b9?q=80&w=1600",
      "power-automation":
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600",
      "renewable-energy":
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600",
      "industrial-electrification":
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600",
    };
    return (
      images[slug] ||
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600"
    );
  };

  const heroImage = getIllustration(slug);

  return (
    <>
      <style>
        {`
          :root {
            --color-primary: #000066; 
            --color-accent-green: #449e1d; 
            --color-logo-blue: #1a5fb4; 
            --color-bg: #f9fafb;
            --color-white: #ffffff;
            --font-primary: "Inter", system-ui, sans-serif;
          }

          .service-page-wrapper {
            background-color: var(--color-white);
            font-family: var(--font-primary);
            color: var(--color-primary);
            overflow-x: hidden;
          }

          .container-tight {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 5;
          }

          /* --- LOW TONE HERO (80% SCREEN) --- */
          .hero-split-section {
            position: relative;
            height: 80vh;
            min-height: 600px;
            background-image: url('${heroImage}');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            display: flex;
            align-items: center;
          }

          /* Subtle light overlay to make Navy text pop */
          .hero-split-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, 
              rgba(249, 250, 251, 0.96) 0%, 
              rgba(249, 250, 251, 0.8) 40%, 
              rgba(249, 250, 251, 0.1) 100%);
            z-index: 1;
          }

          .hero-info-text {
            max-width: 800px;
            z-index: 3;
          }

          .hero-title-main {
            font-size: clamp(38px, 7vw, 75px);
            font-weight: 800;
            line-height: 1;
            letter-spacing: -3px;
            margin: 20px 0;
            color: var(--color-primary);
            text-transform: uppercase;
          }

          .hero-description {
            font-size: 21px;
            line-height: 1.6;
            color: #334155;
            border-left: 5px solid var(--color-accent-green);
            padding-left: 30px;
            max-width: 650px;
          }

          /* --- DATA STRIPS --- */
          .data-strip {
            padding: 100px 0;
            position: relative;
            border-bottom: 1px solid #edf2f7;
          }

          .strip-muted { background: var(--color-bg); }

          .layout-grid-compact {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: 60px;
          }

          .sidebar-label-bold {
            font-size: 13px;
            font-weight: 800;
            color: var(--color-accent-green);
            text-transform: uppercase;
            letter-spacing: 4px;
            position: sticky;
            top: 100px;
            height: fit-content;
          }

          .text-content-rich {
            font-size: 22px;
            line-height: 1.8;
            color: #1a202c;
          }

          /* --- CARDS --- */
          .card-grid-tight {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
          }

          .minimal-data-card {
            background: var(--color-white);
            padding: 40px;
            border-top: 4px solid var(--color-logo-blue);
            box-shadow: 0 10px 30px rgba(0, 0, 102, 0.04);
            transition: all 0.3s ease;
          }

          .minimal-data-card:hover {
            transform: translateY(-5px);
            border-top-color: var(--color-accent-green);
          }

          .tag-industrial-heavy {
            padding: 12px 20px;
            background: var(--color-primary);
            color: var(--color-white);
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin: 0 12px 12px 0;
            display: inline-block;
          }

          .background-num-watermark {
            position: absolute;
            font-size: 250px;
            font-weight: 900;
            color: rgba(0, 0, 102, 0.03);
            right: 40px;
            bottom: -20px;
            pointer-events: none;
            line-height: 1;
          }

          /* --- MOBILE --- */
          @media (max-width: 900px) {
            .hero-split-section { height: 65vh; text-align: center; background-attachment: scroll; }
            .hero-split-section::before { background: rgba(249, 250, 251, 0.92); }
            .hero-description { border-left: none; padding-left: 0; margin: 0 auto; font-size: 18px; }
            .layout-grid-compact { grid-template-columns: 1fr; gap: 30px; }
            .sidebar-label-bold { position: static; margin-bottom: 10px; }
            .container-tight { padding: 0 24px; }
          }
        `}
      </style>

      <div className="service-page-wrapper">
        {/* HERO SECTION */}
        <header className="hero-split-section">
          <div className="container-tight">
            <div className="hero-info-text">
              <span
                style={{
                  color: "var(--color-accent-green)",
                  fontWeight: 800,
                  letterSpacing: "4px",
                  fontSize: "12px",
                }}
              >
                CORE SERVICE MODULE
              </span>
              <h1 className="hero-title-main">{service.title}</h1>
              <p className="hero-description">{service.heroText}</p>
            </div>
          </div>
        </header>

        {/* 01 OVERVIEW */}
        <section className="data-strip">
          <div className="background-num-watermark">01</div>
          <div className="container-tight">
            <div className="layout-grid-compact">
              <div className="sidebar-label-bold">Executive Overview</div>
              <p className="text-content-rich">{service.overview}</p>
            </div>
          </div>
        </section>

        {/* 02 OPERATIONAL SCOPE */}
        <section className="data-strip strip-muted">
          <div className="background-num-watermark">02</div>
          <div className="container-tight">
            <div className="layout-grid-compact">
              <div className="sidebar-label-bold">Operational Scope</div>
              <div className="card-grid-tight">
                {service.scope.map((item, i) => (
                  <div key={i} className="minimal-data-card">
                    <span
                      style={{
                        fontSize: "10px",
                        color: "var(--color-logo-blue)",
                        fontWeight: 800,
                        display: "block",
                        marginBottom: "12px",
                      }}
                    >
                      MODULE_PROTOCOL_{i + 1}
                    </span>
                    <h3
                      style={{ fontSize: "20px", fontWeight: 700, margin: 0 }}
                    >
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 03 TOOLS & STANDARDS */}
        <section className="data-strip">
          <div className="background-num-watermark">03</div>
          <div className="container-tight">
            <div className="layout-grid-compact">
              <div className="sidebar-label-bold">Systems & Compliance</div>
              <div>
                <h4
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    marginBottom: "15px",
                  }}
                >
                  ENGINEERING TOOLSET
                </h4>
                {service.tools.map((item, i) => (
                  <span key={i} className="tag-industrial-heavy">
                    {item}
                  </span>
                ))}
                <h4
                  style={{
                    fontSize: "14px",
                    color: "#64748b",
                    marginTop: "30px",
                    marginBottom: "15px",
                  }}
                >
                  REGULATORY STANDARDS
                </h4>
                {service.standards.map((item, i) => (
                  <span
                    key={i}
                    className="tag-industrial-heavy"
                    style={{ background: "var(--color-logo-blue)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 04 DELIVERABLES */}
        <section
          className="data-strip strip-muted"
          style={{ borderBottom: "none" }}
        >
          <div className="background-num-watermark">04</div>
          <div className="container-tight">
            <div className="layout-grid-compact">
              <div className="sidebar-label-bold">Verified Deliverables</div>
              <div className="card-grid-tight">
                {service.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="minimal-data-card"
                    style={{ borderTopColor: "var(--color-accent-green)" }}
                  >
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        marginBottom: "15px",
                      }}
                    >
                      {item}
                    </h3>
                    <div
                      style={{
                        color: "var(--color-accent-green)",
                        fontWeight: 800,
                        fontSize: "11px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          background: "var(--color-accent-green)",
                          borderRadius: "2px",
                        }}
                      ></span>
                      CERTIFIED_OUTPUT
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ServiceDetail;
